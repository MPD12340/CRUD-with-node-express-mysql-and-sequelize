module.exports = {
    DB_HOST: "localhost",
    DB_USER: "root",
    DB_PASSWORD: "Mahendra123@#$",
    DB_NAME :'users_record',
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };