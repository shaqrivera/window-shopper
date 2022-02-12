![license badge](https://img.shields.io/badge/license-MIT_License-blue)

# Window Shopper

## Description

Window Shopper uses Express.js and mysql2.js to serve back end data, and allow a user to add and delete tags, categories, and products.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

First install Node.js, and MySQL (<a href="https://nodejs.org/en/download/" target="_blank">Link to install Node.js</a>) (<a href="https://www.mysql.com/downloads/" target="_blank">Link to install MySQL</a>) Install the required dependencies using `npm i`. Next, you must run the schema.sql file in order to create the database. In the root directory of the repository, start an instance of MySQL use the following command to create the database:

`SOURCE ../db/schema.sql`

Then in the terminal use the next command:

`node ./seeds`

The database has now been seeded and is ready to use.

## Usage

Once the required dependencies are installed, simply use the terminal command 'npm start' in the root directory to initialize Window Shopper. <a href="https://drive.google.com/file/d/1Y-0Rza4kMVQnpM_nxE6D0M90laV__6qO/view?usp=sharing" target="_blank">Link to instructional video</a>

## Contributing

Anybody can use this application, and modify it.

## Tests

After seeding the database and initializing the application, test the following route: http://localhost:3001/api/products/1 It should return the following response:

`{ "id": 1, "product_name": "Plain T-Shirt", "price": 15, "stock": 14, "category_id": 1, "categoryId": 1, "category": { "id": 1, "category_name": "Shirts" }, "tags": [ { "id": 6, "tag_name": "white", "product_tag": { "id": 1, "product_id": 1, "tag_id": 6, "productId": 1, "tagId": 6 } }, { "id": 7, "tag_name": "gold", "product_tag": { "id": 2, "product_id": 1, "tag_id": 7, "productId": 1, "tagId": 7 } }, { "id": 8, "tag_name": "pop culture", "product_tag": { "id": 3, "product_id": 1, "tag_id": 8, "productId": 1, "tagId": 8 } } ] }`

## Questions

Github username : <a href="https://github.com/shaqrivera">shaqrivera</a>

If you have any questions, please submit inquiries to <a href="mailto:shaq.rivera@gmail.com">shaq.rivera@gmail.com</a>.

## License

This project is using the MIT License. For more information, refer to following link.
[MIT License](https://spdx.org/licenses/MIT.htm)

---
