const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    recyclable: Boolean,
    //previously recycable
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = historySchema;
