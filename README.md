# Job Assignment System (JAS)

The Job Assignment System (JAS) is a capstone project focused on real-time location tracking of employees and assets within an organization. It aims to streamline the process of dispatching and assigning tasks when faults occur on these assets. JAS provides a centralized platform for efficient job management and improves overall productivity by ensuring timely response and allocation of resources.

## Backend Application
This project is a web application built with Express.js, integrated with Knex.js to connect to a local MySQL database or a remote PostegreSQL database. The project includes database migration files to be used with Knex.js to create the tables and their relationships. It also include database seeds to insert mock data into the tables.

## Installation

To install the project dependencies, run:
```
npm install
```

## Usage

To start the server, use the following command:
```
npm install
```

This will start the server and make it available at `http://localhost:3001`.

## Configuration

The project uses a `knexfile.js` file for database configuration. You can modify this file to suit your needs, usually coupled with a `.env` file to provide environment variables for database connection.



## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/my-feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.