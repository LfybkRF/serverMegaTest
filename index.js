const express = require('express');

const os = require('os');
const dns = require('dns');

const sequelize = require('./database/database');
const models = require("./database/models/models");

const cors = require('cors');

const settings = require('./config/settings');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api0', require('./routes/router'));
app.use('/imgs', express.static('imgs'));



const { HOST, PORT } = settings;


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, HOST, () => {
        dns.lookup(os.hostname(), function (error, host) {
          if (error) {
            console.log(error);
          } else {
            console.log(`📎 Network:  http://${host}:${PORT}`);
            console.log(`📎 Localhost:  http://localhost:${PORT}`);
          }
        })
    })

  } catch (e) {
    console.log(e);
  }
}

start()
