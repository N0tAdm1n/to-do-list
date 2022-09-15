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

    const changeProjectName = (newName) => {
      _name = newName;
    };

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

    const changeTodoItem = (itemId, title, description, dueDate, priority) => {
      const itemIndex = getItemIndex(itemId);
      const item = _todolist[itemIndex];
      item.changeTitle(title);
      item.changeDescription(description);
      item.changeDueDate(dueDate);
      item.changePriority(priority);
    };

    const changeTodoItemStatus = (itemId, status) => {
      const itemIndex = getItemIndex(itemId);
      const item = _todolist[itemIndex];
      item.changeStatus(status);
    };

    return {
      getProjectName,
      getTodoList,
      addTodoItem,
      getItemCount,
      getId,
      deleteTodoItem,
      changeTodoItem,
      changeProjectName,
      changeTodoItemStatus,
    };
  };

  //add default project
  const defaultProject = () => {
    addProject("Today");
  };

  defaultProject();

  const deleteProject = (projectId) => {
    const projectIndex = getProjectIndex(projectId);
    _projectList.splice(projectIndex, 1);
  };

  const getProjectIndex = (projectId) => {
    for (let i = 0; i < _projectList.length; i++) {
      if (_projectList[i].getId() == projectId) {
        return i;
      }
    }
  };

  return {
    getProjectList,
    addProject,
    getProjectCount,
    deleteProject,
    getProjectIndex,
  };
})();

export default projects;
