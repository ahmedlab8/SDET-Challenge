
# SDET-Challenge Using Cypress

## Introduction

Welcome! This repository contains automated tests for our project using Cypress.
## What You Need

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Setup Steps

1. **Clone the Repo**

   Get the project onto your machine by running:

   ```bash
   git clone https://github.com/ahmedlab8/SDET-Challenge.git
   ```

2. **Go to the Project Folder**

   Move into the project directory:

   ```bash
   cd SDET-Challenge
   ```

3. **Install Dependencies**

   Install the project dependencies:

   ```bash
   npm install
   ```

4. **Install Cypress**

   Add Cypress as a development dependency:

   ```bash
   npm install cypress --save-dev
   ```

## Running the Tests

1. **Open Cypress Test Runner**

   To see the tests in action, open the Cypress Test Runner:

   ```bash
   npx cypress open
   ```

   A Cypress window will pop up. Click on a test to run it interactively.

2. **Run Tests in Headless Mode**

   For a quicker run without the GUI, execute:

   ```bash
   npx cypress run
   ```

   This will run all the tests and show the results in the terminal.

## Project Layout

Here’s a quick overview of the project's structure:

- `cypress/`
  - `fixtures/`: Contains test data
  - `integration/`: Contains test files
  - `plugins/`: Contains plugins and configuration files
  - `support/`: Contains helper files and custom commands
  - `videos/`: Contains videos of test runs (if enabled)
  - `screenshots/`: Contains screenshots from tests (if enabled)
- `.gitignore`: Lists files and folders Git should ignore
- `cypress.json`: Cypress configuration file
- `package.json`: Lists dependencies and scripts

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Node.js Download](https://nodejs.org/en/download/)
- [Git Download](https://git-scm.com/downloads)

