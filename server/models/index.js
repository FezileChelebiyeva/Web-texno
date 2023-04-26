const mongoose = require("mongoose");
const Joi = require("joi");
const { options } = require("joi");
const joigoose = require("joigoose")((mongoose, { convert: false }));

const joiPersonalitiesSchema = Joi.object({
  image: Joi.string().required("this input is required"),
  name: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "name can only contain letters."),
  status: Joi.string().required("this input is required"),
  about: Joi.string().required("this input is required"),
  date: Joi.string().required("this input is required"),
});

const { Schema } = mongoose;

const personalitiesSchema = new Schema(
  joigoose.convert(joiPersonalitiesSchema, options)
);

const Personalities = mongoose.model("personalities", personalitiesSchema);

module.exports = Personalities;
