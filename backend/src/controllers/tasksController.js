const tasksController = {};
import tasksModel from "../model/tasks.js";

// SELECT
tasksController.getTasks = async (req, res) => {
  const tasks = await tasksModel.find();
  res.json(tasks);
};

// INSERT
tasksController.createTask = async (req, res) => {
  const { title, description, completed } = req.body;
  const newTask = new tasksModel({ title, description, completed });
  await newTask.save();
  res.json({ message: "Task saved" });
};

// DELETE
tasksController.deleteTask = async (req, res) => {
  const deletedTask = await tasksModel.findByIdAndDelete(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json({ message: "Task deleted" });
};

// UPDATE
tasksController.updateTask = async (req, res) => {
  const { title, description, completed } = req.body;
  await tasksModel.findByIdAndUpdate(
    req.params.id,
    { title, description, completed },
    { new: true }
  );
  res.json({ message: "Task updated" });
};

export default tasksController;