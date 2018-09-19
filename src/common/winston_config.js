import { createLogger, transports as _transports } from 'winston';
import appRoot from 'app-root-path';


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
  logger = createLogger({
    transports: [
      new _transports.File(options.file),
    ],
    exitOnError: false,
  });
} else {
  logger = createLogger({
    transports: [
      new _transports.File(options.file),
      new _transports.Console(options.console),
    ],
    exitOnError: false,
  });
}

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default { logger };
