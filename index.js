const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

client.set('visits', parseInt(0));

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('No of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });

    //process.exit(0); Setting restart value in Docker compose to 'always' will restart the container even if exit code is 0
    //process.exit(1); Setting restart value in Docker compose to 'only-failure' will restart the container only if exit code is other than 0
});

app.listen(8080, () => {
    console.log('Listening on port 8080..');
});
