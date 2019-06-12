var ensure = require('node-ensure');

module.exports = (requirements,cb)=>{
 requirements.push('async');
 ensure(requirements,()=>{
  var async = require('async');
  requirements.pop();
  async.map(requirements,(req,cb)=>{
   try {
    cb(null,require(req));
   }
   catch(e) {
    console.log('ensure error',e);
    ensure(['child_process'],()=>{
     require('child_process').exec('npm install '+req,()=>cb(null,require(req)));
    });
   }
  },cb);
 });
};
