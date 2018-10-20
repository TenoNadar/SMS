const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init Nexmo
const nexmo = new Nexmo({
    apiKey: 'YOURAPIKEY',
    apiSecret: 'YOURAPISECRET'
  }, { debug: true });
  
  // Init app
  const app = express();


