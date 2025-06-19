/* 
title: string
description: string
completed: boolean
*/


import {Schema, model} from "mongoose";
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

export default model("Task", taskSchema);