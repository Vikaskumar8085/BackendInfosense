const mongoose = require('mongoose')
const SubscriptionModel = mongoose.Schema({
    Email: {
        type: String,
        require: [true, "please enter your email"],
    }

})
const Subscription = mongoose.model("Subscription", SubscriptionModel);
module.exports=Subscription;