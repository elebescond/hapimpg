import Joi from 'joi';
import { cacheHandler, helloHandler, testHandler } from './handlers';

const failAction = (request, h, err) => {
  throw err;
  return;
}

export default [

  {
    method: 'GET',
    path: '/hello/{nickname*}',
    options: {
      handler: helloHandler,
      description: 'Returns hello message',
    },
  },

  {
    method: 'POST',
    path: '/test',
    options: {
      validate: {
        payload: {
            email: Joi.string().email(),
            mdp: Joi.number().integer()
        },
        failAction
      },
      handler: testHandler,
      description: 'Return ok',
    },
  },

  {
    method: 'POST',
    path: '/cache',
    options: {
      validate: {
        payload: Joi.array().items(Joi.number()),
        failAction
      },
      handler: cacheHandler,
      description: 'Returns an array of sorted integers',
    },
  },

];
