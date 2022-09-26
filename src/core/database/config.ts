/* eslint-disable prettier/prettier */
module.exports = {
    development: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'post1234',
       database: 'My_restaurant',
    },
    test: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'post1234',
       database: 'My_restaurant_test',
    },
    production: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'post1234',
       database: 'My_restaurant_prod',
    },
 }