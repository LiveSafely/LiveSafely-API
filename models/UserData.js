const mongoose = require('mongoose');
const Schema = mongoose.schema;
mongoose.strict = false;
//Este esquema es temporal se necesitan datos exactos.
const dataSchema = new mongoose.Schema({},
{
   strict: false 
});
module.exports = mongoose.model('userData', dataSchema);