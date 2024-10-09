# PropertyList Project

This repository contains the full-stack application for the Property Listing project, developed as part of an internship. The project consists of a backend server and a frontend client application.

## Backend Server

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB Atlas account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/chandankumarm55/PropertyList-Server-Internship.git
   ```
2. Navigate to the server directory:
   ```bash
   cd PropertyList-Server-Internship
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory of the server and add the following environment variables:
```
MONGO_URI=mongodb+srv://chandan:chandan228@cluster0.spp3a.mongodb.net/
PORT=5000
FRONTEND_URL=https://property-list-client-internship.vercel.app
```

### Running the Server
To start the server, use the following command:
```bash
npm start
```
The server will run on the specified PORT (default is 5000).

### API Endpoints
- GET `/api/properties` - Retrieve all properties
- GET `/api/properties/:id` - Retrieve a property by ID
- POST `/api/properties` - Create a new property
- PUT `/api/properties/:id` - Update an existing property
- DELETE `/api/properties/:id` - Delete a property
- GET `/api/contacts` - Retrieve all interested users
- POST `/api/contacts` - Submit user interest

### Deployment
The backend is hosted on Render.

## Frontend Client

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/chandankumarm55/PropertyList-Client-Internship.git
   ```
2. Navigate to the client directory:
   ```bash
   cd PropertyList-Client-Internship
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Client
To start the client application in development mode, use:
```bash
npm run dev
```

### Building for Production
To create a production build, use:
```bash
npm run build
```

### Technologies Used
- React
- Redux for state management
- Tailwind CSS for styling
- Framer Motion for animations

### Deployment
The client-side application is deployed on Vercel.

## Accessing the Application

### User Interface
The main user interface can be accessed at:
[https://property-list-client-internship.vercel.app/](https://property-list-client-internship.vercel.app/)

### Admin Panel
The admin panel can be accessed at:
[https://property-list-client-internship.vercel.app/admin](https://property-list-client-internship.vercel.app/admin)

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
