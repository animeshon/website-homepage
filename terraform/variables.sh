#!/bin/sh

set -o errexit
set -o nounset
set -o pipefail

cat > ./terraform/pipeline.auto.tfvars <<EOF
image_tag = "${IMAGE_TAG}"
EOF

exit 0