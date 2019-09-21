const { Schema, model } = require('mongoose')

const TimeSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

module.exports = model('Time', TimeSchema)
