# Project Setup with Ddev

This guide provides instructions for setting up the project using Ddev and running Gulp within the theme directory.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Running Gulp](#running-gulp)
4. [Performance and Core Web Vitals](#performance-and-core-web-vitals)
5. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Ddev](https://ddev.readthedocs.io/en/latest/#installation)
- [Node.js](https://nodejs.org/) (includes npm)

## Project Setup

1. **Clone the Project Repository**

  ```bash
   git clone https://github.com/gauravmahlawat/drupal-design
```
  ```bash
   cd drupal-design
```

2. **Start Ddev**

   Initialize and start the Ddev environment:
  ```bash
   ddev start
```

3. **Install Drupal Dependencies**

   Access the Drupal container and install the required dependencies:

  ```bash
   ddev ssh
```
  ```bash
   composer install
```

4. **Import Database**

Import it using:
  ```bash
   drush sql-cli < digital.sql
```

5. **Site snapshot**
<img src="https://github.com/gauravmahlawat/drupal-design/blob/main/homepage.png">

## Running Gulp

1. **Navigate to the Theme Directory**

  ```bash
   cd web/themes/custom/digital
```

2. **Install Gulp Dependencies**

Ensure you have all the required Gulp dependencies installed:
node: 16.20.1
npm: 8.19.4

  ```bash
   npm install
```

3. **Run Gulp**

   Start the Gulp tasks:

  ```bash
   npm run gulp
```

   or 

  ```bash
   gulp
```

   or 
  ```bash
   gulp watch
```

## Performance and Core Web Vitals

The site has good performance and passes the core web vitals. Attached is the performance report audit. Accessibility scores 92, primarily due to a color contrast issue, which is a design problem.

- **Performance Screenshot**

  <img src="https://github.com/gauravmahlawat/drupal-design/blob/main/lighthouse.png">

## Troubleshooting

- **Ddev Issues**

  - Ensure Docker is running and properly configured.
  - Check Ddev logs using ddev logs.

- **Gulp Issues**

  - Verify Gulp dependencies are correctly installed.
  - Ensure you have the correct Node.js version.

For more detailed troubleshooting, refer to the Ddev Documentation (https://ddev.readthedocs.io/) and Gulp Documentation (https://gulpjs.com/docs/en/getting-started/quick-start).
