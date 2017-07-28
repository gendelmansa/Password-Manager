const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req,res) => {
        //req.body.email;
        //req.body.password;
        if (!req.body.email) {

            res.json({ success: false, message: 'You must provide an email'})
        
        } else {

            if(!req.body.password) {
                
                res.json({ success:false, message: 'You must provide a password'})
            
            } else {
            
            let user = new User ({
                email: req.body.email.toLowerCase(),
                password: req.body.password
            })
            
            user.save((err) => {

                if(err) {
                   
                    if(err.code === 11000) {
                    
                        res.json({success: false, message: 'Email already exists'}) //making an error code user friendly, if there are duplicate emails
                    
                    } else{

                        if(err.errors) {

                            if(err.errors.email) { 

                                res.json({ success: false, message: err.errors.email.message }) //checks if the specific error is because the email conditions were met, if not it will display message from emailValidators
                            
                            } else {

                                if(err.errors.password) {

                                    res.json({ success: false, message: err.errors.password.message }) //checks if the specific error is because password conditions arent met
                            
                                } else {
                                    
                                    res.json({ success: false, message: err }) //if this error message ever appears something is wrong with the code, this should not show up but is here for backup just in case something does go wrong
                                
                                }
                            
                            }

                        } else {

                            res.json({ success: false, message: 'Could not save user. Error: ', err}) //catches errors that are not handled specifically by the statements above
                    
                        }

                    
                }

                } else {

                    res.json({ success:true, message: 'User created!'})
                }
            })

            }
        }
    } );

    router.post('/login', (req, res) => {
        if(!req.body.email) {
            
            res.json({ success: false, message: "No email was provided"})

        } else {
           
            if(!req.body.password) {
           
                res.json({ success: false, message: "No password was provided"})
           
            } else {
                
                User.findOne({ email: req.body.email.toLowerCase()}, (err,user) => {
                   
                    if(err) {
                   
                        res.json({ success: false, message: err })
                   
                    } else {
                        
                        if(!user) {
                        
                            res.json({ success: false, message: 'Email not found'})
                        
                        } else {
                            
                            const validPassword = user.comparePassword(req.body.password)
                            
                            if(!validPassword) {
                                
                                res.json({ success: false, message: 'Password invalid' })
                            
                            } else {

                                res.json({ success: true, message: 'Login Success!'})
                            }
                        }
                    }
                })
            }
        
        }

    })

    return router;
}