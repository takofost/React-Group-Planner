import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {appsConfigs} from 'app/main/apps/appsConfigs';
import {pagesConfigs} from 'app/main/pages/pagesConfigs';
import {LoginConfig} from 'app/main/login/LoginConfig';
import {RegisterConfig} from 'app/main/register/RegisterConfig';
import {LogoutConfig} from 'app/main/logout/LogoutConfig';
import {CallbackConfig} from 'app/main/callback/CallbackConfig';
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todoRoutes = express.Router();

const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    CallbackConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/apps/dashboards/project"/>
    },
    {
        component: () => <Redirect to="/apps/dashboards/project"/>
    }
];


const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://takofost:<//FinalProject2019>@cluster0-rsoxz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
