require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000


/**
 *
 * Cors
 */

// istanbul ignore next
const whitelistEntries =
  process.env.CORS_WHITELIST.split(',').map(entry => {
    const trimmed = entry.trim();
    if (entry.match('localhost') || entry.match('127.0.0.1')) {
      const corsPort = entry.split(':').map(p => p.trim())[1];
      return [
        `127.0.0.1:${corsPort}`,
        `http://127.0.0.1:${corsPort}`,
        `https://127.0.0.1:${corsPort}`,
        `localhost:${corsPort}`,
        `http://localhost:${corsPort}`,
        `https://localhost:${corsPort}`
      ];
    }
    return [`${trimmed}`, `http://${trimmed}`, `https://${trimmed}`];
  }) || [];
const whitelist = [].concat([], ...whitelistEntries);

const exposedCorsHeaders = '';

// istanbul ignore next
const corsOptions = {
  origin: (origin, callback) => {
    // uncomment to debug cors in production
    console.log('info', `*** origin: ${origin} ***`);
    console.log('info', `*** whitelist ***`)
    console.log('info', whitelist.join(', '))
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  exposedHeaders: exposedCorsHeaders
};

// istanbul ignore else if
app.use((req, res, next) => {
  req.headers.origin = req.headers.origin || req.headers.host;
  next();
});

// istanbul ignore next
if (process.env === 'test') {
  app.use((req, res, next) => {
    req.headers.origin = `localhost:${process.env.PORT_TEST || 50023}`;
    next();
  });
}

app.use(cors(corsOptions));
app.options('*', cors());

// EDIT: added options to ensure json can be accessed without extension
// app.use(express.static('public', { index: false, extensions: ['json'] }))
app.get('/', ({res}) => {
    res.redirect('/index')
})
app.use(express.static(__dirname + '/public', {
    maxage: '365d',
    index: false, 
    extensions: ['json']
}))
app.use(({ res }) => {
	// Optional 404 handler
    res.status(404)
    res.json({
        error: {
            code: 404
        }
    });
})

const server = app.listen(port, () => {
    console.log("Example app listening at port", port)
})

module.exports = server