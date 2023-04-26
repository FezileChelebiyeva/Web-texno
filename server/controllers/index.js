const Personalities = require("../models/index.js");

module.exports.getPersonalitiesData = async (req, res) => {
  try {
    const personalities = await Personalities.find();
    res.status(200).json(personalities);
    console.log("get");
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(err);
  }
};

module.exports.getPersonalitiesDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const personalities = await Personalities.findById(id);
    res.status(200).json(personalities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.createNewPersonInfo = async (req, res) => {
  console.log(req);
  const newPerson = new Personalities(req.body);
  try {
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deletePersonInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePerson = await Personalities.findByIdAndDelete(id);
    res.status(200).json(deletePerson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updatePersonalitiesData = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  try {
    const updatedPersonData = await Personalities.findByIdAndUpdate(
      id,
      req.body
    );
    res.status(201).json(updatedPersonData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
