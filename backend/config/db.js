const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = () => {
    try {

        mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('BD ConectarDB');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

module.exports = conectarDB();