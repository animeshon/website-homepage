locals {
  run_service_encyclopedia_name     = data.terraform_remote_state.encyclopedia.outputs.run_service_name
  run_service_encyclopedia_location = data.terraform_remote_state.encyclopedia.outputs.run_service_location
}

# Setup the backend service  with Cloud CDN enabled.
resource "google_compute_backend_service" "homepage" {
  name       = "animeshon-com--homepage"
  enable_cdn = true
  protocol   = "HTTPS"

  backend {
    group = google_compute_region_network_endpoint_group.homepage.id
  }
}

resource "google_compute_backend_service" "encyclopedia" {
  name       = "animeshon-com--encyclopedia"
  enable_cdn = true
  protocol   = "HTTPS"

  backend {
    group = google_compute_region_network_endpoint_group.encyclopedia.id
  }
}

# NEG for the serverless Cloud Run instance.
resource "google_compute_region_network_endpoint_group" "homepage" {
  name                  = "homepage-neg"
  network_endpoint_type = "SERVERLESS"
  region                = "europe-west1"

  cloud_run {
    service = google_cloud_run_service.homepage.name
  }
}

resource "google_compute_region_network_endpoint_group" "encyclopedia" {
  name                  = "encyclopedia-neg"
  network_endpoint_type = "SERVERLESS"
  region                = "europe-west1"
  #   region                = local.run_service_encyclopedia_location

  cloud_run {
    service = local.run_service_encyclopedia_name
  }
}

# Setup mapping for images backends.
resource "google_compute_url_map" "animeshon_com_https" {
  name            = "animeshon-com--https"
  default_service = google_compute_backend_service.homepage.id

  host_rule {
    hosts        = ["*"]
    path_matcher = "default"
  }

  path_matcher {
    name            = "default"
    default_service = google_compute_backend_service.homepage.id

    path_rule {
      paths = ["/e/*", "/e"] # Encyclopedia URI - redirect all traffic to its Cloud Run instance.

      # ! NOTE: Path rewrite has been temporarily disabled due to https://github.com/vercel/next.js/discussions/16958.
      # route_action {
      #   url_rewrite {
      #     path_prefix_rewrite = "/"
      #   }
      # }

      service = google_compute_backend_service.encyclopedia.id
    }
  }
}

resource "google_compute_url_map" "animeshon_com_http" {
  name = "animeshon-com--http"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"

    strip_query = false
  }
}

# Setup a proxy for future multiple proxies in different regions.
resource "google_compute_target_https_proxy" "animeshon_com_https" {
  name    = "animeshon-com--https"
  url_map = google_compute_url_map.animeshon_com_https.id

  ssl_certificates = [google_compute_managed_ssl_certificate.animeshon_com.id]
}
resource "google_compute_target_http_proxy" "animeshon_com_http" {
  name    = "animeshon-com--http"
  url_map = google_compute_url_map.animeshon_com_http.id
}

# Setup forwarding rules to HTTP and HTTPS backend ports.
resource "google_compute_global_forwarding_rule" "animeshon_com_fwd_rule_https" {
  name        = "animeshon-com--fwd-rule--https"
  ip_address  = google_compute_global_address.animeshon_com.address
  ip_protocol = "TCP"
  port_range  = "443"
  target      = google_compute_target_https_proxy.animeshon_com_https.id
}

resource "google_compute_global_forwarding_rule" "animeshon_com_fwd_rule_http" {
  name        = "animeshon-com--fwd-rule--http"
  ip_address  = google_compute_global_address.animeshon_com.address
  ip_protocol = "TCP"
  port_range  = "80"
  target      = google_compute_target_http_proxy.animeshon_com_http.id
}
