const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
    .then(() => {
        console.log("connection is successful")
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new Schema({
    username: String,
    addresses: [{
        location: String,
        city: String,
    }]
})
const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: "adhya",
        addresses: [{
            // _id:false,
            location: "227B Baker Street",
            city: "location",
        }]
    })

    user1.addresses.push({ location: "p24 wall street", city: "london" });
    let result = await user1.save();
    console.log(result);

}
addUsers();