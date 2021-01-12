#!/usr/bin/env ash

export NGINX_HOST="${HOST}"
export NGINX_PORT="${PORT}"

envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf

# Execute the rest of your ENTRYPOINT and CMD as expected.
exec "$@"