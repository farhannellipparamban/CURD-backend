import TaskModel from "../model/TaskModel.js";

const getAllTask = async (req, res) => {
  try {
    const task = await TaskModel.find();
    return res.status(200).json({ data: task });
  } catch (error) {
    console.error("An error occurred while fetching task:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addtask = async (req, res) => {
  try {
    const { task, description, status} = req.body;
    const tasks = new TaskModel({
      task,
      description,
      status,
    });
    await tasks.save();
    return res
      .status(201)
      .json({ message: "tasks added successfully", data: tasks });
  } catch (error) {
    console.error("An error occurred while adding tasks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updatetasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, description, status} = req.body;
    const tasks = await TaskModel.findById(id);
    if (tasks) {
      tasks.task = task;
      tasks.description = description;
      tasks.status = status;
      await tasks.save();
      return res.status(200).json({
        message: "tasks details successfully updated",
        data: tasks,
      });
    } else {
      return res
        .status(404)
        .json({ message: "tasks not found. Unable to update details." });
    }
  } catch (error) {
    console.error("An error occurred while updating tasks details:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletetasks = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "tasks successfully deleted" });
  } catch (error) {
    console.error("An error occurred while deleting tasks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getAllTask,
  addtask,
  updatetasks,
  deletetasks,
};
