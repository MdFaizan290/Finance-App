const express = require("express");
const router = express.Router();
const budgetController = require("../controllers/budgetController");

router.get("/", budgetController.showAllBgt);
router.post("/", budgetController.addNewBgt);
router.get("/:id", budgetController.showBgt);

router.put("/:id", budgetController.editBgt);

router.delete("/:id", budgetController.deleteBgt);


module.exports = router;