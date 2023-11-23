# Health-Map-and-Reporting-System

This project provides a system for managing and reporting vaccination data for different cities. It includes a mapping system to track vaccination status in various city blocks and generates reports on vaccination queues and wait times at clinics.

## Features

- **Map Representation**: Visualize the vaccination status across different city blocks.
- **Vaccination Registration**: Manage registration of individuals for vaccination based on age criteria.
- **Reporting System**: Generate simple and complex reports detailing clinic queues and wait times.

## Installation

To set up this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone [repository-url]

2. Navigate to the project directory:
   ```bash
   cd Health-Map-and-Reporting-System

3. Install the necessary dependencies:
   ```bash
   npm install

## Usage

The main functionalities of the project are handled by the Map class, which reads vaccination data and manages the registration process, and the ReportMaker and ComplexReport classes, which generate reports based on the vaccination data.

To run the program, execute:

    npm start

Or directly run the TypeScript file:

    nodemon index.ts


## Components

### Map Class

Responsible for loading vaccination data and managing the vaccination registration process.

- Methods:
  - `printMap()`: Displays an ASCII map of vaccination status.
  - `registerForShots(currentIntakeAge: number)`: Registers eligible individuals for vaccination.

### Queue Class

A queue system for managing individuals waiting for vaccination at each clinic.

### ReportMaker Class

Generates simple reports showing the number of people in line at each clinic.

### ComplexReport Class

Extends ReportMaker to include additional details like average wait times in the report.
