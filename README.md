# Verifi Media Test

## This project uses

* [Nodejs](https://nodejs.org/)
* [Mongodb](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)

### Install dependencies

```bash
$ npm install
```

### Start API

To execute the mongodb database in a Docker container, run:
```bash
$ docker-compose up --build
```

API will be listening at 
```bash
$ http://localhost:3000
```

### Populate database

```bash
$ npm run seed
```

### Lint

```bash
$ npm run lint
```

### Test

Unit Test

```bash
$ npm run test
```

### Author

| [![github/ofelipechan](https://avatars0.githubusercontent.com/u/26874734?v=3&s=115)](https://github.com/ofelipechan "Checkout github") |
|---|
| [Felipe S. Chan](https://github.com/ofelipechan) |
