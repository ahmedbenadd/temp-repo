const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World!");
});

server.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});
