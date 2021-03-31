# Verifi Media Test

## This project uses

* [Node.js](https://nodejs.org/)
* [Mongodb](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)

## Docs

* [Exercise](docs/exercise.md)
* [Postman collection](docs/collection.postman_collection)

### Install dependencies

```bash
$ npm install
```

### Start API

To execute the app with the mongodb database in a Docker container, run:
```bash
$ docker-compose pull
```
```bash
$ docker-compose up --build
```

Docker port will be listening at http://localhost:4000

If you want to run server outside of docker, run
```bash
$ npm start
```

API will be listening at http://localhost:3000

### Seed
To populate the database, open another command terminal window and run:
```bash
$ npm run seed
```

### Lint

```bash
$ npm run lint
```

### Author

| [![github/ofelipechan](https://avatars0.githubusercontent.com/u/26874734?v=3&s=115)](https://github.com/ofelipechan "Checkout github") |
|---|
| [Felipe S. Chan](https://github.com/ofelipechan) |
