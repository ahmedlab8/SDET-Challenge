# SDET-Challenge Using Cypress

## Introduction

**This repository contains an offline coding challenge for an SDET role at Fetch.**

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

   Once the command runs successfully, you will see the Cypress Welcome Screen:

   - **Welcome to Cypress!**

   Next, choose the "E2E Testing" option and select your preferred browser to execute the test. In the Specs window, click on the available test to run it (fingers crossed it works as expected!).

   This will run the test and show the results in the terminal.

## Project Layout

**Thanks for checking my code. Ahmed E**

- [Cypress Documentation](https://docs.cypress.io/)
- [Node.js Download](https://nodejs.org/en/download/)
- [Git Download](https://git-scm.com/downloads)
