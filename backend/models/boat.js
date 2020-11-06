const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boatSchema = new Schema(
  {
    boatModel: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    yearModel: {
      type: Number,
      required: true,
      minlength: 2,
      maxlength: 4,
      trim: true,
    },
    price: { type: Number, required: true, trim: true },
    sailboat: { type: Boolean, required: true, trim: true },
    engine: { type: Boolean, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Boat = mongoose.model('Boat', boatSchema);

module.exports = Boat;
