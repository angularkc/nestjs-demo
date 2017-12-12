# Angular KC - Nest.js Demo

### Setup

* Install dependencies with `yarn`

### Run the dev environment
* Start the back-end API (Flask is used and installed automagically as part of the python dependencies): `python iq_api.py db_name db_username db_password db_host(optional)`
    * The API will autogenerate the database, tables, and columns, as defined in the code itself
    * The API is running at //localhost:5000
    * Navigating here in a browser will show a very Swagger page which summarizes the entire API

### Run tests
* Run `pytest` from project root
    * A simple coverage report is included in the console
    * A more thorough html report is also generated; open in `htmlcov/index.html` in browser to view!

## Docker

### Environment Variables
| **Name**          | **Default**  |
| :---------------: | :----------: |
| POSTGRES_USER     | **invalid**  |
| POSTGRES_PASSWORD | **invalid**  |
| POSTGRES_HOST     | postgres     |
| POSTGRES_DB       | iq_metadrive |

### Setup ENV

Create `.env` file or set Environment Variables:
```bash
POSTGRES_USER=doge
POSTGRES_PASSWORD=*****
```

### Build
```bash
docker build -t iq-api:dev .
```

### Run
#### .env file
```bash
docker run -p 5000:5000 --env-file .env --name iq-api iq-api:dev
```
#### Environment Variables
```bash
docker run -p 5000:5000 --name iq-api iq-api:dev
```

### Usage

**Swagger -** navigate to: [localhost:5000](http://localhost:5000)