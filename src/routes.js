// import Joi from 'joi';
import { cacheHandler, helloHandler, testHandler } from './handlers';

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
      /* validate: {
                payload: {
                    email: Joi.string().email(),
                    mdp: Joi.number().integer().min(6).max(12)
                }
            }, */
      handler: testHandler,
      description: 'Return ok',
    },
  },

  {
    method: 'POST',
    path: '/cache',
    options: {
      /* validate: {
                payload: {
                    integers: Joi.array().items(Joi.string(), Joi.number())
                }
            }, */
      handler: cacheHandler,
      description: 'Returns an array of sorted integers',
    },
  },

];
