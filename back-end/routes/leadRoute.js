const { getAllLeads, createLead, updateLead, deleteLead } = require("../controllers/leadController");

const router = require("express").Router();

router.route("/")

    .get(getAllLeads)

    .post(createLead)

    .patch(updateLead)

router.route("/:id")

    .delete(deleteLead)

module.exports = router;