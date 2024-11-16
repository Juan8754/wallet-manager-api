# wallet-manager-api
Backend API for managing users and their wallets

# Setup Instructions

Follow these steps to set up the project on your local machine:

1. **Clone the repository**  
    Clone this Git repository to your local machine using the following command:  
    ```bash
    git clone <repository_url>
    ```

2. **download and install PostgreSQL**  
    Download and install PostgreSQL from the official website.

3. **create a new database**  
    After installing PostgreSQL, create a new database for the project. You can use the following command in the PostgreSQL command-line interface:
    ```bash
    CREATE DATABASE <your_database_name>;
    ```

4. **Set up the environment file**  
    Copy the .env.example file to .env and configure it with the correct values for your local environment. For example:
    ```bash
    cp .env.example .env
    ```
    Update the values in the .env file to match your setup, such as database connection details and any other required environment variables.

5. **Install dependencies**  
    ```bash
    npm install
    ```

6. **Build the project**  
    ```bash
    npm run build
    ```

7. **Start the project**  
    ```bash
    npm run start
    ```