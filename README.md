# NX Monorepo Project Example

This is an example of a monorepo project using NX for package management and NestJS for the development of two APIs. One is called CLOUD and the other LOCAL. There is a LIB that contains a USER entity that will be shared between both APIs.

## Technologies used in this project:

- [NX](https://nx.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Docker](https://Docker.com)
- [Husky](https://typicode.github.io/husky/)

## Structure

The project is structured in the following manner:

- **CLOUD API**: Contains the cloud specific code and functionalities
- **LOCAL API**: Contains the local specific code and functionalities
- **LIB**: Contains shared entities and utilities. In this case, it contains the USER entity which is shared between the CLOUD and LOCAL APIs.

Each of the APIs (CLOUD and LOCAL) are developed using NestJS, which is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

The entire project is managed using NX which helps to ensure modularity and scalability of the application. Additionally, NX provides various developer tools to improve productivity.

The project uses TypeScript, an open-source language that builds on JavaScript by adding static type definitions. TypeScript allows for better documentation of the code, and assists in catching errors and providing fixes before you run code.

To ensure the project's consistency and maintainability, we're using Husky, which makes Git hooks easy to use.

Finally, Docker is used to containerize the application, providing a uniform and consistent environment for deploying and running the application.

We welcome any contributions, and encourage you to read the contribution guidelines before making any changes.

Enjoy coding!
