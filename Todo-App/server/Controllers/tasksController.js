const asyncHandler = require("express-async-handler");
const Task = require("../Schemas/tasksModel.js");
const User = require("../Schemas/userModel.js");

/*-----------Get Request-------------*/
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });

  res.status(200).json(tasks);
});

/*-----------Post Request-------------*/
const postTasks = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add a text field");
  }
  const task = await Task.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(task);
});

/*-----------Update Request-------------*/
const updateTask = asyncHandler(async (req, res) => {
  const tasks = await Task.findById(req.params.id);

  if (!tasks) {
    res.status(400);
    throw new Error("Task not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (tasks.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

/*-----------Delete Request-------------*/
const deleteTask = asyncHandler(async (req, res) => {
  const tasks = await Task.findById(req.params.id);

  if (!tasks) {
    res.status(400);
    throw new Error("Task not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (tasks.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await tasks.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  postTasks,
  updateTask,
  deleteTask,
};
