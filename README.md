# Pet Information Web Application

This is a fullstack web application built using AWS Amplify and React that allows users to add information about their pets and also supports user authentication.

## Features

- User authentication (signup, login, logout)
- Ability for users to add, edit, and delete pet information
- Pet information includes name, breed, age, and a photo
- User-specific data storage using Amazon S3

## Technologies Used

- AWS Amplify
- React
- AWS S3
- AWS DynamoDB
- GraphQL

## Getting Started

To get started with this application, follow these steps:

1. Clone the repository onto your local machine.
2. Run `npm install` to install the required dependencies.
3. Create an AWS account and set up an Amazon S3 bucket for data storage.
4. Set up AWS Amplify by running `amplify init` in the terminal and following the prompts.
5. Run `amplify add auth` to add user authentication to the application.
6. Run `amplify add storage` to add Amazon S3 storage to the application.
7. Run `amplify push` to deploy the changes to AWS.
8. Run `npm start` to start the application in development mode.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository onto your own Github account.
2. Clone the forked repository onto your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them with clear commit messages.
5. Push your changes to your forked repository.
6. Create a pull request to merge your changes into the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
