
const express = require('express')

const {ServerConfig} = require('./config')

app = express();

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});