const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://durga:durga123@cluster0.yqk3r.mongodb.net/InterviewTrackerData?retryWrites=true&w=majority';

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log("connected to DB");
    }
    catch(err){
        console.log(err);
        throw err;
    }
};


module.exports = InitiateMongoServer;
