const mongoose = require('mongoose')

let SmartphoneSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean
  });

const Smartphone = mongoose.model("Smartphone", SmartphoneSchema);


async function createSmartphone() {
  const smartPhone = new Smartphone({
      name: 'iPhone',
      price: 400,
      inStock: true
  });

  try {
      const result = await smartPhone.save();
      console.log('Smartphone saved:', result);
  } catch (error) {
      console.error('Error saving smartphone:', error);
  }
}

// createSmartphone();

// export default Smartphone;
module.exports =  Smartphone;