const mongoose = require("mongoose");
const Joi = require("joi");
const { options } = require("joi");
const joigoose = require("joigoose")((mongoose, { convert: false }));

const joiPersonalitiesSchema = Joi.object({
  image: Joi.string().required("this input is required"),
  name: Joi.string().required("this input is required"),
  longName: Joi.string().required("this input is required"),
  date: Joi.string().required("this input is required"),
  fight: Joi.string().required("this input is required"),
  rankImg: Joi.string().required("this input is required"),
  rank: Joi.string().required("this input is required"),
  life: Joi.string().required("this input is required"),
  reward: Joi.string().required("this input is required"),
});

const { Schema } = mongoose;

const personalitiesSchema = new Schema(
  joigoose.convert(joiPersonalitiesSchema, options)
);

const Personalities = mongoose.model("personalities", personalitiesSchema);

module.exports = Personalities;
