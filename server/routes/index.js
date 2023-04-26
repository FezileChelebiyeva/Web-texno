const express = require("express");
const {
  getPersonalitiesData,
  getPersonalitiesDataById,
  createNewPersonInfo,
  deletePersonInfo,
  updatePersonalitiesData,
} = require("../controllers/index.js");

const router = express.Router();
function useRouter(router) {
  router.get("/personalities", getPersonalitiesData);
  router.get("/personalities/:id", getPersonalitiesDataById);
  router.post("/personalities", createNewPersonInfo);
  router.delete("/personalities/:id", deletePersonInfo);
  router.put("/personalities/:id", updatePersonalitiesData);
}

module.exports = useRouter;
