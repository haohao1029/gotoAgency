const express = require('express');
const app = express();
const i18next = require('i18next');
const backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');
// set the view engine to ejs
i18next
    .use(middleware.LanguageDetector)
    .use(backend)
    .init({
        backend: {
            loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
        },
        debug: true,
        detection: {
            order: ['querystring', 'cookie'],
            caches: ['cookie']
        },
        preload: ['en', 'cn'],
        saveMissing: true,
        fallBackLng: ['en']
    });
app.use(middleware.handle(i18next));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index'));
app.listen(3000);
console.log('Server is listening on port 3000');
