# NodeJs with typescript archetype

Archetype for NodeJS with typescript applications

# Version

See _version_ file at project's root folder.

# License

See _LICENSE_ file at project's root folder.

# Collaborators

- Fabio Marciano

# Features

- Express
- Typescript
- ESLint
- Jest tests
- Coverage (via jest)
- Editor config
- Prettier
- Docker / Docker Compose
- Hot reload
- Dotenv support

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

> **1:** The **src/index.ts** file was excluded from testing because it is not a typescript module.

## ESLint

```shell
$ npm run lint
```

## Coverage

```shell
$ npm run coverage
```

The results will be stored at _./coverage_ folder

> **1:** The **src/index.ts** file was excluded from coverage because it is not a typescript module.

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

> `<IMAGE-NAME>` as the image name. \
> `<CONTAINER-NAME>` as the container name.

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
