const User = require("../models/User");
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
// incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
// incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
    
};