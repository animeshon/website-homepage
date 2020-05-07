locals {
  zone_project_id = data.terraform_remote_state.root.outputs.project_id
  zone_dns_name   = data.terraform_remote_state.root.outputs.managed_zone_animeshon_com_dns_name
  zone_name       = data.terraform_remote_state.root.outputs.managed_zone_animeshon_com_name
}

# Setup homepage preview subdomain managed by Google Cloud Run.
locals {
  dns_records = {
    "A" = [
      for rr in google_cloud_run_domain_mapping.homepage.resource_records :
      rr.rrdata if rr.type == "A"
    ]
    "AAAA" = [
      for rr in google_cloud_run_domain_mapping.homepage.resource_records :
      rr.rrdata if rr.type == "AAAA"
    ]
  }
}

resource "google_dns_record_set" "homepage" {
  for_each = local.dns_records

  project      = local.zone_project_id
  name         = "@.${local.zone_dns_name}"
  managed_zone = local.zone_name
  type         = each.key
  ttl          = 300

  rrdatas = each.value
}
