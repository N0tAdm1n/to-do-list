///todoitem factory
const todoItem = (
  title = "",
  description = "",
  dueDate = "",
  priority = ""
) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;

  const getTitle = () => _title;
  const getDescription = () => _description;
  const getDueDate = () => _dueDate;
  const getPriority = () => _priority;

  const changeTitle = (title) => {
    _title = title;
  };
  const changeDescription = (description) => {
    _description = description;
  };
  const changeDueDate = (dueDate) => {
    _dueDate = dueDate;
  };
  const changePriority = (priority) => {
    _priority = priority;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    changeTitle,
    changeDescription,
    changeDueDate,
    changePriority,
  };
};

export default todoItem;
