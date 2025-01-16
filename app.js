const http = require('http');
const _ = require('lodash');

const items = [1,[ 2,[ 3, 4, 5, 6]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('HOME PAGE');
    }
    if (req.url === '/ahmed') {
        res.write('AHMED PAGE');
    }
    res.end("NO PAGE");
});

server.listen(3000);