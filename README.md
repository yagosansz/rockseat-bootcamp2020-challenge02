<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="./assets/logo.png" width="300px" />
</h1>

<h3 align="center">
  Challenge 2: FastFeet (1/4)</h3>

## :rocket: About the Challenge

Fastfeet is a delivery service application.

As part of this challenge, only an authenticated admin* user can manage recipients.

* The admin was added as seed data for development and should not be used as production data!

## **Tools**

This app features all the latest tools and practices in backend development!

- [Express](https://expressjs.com/)
- [Sucrase](https://www.npmjs.com/package/sucrase) + [Nodemon](https://nodemon.io/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [EditorConfig](https://github.com/editorconfig/editorconfig-vscode)
- [Sequelize](https://sequelize.org/) - using PostgreSQL, but MySQL could also have been used
- [Docker](https://docs.docker.com/toolbox/toolbox_install_windows/) for Windows
- [jwt](https://www.npmjs.com/package/jsonwebtoken) for authentication
- [Yup](https://github.com/jquense/yup) for schema (input data) validation

## **Functionalities**

Bellow are the functionalities that were implemented for this application.

### **1. Authentication**

Admin user can authenticate using e-mail and password.

Admin user was added as seed data to the application through [sequelize seeds](https://sequelize.org/master/manual/migrations.html#creating-first-seed). That way mock data can be added to the database automatically.

In order to create a seed, run the following command in your terminal:

    yarn sequelize seed:generate --name admin-user

The create filed will be in the folder `src/database/seeds`. The code bellow was added to create an admin user:

    ```javascript
    const bcrypt = require('bcryptjs');

    module.exports = {
      up: queryInterface => {
        return queryInterface.bulkInsert(
          'users',
          [
            {
              name: 'FastFeet Delivery Services',
              email: 'admin@fastfeet.com',
              password_hash: bcrypt.hashSync('123456', 8),
              admin: true,
              created_at: new Date(),
              updated_at: new Date(),
            },
          ],
          {}
        );
      },

      down: () => {},
    };
    ```

Executed:

    yarn sequelize db:seed:all

### **2. Managing Recipients**

Recipients must be managed in the application, and they need to have **name** and **email** as well as: **street**, **street number**, **complement**, **state**, **city** and **postal code**.

A `recipients` table was added to the database to hold data about the recipients.

- Recipients can only be added to the database by authenticated admins.
- Recipients can't authenticate.

## Getting started

1. Clone this repo using `git clone https://github.com/yagosansz/rockseat-bootcamp2020-challenge02.git`
2. Move yourself to the appropriate directory: `cd rockseat-bootcamp2020-challenge02`<br />
3. Run `yarn` to install dependencies<br />

### **Getting started with the backend server**

1. Run `yarn sequelize db:migrate` to create tables
2. Run `yarn sequelize db:seed:all` to add seed data to the database
3. Run `yarn dev` to start the development server
4. Test routes by either using [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/)

  ---

Made with :heart: by Yago!
