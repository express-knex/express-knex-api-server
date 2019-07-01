## Express Knex API Server

## Short overview

Develop API server with Express and Knex:

  * user system: 
    * password/JWT auth, 
    * users, user groups, 
    * role-based access control, 
    * invite system,
    * email confirmation
  * REST-flavored CRUD support for custom models
  * KNEX-based storage for models (MySQL, SQLite, etc)

## Usage

Use Express Generator to build Express-based app.

Install express-knex-server, storage of your choice:

    npm install --save express-knex-server express-knex-storage-sqlite
    
Express-knex is async, so you need to modify Express app use async initialization.

In **app.js**, steps to init Express app generated with ``express-generator``:

1) convert app constructor to async function
2) add storage engine
3) init storage engine
4) init routes



    
