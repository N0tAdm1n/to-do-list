// all functions used in application

//factory for todo-item
export const todoItem = () => {
  let _title = "";
  let _description = "";
  let _dueDate = "";
  let _priority = "";

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

  const initTodoItem = (title, description, dueDate, priority) => {
    _title = title;
    _description = description;
    _dueDate = dueDate;
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
    initTodoItem,
  };
};
