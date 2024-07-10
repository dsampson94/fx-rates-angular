# FxRatesAngular

FxRatesAngular is a web application built with Angular CLI that provides a user-friendly interface for viewing and managing foreign exchange rates.

## Features

- **Live Foreign Exchange Rates:** Fetches real-time FX rates from an external API.
- **Search and Filter:** Allows users to search for specific currency pairs and filter results.
- **Responsive Design:** Designed to be responsive and work seamlessly across devices.
- **User-friendly Interface:** Intuitive UI with clear visuals and interactive elements.

## Technologies Used

- Angular
- Angular CLI
- TypeScript
- RxJS
- HTML/CSS

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

       git clone https://github.com/dsampson94/fx-rates-angular.git
       cd fx-rates-angular

2. Install the dependencies:

       npm install
       # or
       yarn install

### Running the Application

    ng serve

### Project Structure
    .
    ├── e2e
    │   ├── ...
    ├── src
    │   ├── app
    │   │   ├── components
    │   │   │   ├── fx-rate
    │   │   │   │   ├── fx-rate.component.html
    │   │   │   │   ├── fx-rate.component.scss
    │   │   │   │   ├── fx-rate.component.spec.ts
    │   │   │   │   └── fx-rate.component.ts
    │   │   │   └── ...
    │   │   ├── services
    │   │   │   └── fx-rate.service.ts
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   ├── app.component.spec.ts
    │   │   └── app.component.ts
    │   ├── assets
    │   ├── environments
    │   ├── ...
    ├── angular.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── ...


### License

This project is licensed under the MIT License.
