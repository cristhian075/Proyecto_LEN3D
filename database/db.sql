CREATE DATABASE classgogo;
use classgogo;

-- Create the table in the specified schema
CREATE TABLE users
(
    id INT NOT NULL PRIMARY KEY, -- primary key column
    username [NVARCHAR](50) NOT NULL,
    password [NVARCHAR](50) NOT NULL,
    fullname [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
