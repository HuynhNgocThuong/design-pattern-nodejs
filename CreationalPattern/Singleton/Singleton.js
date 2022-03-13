class PrivateSingleton {
  constructor() {
    this.message = 'I am an instance';
  }
}
class Singleton {
  constructor() {
    throw new Error('Use Singleton.getInstance()');
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new PrivateSingleton();
    }
    return Singleton.instance;
  }
}
module.exports = Singleton;
