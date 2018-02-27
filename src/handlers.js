import { hello, test } from './services';

exports.helloHandler = (request) => {
  try {
    const nickname = request.params.nickname ? encodeURIComponent(request.params.nickname) : 'rotaldo';
    return hello(nickname);
  } catch (err) {
    return err;
  }
};

exports.testHandler = async (request) => {
  try {
    const data = await test(request.payload);
    return data;
  } catch (err) {
    return err;
  }
};

exports.cacheHandler = async (request) => {
  try {
    const data = await request.server.methods.sortIntegers(request.payload);
    return data;
  } catch (err) {
    return err;
  }
};
