const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const models = require('./models');
models.init();

const apiRoutes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'build', 'index.html')));

const server = http.createServer(app);

server.listen(config.server.port, () => {
  console.log('server is running on http://localhost' , config.server.port);
});