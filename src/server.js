/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import Hapi from 'hapi';
import routes from './routes';
import { sortIntegers } from './services';

const MPG = async () => {
  try {
    const server = new Hapi.Server({
      host: '0.0.0.0',
      port: 3000,
    });

    server.method('sortIntegers', sortIntegers, {
      cache: {
        expiresIn: 10 * 1000,
        generateTimeout: 10 * 1000,
      },
      generateKey: integers => integers.join(','),
    });

    server.route(routes);

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
  } catch (err) {
    console.log(err);
  }
};

MPG();
