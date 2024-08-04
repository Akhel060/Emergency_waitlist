# Hospital Triage Application

## Overview
The Hospital Triage Application helps staff and patients understand wait times in the emergency room. The application is administered by triage staff based on the severity of injuries and the length of time already in the queue. Administrators will see the full list of patients.

## Setup Instructions

### Prerequisites
- PHP
- PostgreSQL
- A web server (e.g., Apache, Nginx)
- Git

### Installation
1. Configure the database connection in `server/db.php`:
    ```php
    $host = 'localhost';
    $db = 'hospital_triage';
    $user = 'username';
    $pass = 'password';
    ```

2. Start your web server and navigate to the `public` directory in your browser:
    ```sh
    php -S localhost:8000 -t public
    ```

## Usage Instructions

### Admin Perspective
- Visit the homepage to see the list of patients.
- The patients are ordered by severity (highest to lowest) and then by time in the queue (longest to shortest).

### Patient Perspective
- Fill in the form with your name and severity of your injury.
- Submit the form to join the queue.
