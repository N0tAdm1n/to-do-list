import todoItem from "./todo-item";

const projects = (() => {
  let _projectList = [];
  let _projectCount = 0;

  const getProjectList = () => _projectList;
  //increase project count
  const increaseProjectCount = () => {
    _projectCount++;
  };

  const getProjectCount = () => _projectCount;

  const addProject = (name) => {
    const item = project(name, getProjectCount());
    _projectList.push(item);
    increaseProjectCount();
  };

  //project factory
  const project = (name = "", id) => {
    let _name = name;
    let _todolist = [];
    const _id = id;
    let _todoItemCount = 0;

    const getId = () => _id;

    const increaseItemCount = () => {
      _todoItemCount++;
    };

    const getItemCount = () => _todoItemCount;

    const getProjectName = () => _name;

    const getTodoList = () => _todolist;

    const addTodoItem = (title, description, dueDate, priority) => {
      const item = todoItem(
        title,
        description,
        dueDate,
        priority,
        getItemCount()
      );
      _todolist.push(item);
      increaseItemCount();
    };

    const deleteTodoItem = (itemId) => {
      const itemIndex = getItemIndex(itemId);
      _todolist.splice(itemIndex, 1);
    };

    const getItemIndex = (itemId) => {
      for (let i = 0; i < _todolist.length; i++) {
        if (_todolist[i].getId() == itemId) {
          return i;
        }
      }
    };

    return {
      getProjectName,
      getTodoList,
      addTodoItem,
      getItemCount,
      getId,
      deleteTodoItem,
    };
  };

  //add default project
  const defaultProject = () => {
    addProject("Today");
  };

  defaultProject();

  return {
    getProjectList,
    addProject,
    getProjectCount,
  };
})();

//testing new logic

export default projects;
