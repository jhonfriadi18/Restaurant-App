const Redis = require('ioredis');
const fs = require('fs');

const redis = new Redis({
    host: 'redis-18600.c252.ap-southeast-1-1.ec2.cloud.redislabs.com',
    port: 18600,
    password: process.env.password
});

module.exports = redis