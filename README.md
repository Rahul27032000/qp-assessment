# SmartGrocery: A Scalable Online Grocery Management System -API

SmartGrocery is your go-to platform for effortless online grocery management. Admins can easily update inventory, while users enjoy a user-friendly interface for viewing and booking items. With secure authentication, scalable infrastructure, and robust monitoring, SmartGrocery ensures a smooth and secure shopping experience for all.

## Tech Stack

**Server:** Node, Express, Typescript

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

Start the server

```bash
  yarn run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Running Tests

To run tests, run the following command

```bash
  yarn run test
```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## License

[MIT](https://choosealicense.com/licenses/mit/)
