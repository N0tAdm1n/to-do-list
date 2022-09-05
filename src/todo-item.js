///todoitem factory
const todoItem = (
  title = "",
  description = "",
  dueDate = "",
  priority = "",
  id
) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  const _id = id;

  const getTitle = () => _title;
  const getDescription = () => _description;
  const getDueDate = () => _dueDate;
  const getPriority = () => _priority;
  const getId = () => _id;

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
    getId,
    changeTitle,
    changeDescription,
    changeDueDate,
    changePriority,
  };
};

export default todoItem;
