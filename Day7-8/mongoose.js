const mongoose = require('mongoose');


const main = async() => {
    mongoose.connect("mongodb://localhost:27017/toothsi_training");
    const userSchema = new mongoose.Schema({
        name:String
    });
    const userName = mongoose.model('users',userSchema);
    let data = new userName({name:"Himanshu"});
    const result = await data.save();
    console.log(result);
}
main();