const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// create a virtual to return the author's full name
AuthorSchema.virtual('name').get(() => {
  const firstName = this.first_name;
  const familyName = this.familyName;

  if (firstName && familyName) {
    const fullname = `${familyName}, ${firstName}`;
    return fullname;
  }
  else {
    const fullname = '';
    return fullname;
  }
})

AuthorSchema.virtual('url').get(function() {return `/catalog/author${this._id}`})

module.exports = mongoose.model('Author', AuthorSchema);