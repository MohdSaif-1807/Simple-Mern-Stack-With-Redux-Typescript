# Simple-Mern-Stack-With-Redux-Typescript

# Games Info Zone

Games Info Zone is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application built using TypeScript. The app utilizes Redux for state management and Zod for validation. It allows users to log in, view character data, and access detailed information by clicking on "Read More." The data is fetched from MongoDB Cloud.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization handled with Redux tools
- Display a dashboard with character data
- View detailed information about each character by clicking on "Read More"
- Data fetched from MongoDB Cloud
- TypeScript for improved code structure and type safety
- Zod for data validation

## Technologies Used

- **MongoDB**: Cloud database for storing character data
- **Express.js**: Backend framework for handling API requests
- **React.js**: Frontend library for building user interfaces
- **Node.js**: Server-side JavaScript runtime
- **TypeScript**: Adds static typing to JavaScript for better code quality
- **Redux**: State management for handling login/logout states
- **Zod**: Schema declaration and validation for ensuring data integrity

## Installation

### Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB Cloud credentials and update configuration files.

4. Run the backend server:

   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Run the frontend application:

   ```bash
   npm start
   ```

## Usage

1. Register or log in to access the dashboard.
2. Explore character data on the dashboard.
3. Click on "Read More" to view detailed information about a specific character.

## Screenshots

### Registration Page
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/9daeac49-a6e8-4aad-afb5-cf0c2043c2be)

### Login Page
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/74eedfb6-f29b-49c7-a1f4-6a6a980f3e6d)

### Zod Validation in Registration Page
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/ca741fd9-d4fa-49f2-bcd7-60c2f6e4fadb)

### Redux states prior to Login
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/b7a5ce5b-8615-4a1e-bb65-b3fa9f530f8b)

### Redux states afer Login
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/04e89d4f-bdac-40de-9269-336c4c1b4edc)

### Dashboard
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/3324b15c-7cab-4e92-af12-fb26569de155)

### Know More feature in Dashboard
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/3f84c33c-a467-45a4-a9e2-4216d62be477)

### Logout states in redux
![image](https://github.com/MohdSaif-1807/Simple-Mern-Stack-With-Redux-Typescript/assets/113005309/e260e572-ec2a-45c3-8078-9b2528317eea)

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
```

This template separates the backend and frontend installation steps and includes specific instructions for each part. Adjust the paths, commands, and details based on your actual project structure.
