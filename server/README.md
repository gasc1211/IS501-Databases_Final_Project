# GearShift Auto Rentals Backend

### How to run locally

1. Clone the repository

``` bash
git clone https://github.com/gasc1211/IS501-Databases_Final_Project
```

2. Install the package with npm

``` bash
cd IS501-Databases_Final_Project/server
npm install
```

3. Create a .env file with your server port, database connection string and credentials

```
# Server Listening Port
PORT={port}

# DB Connection Vars
DB_USERNAME="{username}"
DB_PASSWD="{password}"
DB_SERVER_URL="{connection_string}" 
```

4. Run using the start script

``` bash
npm run dev
```
