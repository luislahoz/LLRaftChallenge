#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  \connect $POSTGRES_DB
  BEGIN;
    CREATE TABLE IF NOT EXISTS orders (id SERIAL PRIMARY KEY, order_id INT NOT NULL, product_name VARCHAR(45) NOT NULL, product_quantity INT NOT NULL);
  COMMIT;
EOSQL