CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    severity INTEGER NOT NULL,
    time_in_queue INTEGER NOT NULL
);
