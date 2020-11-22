# Setup backends with Cloud CDN enabled.
resource "google_compute_backend_service" "homepage" {
  name        = "animeshon-com--homepage"
  enable_cdn  = true
}
resource "google_compute_backend_service" "encyclopedia" {
  name        = "animeshon-com--encyclopedia"
  enable_cdn  = true
}

# Setup a proxy for future multiple CDNs in different regions.
resource "google_compute_target_https_proxy" "animeshon_com_proxy_https" {
  name    = "animeshon-com--https"
  url_map = google_compute_url_map.animeshon_com_backends_https.id

  ssl_certificates = [google_compute_managed_ssl_certificate.animeshon_com.id]
}

# Setup mapping for images backends.
resource "google_compute_url_map" "animeshon_com_backends_https" {
  name            = "animeshon-com-https"
  default_service = google_compute_backend_service.homepage.id

  host_rule {
    hosts        = ["*"]
    path_matcher = "default"
  }

  path_matcher {
    name            = "default"
    default_service = google_compute_backend_service.homepage.id

    path_rule {
      paths = ["/e/*"] # Encyclopedia URI - redirect all traffic to its Cloud Run instance.
      service = google_compute_backend_service.encyclopedia.id
    }
  }
}

# Setup forwarding rules to HTTP and HTTPS backend ports.
resource "google_compute_global_forwarding_rule" "animeshon_com_fwd_rule_https" {
  name        = "animeshon-com--fwd-rule--https"
  ip_address  = google_compute_global_address.animeshon_com.address
  ip_protocol = "TCP"
  port_range  = "443"
  target      = google_compute_target_https_proxy.images_backend_proxy_https.id
}
