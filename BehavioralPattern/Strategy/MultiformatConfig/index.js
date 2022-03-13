import { Config } from './config.js';
import { iniStrategy, jsonStrategy } from './strategies.js';

(async () => {
  const iniConfig = new Config(iniStrategy);
  await iniConfig.load('Samples/conf.ini');
  iniConfig.set('book.nodejs', 'design patterns');
  await iniConfig.save('samples/conf_mod.ini');

  const jsonConfig = new Config(jsonStrategy);
  await jsonConfig.load('Samples/conf.json');
  jsonConfig.set('book.nodejs', 'design patterns');
  await jsonConfig.save('samples/conf_mod.json');
})();
