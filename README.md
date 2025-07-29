# Vehicle Diagnostics & Configuration System

A comprehensive vehicle diagnostic and configuration management system that allows tracking and managing vehicle error codes with date ranges. Built with modern web technologies for a seamless user experience.

## 🚀 Features

- **Vehicle Management**
  - Add new vehicle diagnostic records
  - View all vehicle records in a sortable table
  - Filter records by vehicle ID, error code, and date range
  - Responsive design for all device sizes

- **Advanced Search & Filtering**
  - Search by Vehicle ID
  - Filter by Error Code
  - Date range filtering (From/To dates)
  - Real-time search as you type
  - Quick clear filters option

- **User Interface**
  - Modern, clean interface using Nebular UI components
  - Interactive data tables with pagination
  - Form validation and error handling
  - Toast notifications for user feedback

## 🎯 State Management with Angular Signals

The application leverages Angular's new Signals API for efficient state management. Here's how it's implemented:

### Signals Implementation

1. **Vehicle Store Service**
   - Uses `signal()` to create reactive state containers
   - Implements computed signals for derived state
   - Provides methods to update the state

2. **Key Signals**
   ```typescript
   // In vehicle.store.ts
   private _logs = signal<any[]>([]);
   private _loading = signal(false);
   
   // Computed signals
   logs = computed(() => this._logs());
   loading = computed(() => this._loading());
   ```

3. **Data Flow**
   - Components trigger data fetching via store methods
   - Store updates signals which automatically notify all subscribers
   - UI updates reactively when signals change

4. **Example Usage in Components**
   ```typescript
   // In list-vehicles.component.ts
   constructor(public store: VehicleStore) {
     effect(() => {
       this.vehiclesStoreData = this.store.logs();
     });
   }
   ```

## 🛠️ Technology Stack

### Frontend
- **State Management**: Angular Signals
  - Reactive state containers
  - Computed values
  - Effect-based reactions
- **Framework**: Angular 17+
- **UI Library**: Nebular UI
- **State Management**: NgRx Store
- **HTTP Client**: Angular HttpClient
- **Forms**: Reactive Forms
- **Styling**: SCSS with responsive design
- **Icons**: Nebular Eva Icons

### Backend
- **Runtime**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **API Documentation**: Swagger/OpenAPI
- **Authentication**: JWT (if implemented)

### Development Tools
- **Package Manager**: npm
- **Version Control**: Git
- **Linting**: ESLint, Prettier
- **Build Tool**: Angular CLI

## 🔄 Data Flow Architecture

1. **Component Initialization**
   - Components subscribe to store signals
   - Initial data fetch is triggered

2. **Data Fetching**
   ```typescript
   // 1. Component calls store method
   this.store.fetchLogs(vehicleId, errorCode, from, to);
   
   // 2. Store updates loading state
   this._loading.set(true);
   
   // 3. Service makes HTTP request
   this.vehicleService.getVehiclesData(...)
   
   // 4. On success, update signals
   this._logs.set(data);
   this._loading.set(false);
   ```

3. **UI Updates**
   - Components automatically re-render when signals change
   - Loading states are handled reactively
   - Error states are propagated through the signal chain

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+
- Angular CLI 17+
- MongoDB Atlas or local MongoDB instance

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Vehicle Diagnostics & Configuration"
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the `server` directory with your MongoDB connection string:
     ```
     MONGODB_URL=your_mongodb_connection_string
     PORT=5000
     ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd client
   ng serve
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:4200`

## 📚 API Documentation

The API is documented using Swagger. After starting the server, access the API documentation at:
```
http://localhost:5000/api-docs
```

### Available Endpoints

- `GET /api/vehicles` - Get all vehicle records (with optional filters)
- `POST /api/vehicles` - Add a new vehicle record

## 🧪 Testing

Run the test suite using:
```bash
# Client tests
cd client
ng test

# Server tests
cd server
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## ✨ Acknowledgments

- [Nebular](https://akveo.github.io/nebular/) for the amazing UI components
- [Angular](https://angular.io/) for the frontend framework
- [MongoDB](https://www.mongodb.com/) for the database
- [Express](https://expressjs.com/) for the backend framework

---

Made with ❤️ by Pavan Kumar Narendravarapu
You can find me on [LinkedIn](https://www.linkedin.com/in/n-pavan-kumar/) and [GitHub](https://github.com/pavannpk).