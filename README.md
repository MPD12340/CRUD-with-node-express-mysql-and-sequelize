node version : v18.17.0
npm verson  : 9.8.1

In this project I have used dependencies
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mysql2": "^3.6.0"
  
  Along with dev dependencies like :
    "jest": "^29.6.4",
    "nodemon": "^3.0.1",
    "sequelize": "^6.32.1"


    # I have made custom error handler for handling errors in my application . 
    # Database credintials are in db.config.js to keep it secure as i have not included it in gitignore so that you can run it on your local.
    # for more advanced at production level migrations with sequelize-cli are used for syncing the databases.
    # Root file is only tested with Jest 
    # run npx jest to run the testing
