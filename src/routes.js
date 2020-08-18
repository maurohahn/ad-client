const express = require('express');
const routes = express.Router();

const ActiveDirectory = require('activedirectory2');

const { adCfg } = require('./config');

const ad = new ActiveDirectory(adCfg);
const get_adErrorMsgs = require('./errors');

routes.post("/auth", (req, res) => {
    const { username, password } = req.body;

    ad.authenticate(username+adCfg.domain, password, function (err, auth) {

        return res.status(200).send({ auth, msg: get_adErrorMsgs(JSON.stringify(err), 'pt_br'), error: JSON.stringify(err) });

    });
});

module.exports = routes;