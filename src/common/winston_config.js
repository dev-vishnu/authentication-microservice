const winston = require('winston');
const appRoot = require('app-root-path');


const options = {
  file: {
    level: 'debug',
    filename: `${appRoot}/src/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: true,
    colorize: true,
  },
};
let logger;
if (process.env.logging === 'off') {
  logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
    ],
    exitOnError: false,
  });
} else {
  logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console),
    ],
    exitOnError: false,
  });
}

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;
