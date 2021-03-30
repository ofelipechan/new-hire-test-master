# Verifi Media Test

## This project uses

* [Node.js](https://nodejs.org/)
* [Mongodb](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)

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

API will be listening at http://localhost:4000

### Seed
To populate the database, open another command terminal window and run:
```bash
$ npm run seed
```

### Lint

```bash
$ npm run lint
```

### Unit Test

```bash
$ npm run test
```

### Author

| [![github/ofelipechan](https://avatars0.githubusercontent.com/u/26874734?v=3&s=115)](https://github.com/ofelipechan "Checkout github") |
|---|
| [Felipe S. Chan](https://github.com/ofelipechan) |
