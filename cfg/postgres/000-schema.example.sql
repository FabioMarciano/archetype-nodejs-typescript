-- Postgres SQL schema example file
-- @author Fabio Marciano
-- @date 2022-06-01

-- ADD UUID EXTENSION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE EXAMPLE
CREATE TABLE example(
    -- FIELD DECLARATION
    id              uuid NOT NULL DEFAULT uuid_generate_v4(),
    name            VARCHAR(255) NOT NULL
);
