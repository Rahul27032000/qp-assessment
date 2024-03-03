# SmartGrocery: A Scalable Online Grocery Management System -API

SmartGrocery is your go-to platform for effortless online grocery management. Admins can easily update inventory, while users enjoy a user-friendly interface for viewing and booking items. With secure authentication, scalable infrastructure, and robust monitoring, SmartGrocery ensures a smooth and secure shopping experience for all.

## Tech Stack

**Server:** Node, Express, Typescript, Bcypt, jwt

**Database** PostgreSQL

**ORM** prisma

## Features

- Health Check and Monitoring Api
- Scalable and Performant API
- Admin API Endpoints
- User-Friendly API Interface

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rahul27032000/qp-assessment
```

Go to the project directory

```bash
  cd qp-assessment
```

Install dependencies

```bash
  yarn
```

create your database tables with Prisma Migrate

```bash
  npx prisma migrate dev --name init
```

Generated Prisma Client

```bash
  npx prisma generate
```

Start the server

```bash
  yarn run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`JWT_SECRET_KEY`

`PORT`

## Set up your `.env` file

- Duplicate `.env.example` to `.env`
- Use `openssl rand -base64 32` to generate a key and add it under `JWT_SECRET_KEY` in the `.env` file.
- Configure environment variables in the `.env` file. Replace `<user>`, `<pass>`, `<db-host>`, and `<db-port>` with their applicable values

  ```
  DATABASE_URL='postgresql://<user>:<pass>@<db-host>:<db-port>'
  ```

## Running Tests

To run tests, run the following command

```bash

## License

[MIT](https://choosealicense.com/licenses/mit/)
```
