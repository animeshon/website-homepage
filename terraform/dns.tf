locals {
  managed_zone_project_id = data.terraform_remote_state.root.outputs.project_id
  managed_zone_dns_name   = data.terraform_remote_state.root.outputs.managed_zone_animeshon_com_dns_name
  managed_zone_name       = data.terraform_remote_state.root.outputs.managed_zone_animeshon_com_name
}

# Setup homepage preview subdomain managed by Google Cloud Run.
locals {
  dns_records = {
    "A" = [
      for rr in google_cloud_run_domain_mapping.homepage.status[0].resource_records :
      rr.rrdata if rr.type == "A"
    ]
    "AAAA" = [
      for rr in google_cloud_run_domain_mapping.homepage.status[0].resource_records :
      rr.rrdata if rr.type == "AAAA"
    ]
  }
}

resource "google_dns_record_set" "homepage" {
  for_each = local.dns_records

  project      = local.managed_zone_project_id
  name         = "@.${local.managed_zone_dns_name}"
  managed_zone = local.managed_zone_name
  type         = each.key
  ttl          = 300

  rrdatas = each.value
}
