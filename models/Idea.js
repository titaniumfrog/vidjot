const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IdeaSchema = new Schema({
    title:{
        type: String,
        required: true
    },
  gamedate:{
    type: String,
    required: true
  },
  team:{
    type: String,
    required: true
  },
  receptions:{
      type: Number,
      required: true
  },
  drops:{
      type: Number,
      required: true
  },
  tds:{
      type: Number,
      required: true
  },
  extrapt:{
      type: Number,
      required: true
  },
  yards:{
      type: Number,
      required: true
  },
  tackles:{
      type: Number,
      required: true
  },
  ints:{
      type: Number,
      required: true
  },
  sacks:{
      type: Number,
      required: true
  },
  details:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  win: {
    type: Number,
    required: true
  },
  lose: {
    type: Number,
    required: true,
  }
});

mongoose.model('ideas', IdeaSchema);