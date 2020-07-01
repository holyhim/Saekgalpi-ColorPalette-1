module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'colorPalette',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    //port : 
  }
};

