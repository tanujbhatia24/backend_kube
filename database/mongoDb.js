const mongoose = require('mongoose')

const connect =   () => {
    try {
        
         mongoose.connect(process.env.MONGO,{autoIndex:true});
        
        console.log('Connected to MongoDB');
      }catch(err) {
          console.log(err);
      }
  }

  module.exports = connect