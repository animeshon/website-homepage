locals {
  zone_project_id = data.terraform_remote_state.root.outputs.project_id
  zone_dns_name   = data.terraform_remote_state.root.outputs.managed_zone_animeshon_com_dns_name
  zone_name       = data.terraform_remote_state.root.outputs.managed_zone_animeshon_com_name
}

# Setup homepage preview subdomain managed by Google Cloud Run.
resource "google_dns_record_set" "homepage" {
  project      = local.zone_project_id
  name         = "@.${local.zone_dns_name}"
  managed_zone = local.zone_name
  type         = "CNAME"
  ttl          = 300

  rrdatas = ["ghs.googlehosted.com."]
}