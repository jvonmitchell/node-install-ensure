# node-install-ensure
Asyncronous require packages, install them, as a set

## Usage

ensure = require('node-install-ensure');

ensure(['fs','async','sqlite3'],(err,[fs,async,sqlite3])=>{
 fs.createReadStream('/etc/hosts').pipe(process.stdout);
});

## Asynchronous

This will be non-blocking while these modules are loaded.

## Installs

If a module isn't installed it will install it.  That's what it means to ensure something.
