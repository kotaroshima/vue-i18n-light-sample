const fs = require('fs');
const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

const PORT = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
const IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.set('port', PORT);
app.set('ip', IP_ADDRESS);

app.engine('html', ejs.__express);
app.set('views', __dirname);
app.set('view engine', 'ejs');

const staticBase = path.resolve(__dirname, '../dist');
app.use("/dist/", express.static(staticBase));

const DEFAULT_LOCALE = 'en';
const supportedLocales = fs.readdirSync('./src/locales');

app.get('/', (req, res) => {
  const locale = req.acceptsLanguages(supportedLocales) || DEFAULT_LOCALE;
  res.render('index.html', {
    locale,
  });
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Express server listening on ${app.get('ip')}:${app.get('port')}`);
});
