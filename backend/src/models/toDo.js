const { model, Schema } = require("mongoose");

const ToDoSchema = new Schema({
  item_name: { type: String, required: true },
  complete: { type: Boolean, required: false },
});

const ToDo = model("toDo", ToDoSchema);

module.exports = ToDo;
