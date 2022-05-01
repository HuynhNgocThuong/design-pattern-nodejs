import { writeFileSync } from 'fs';

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}
Journal.count = 0;

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    writeFileSync(filename, journal.toString());
  }
}

let journal = new Journal();
journal.addEntry('I cried today.');
journal.addEntry('I ate a bug.');
console.log(journal.toString());

let p = new PersistenceManager();
let filename = './temp/journal.txt';
p.saveToFile(journal, filename);

// separation of concerns
