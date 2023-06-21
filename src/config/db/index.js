const  mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://vutienthanh250903:1234@cluster0.jzuotsk.mongodb.net/1644', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            
        })
        console.log('Connect Successfully!!!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect};