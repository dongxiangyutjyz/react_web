const mongoose = requrie('mongoose');

const requrieLogin = require('../middlewares/requireLogin')
const Form = mongoose.model('forms');
const newForms = require('../services/newForm');


module.exports = app => {
  app.post('/api/forms',requireLogin, (req,res) =>{
    const {firstName, lastName, number, product, broken, description,dateSent} = req.body;

    const form = new Form({
      firstName,
      lastName,
      number,
      product,
      broken,
      description,
      dateSent: Date.now(),
      _user:req.user.id
    })


  });
};
