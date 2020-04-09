const router = require("express").Router();
const activityController = require("../../controllers/activityController");
const passport = require('../../config/passport')

// Matches with "/api/activities"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create);

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activityController.findById)
  // .put(activityController.update)
  // .delete(activityController.remove);


module.exports = router;