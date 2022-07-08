const express = require("express");
const { getTasks, deleteTask, updateTask, postTasks } = require("../Controllers/tasksController");
const router = express.Router();

/*-----------Get Request-------------*/
router.get("/", getTasks);

/*-----------Post Request-------------*/
router.post("/", postTasks);

/*-----------Update Request-------------*/
router.put("/:id", updateTask);

/*-----------Delete Request-------------*/
router.delete("/:id", deleteTask);

module.exports = router;
