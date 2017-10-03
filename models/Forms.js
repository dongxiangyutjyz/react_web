const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient')

const formSchema = new Schema({
  firstName: String,
  lastName: String,
  number: String,
  product: String,
  broken: {type: Boolean, default: false},
  description: String,
  submit: {type: Number, default:0},
  recipients: [RecipientSchema],
  _user: {type:Schema.Types.ObjectId,ref: 'User'},
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('forms',formSchema);
