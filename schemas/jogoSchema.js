const { Schema, model } = require('mongoose')

const JogoSchema = new Schema(
  {
    time1ID: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    time2ID: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    comecouEm: {
      type: Date,
      required: false,
      default: null
    },
    terminouEm: {
      type: Date,
      required: false,
      default: null
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

JogoSchema.virtual('time1', {
  ref: 'Time',
  localField: 'time1ID',
  foreignField: '_id',
  justOne: true
})

JogoSchema.virtual('time2', {
  ref: 'Time',
  localField: 'time2ID',
  foreignField: '_id',
  justOne: true
})

module.exports = model('Jogo', JogoSchema)
