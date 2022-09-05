import todoItem from "./todo-item";

const projects = (() => {
  let _projectList = [];
  let _projectCount = 0;

  const getProjectList = () => _projectList;

  const addProject = (project) => {
    _projectList.push(project);
    increaseProjectCount();
  };

  //project factory
  const project = (name = "", id = _projectCount) => {
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

    return {
      getProjectName,
      getTodoList,
      addTodoItem,
      getItemCount,
      getId,
    };
  };

  //

  // addProject(project("Default"));
  // const test = () => {
  //   projects.getProjectList()[0].addTodoItem(todoItem("item1"));
  //   const i = projects.getProjectList();
  //   console.log(i[0].getTodoList()[0].getTitle());
  // };

  //increase project count
  const increaseProjectCount = () => {
    _projectCount++;
  };

  const getProjectCount = () => _projectCount;

  return {
    getProjectList,
    addProject,
    getProjectCount,
  };
})();

//testing new logic

export default projects;
