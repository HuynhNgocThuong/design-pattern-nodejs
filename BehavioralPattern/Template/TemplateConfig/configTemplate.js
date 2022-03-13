import { promises as fsPromises } from 'fs';
import objectPath from 'object-path';

export class ConfigTemplate {
  async load(filePath) {
    console.log(`Deserializing from ${filePath}`);
    this.data = this._deserialize(await fsPromises.readFile(filePath, 'utf-8'));
  }
  async save(filePath) {
    console.log(`Serializing to ${filePath}`);
    await fsPromises.writeFile(filePath, this._serialize(this.data));
  }

  get(configPath) {
    return objectPath.get(this.data, configPath);
  }
  set(configPath, value) {
    return objectPath.set(this.data, configPath, value);
  }
  _serialize() {
    throw new Error('_serialize() must be implemented');
  }
  _deserialize() {
    throw new Error('_deserialize() must be implemented');
  }
}
