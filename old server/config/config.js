module.exports = {
  development: {
    username: 'root', // hwabaek
    password: process.env.DATABASE_PASSWORD,
    database: 'colorPalette',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    //port : 13306
  }
};

