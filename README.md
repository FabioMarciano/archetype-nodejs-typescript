# NodeJs with typescript archetype

Archetype for NodeJS with typescript applications

# Version

See _version_ file at project's root folder.

# License

See _LICENSE_ file at project's root folder.

# Collaborators

- Fabio Marciano

# Features

- Typescript support
- Jest for tests
- Coverage (via jest)
- Editor config
- Prettier
- ESLint
- Docker / Docker Compose
- Hot reload in development environment
- Dotenv (environment variables)
- Nunjucks (template engine)
- Static public folder

# Services

The following available services are described at **docker-compose.yml** file. It uses some envirnment variables from **.env** file.

- NodeJS server
- PostgreSQL relational database

> **Important:** The **.env** file must be considered **only** in development environment.

## NodeJS

The NodeJS service is an NodeJS/Express/Alpine server.

### Environment variables

The following environment variables are available at **.env** file.

> **Important:**
>
> - The **.env** file must be considered **only** in development environment.

| Name     | Description                           | Default Value |
| -------- | ------------------------------------- | ------------- |
| PORT     | The application port                  | 3000          |
| NODE_ENV | The NodeJS environment's current name | dev           |
| API_BASE | The application router base path      | /             |

## PostgreSQL

PostgreSQL is the most advanced relational open database. The service uses some environment variables in order to setup the database.

### SQL script files

It's possible to use SQL script files in order to create new databases, table schemas, initial inserts and more.

Before run the docker compose build command for the very first time, it's possible write SQL scripts under the `cfg/postgres` folder. The scripts will be executed using alphabetical order, so it's a good pratice to rename the files using a **numbered prefix**.

**Example:**

```
+- .
|- ..
+- cfg
   +- postgres
      +- 001-1st-file-to-execute.sql
      |- 002-2nd-file-to-execute.sql
      +- 003-3rd-file-to-execute.sql
```

### Environment variables

| Name              | Description                     | Default Value |
| ----------------- | ------------------------------- | ------------- |
| POSTGRES_HOST     | Postgres database host          | 0.0.0.0       |
| POSTGRES_PORT     | Postgres database port          | 5432          |
| POSTGRES_DB       | Postgres database name          | postgres      |
| POSTGRES_USER     | Postgres database user name     | postgres      |
| POSTGRES_PASSWORD | Postgres database user password | postgres      |

### Accessing

To access the PostgreSQL container, use the followind command:

```shell
$ docker exec -it <CONTAINER_NAME> psql -U <POSTGRES_USER>
```

To access via PostgreSQL command line client (requires to install `postgresql-client` application) use the following command:

```shell
$ psql -h <POSTGRES_HOST> -p <POSTGRES_PORT> -U <POSTGRES_USER>
```

> **Tips:**
>
> ---
>
> - Use the `docker ps` command to find out the value of the `<CONTAINER_NAME>` token.
> - `<POSTGRES_HOST>`, `<POSTGRES_USER>` and `<POSTGRES_PORT>` uses the same value stored in the **.env** file.

### Volume

All the PostgreSQL data is stored under the `psql` docker volume.

# Run and build

## Development

To run the application in development environment run:

```shell
$ npm run dev
```

## Build

To build the project for distribuition run:

```shell
$ npm run build
```

To run the final application run:

```shell
$ npm start
```

# Test

```shell
$ npm test
```

> **Notes:**
>
> ---
>
> - The **src/index.ts** file was excluded from testing because it is not a typescript module.

## ESLint

```shell
$ npm run lint
```

## Coverage

```shell
$ npm run coverage
```

The results will be stored at _./coverage_ folder

> **Notes:**
>
> ---
>
> - The **src/index.ts** file was excluded from coverage because it is not a typescript module.

# Docker

## Build

To build the image container, use:

```shell
# docker build -t <IMAGE-NAME> .
```

## Run

After the image building, run the following command:

```shell
# docker run --rm -it -v"$(pwd)":/app --name <CONTAINER-NAME> <IMAGE-NAME>
```

> **Notes:**
>
> ---
>
> - `<IMAGE-NAME>` as the image name.
> - `<CONTAINER-NAME>` as the container name.

## Docker compose

In place of build/run procedures, you may use just the docker-compose as follow:

## Build

```shell
# docker-compose up
```

## Start

```shell
# docker-compose start
```

## Stop

```shell
# docker-compose stop
```

## Removing

In order to remove the container, the associated images, orphans containers and volumes, use:

```shell
# docker-compose down --rmi "all" --remove-orphans --volumes
```
