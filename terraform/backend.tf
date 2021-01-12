terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "animeshon"

    workspaces {
      prefix = "homepage-"
    }
  }

  required_providers {
    google = {
      source = "hashicorp/google"
    }
    random = {
      source = "hashicorp/random"
    }
  }
  
  required_version = ">= 0.13"
}

data "terraform_remote_state" "root" {
  backend = "remote"

  config = {
    hostname = "app.terraform.io"
    organization = "animeshon"

    workspaces = {
      name = "master"
    }
  }
}

data "terraform_remote_state" "general" {
  backend = "remote"

  config = {
    hostname = "app.terraform.io"
    organization = "animeshon"

    workspaces = {
      name = "general-tier-0"
    }
  }
}

data "terraform_remote_state" "encyclopedia" {
  backend = "remote"

  config = {
    hostname = "app.terraform.io"
    organization = "animeshon"

    workspaces = {
      name = "website-encyclopedia-tier-0"
    }
  }
}