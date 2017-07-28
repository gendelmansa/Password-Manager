const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

let emailLengthChecker = (email) => {

    if(!email) { 

        return false //checks if email field is filled, if not it returns false and displays the error message
    
    } else {

        if(email.length < 5 || email.length > 30) {

            return false;
       
        } else {
            
            return true
        
        }
    }
};

let validEmailChecker = (email) => {
   
    if(!email) {
        
        return false
    
    } else {
       
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) //this checks for things like length and symbols that can be used for emails 
        
        return regExp.test(email) //if the inputed email doesnt meet the criteria thats given by regexp than this function will return false and vice versa
    }
}

let passwordLengthChecker= (password) => {
    if(!password) {
       
        return false
   
    } else {

        if(password.length<7 || password.length>35) {
            
            return false

        }

    }
}

let validPassword = (password) => {
   
    if(!password) {
        
        return false
   
    } else { 
        
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/)

        return regExp.test(password) //checks if password contains correct characters and will return true or false depending on if it follows criteria or not
    }
}

const passwordValidators = [
    { 
        validator: passwordLengthChecker, message: 'Password must at least be 7 characters, but at most 35 characters'
    },
    {
        validator: validPassword, message:'Password must include at least one uppercase letter, lowercase letter, number, and special character'
    }
]
const emailValidators = [
    {
        validator: emailLengthChecker, message:'E-mail must be at least 5 characters, but at most 30 characters'
    },
    {
        validator: validEmailChecker, message: 'E-mail must be valid'
    }
]



const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase:true, validate:emailValidators },
  password: { type:String, required:true, validate:passwordValidators }
});

//Password encryption method, pre save
userSchema.pre('save', function(next)  {

    if(!this.isModified('password')){ //if password is not modified function will skip over
        return next();
    
    } else {

        bcrypt.hash(this.password, null, null, (err, hash) => {
            
            if (err) {
                
                return next(err); //checks for errors
           
            } else {

                this.password = hash; //actuall encryption method
                next();
           
            }
        });
    }

});

userSchema.methods.comparePassword = function(password) { //compares passwords on login and returns true or false, implemented for login
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema);