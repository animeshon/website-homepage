provider "google" {
  version = "~> 3.20"
}

# NOTE: A new id is generated each time we switch to a new image tag.
resource "random_id" "homepage" {
  keepers = {
    image_tag = var.image_tag
  }

  byte_length = 8
}

resource "google_cloud_run_service" "homepage" {
  project  = data.terraform_remote_state.root.outputs.project_id
  location = "europe-west1"
  name     = "homepage-animeshon-com"

  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "5"
        "run.googleapis.com/client-name"   = "cloud-console"
      }
      name = format("homepage-animeshon-com-%s", random_id.homepage.hex) 
    }

    spec {
      container_concurrency = 80
      service_account_name  = data.terraform_remote_state.root.outputs.compute_default_service_account_email

      containers {
        image = format("gcr.io/gcp-animeshon/homepage:%s", var.image_tag)

        env {
          name  = "HOST"
          value = "animeshon.com"
        }

        resources {
          limits = {
            cpu    = "1000m"
            memory = "256Mi"
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Configure the domain name mapping for the instance to animeshon.com.
resource "google_cloud_run_domain_mapping" "homepage" {
  project  = google_cloud_run_service.homepage.project
  location = google_cloud_run_service.homepage.location
  name     = "animeshon.com"

  metadata {
    namespace = data.terraform_remote_state.root.outputs.project_id
  }

  spec {
    route_name = google_cloud_run_service.homepage.name
  }
}

# Allow everyone to access this instance from animeshon.com.
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "homepage" {
  project  = google_cloud_run_service.homepage.project
  location = google_cloud_run_service.homepage.location
  service  = google_cloud_run_service.homepage.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
