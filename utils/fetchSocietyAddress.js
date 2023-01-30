const Society = require("../models/society.model");

const fetchSocietyAddress = async (society_id) => {
  try {
    const society = await Society.findOne({ society_id: society_id });
    let result = null;
    if (society.address) {
      result = `${society.name}, ${society.address}`;
    }
    return result;
  } catch (err) {
    console.log("Error fetching society address", err);
  }
};

module.exports = fetchSocietyAddress;
