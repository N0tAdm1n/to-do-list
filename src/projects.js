import todoItem from "./todo-item";

const projects = (() => {
  let _projectList = [];

  const getProjectList = () => _projectList;

  const addProject = (project) => {
    _projectList.push(project);
  };

  //project factory
  const project = (name = "") => {
    let _name = name;
    let _todolist = [];

    const getProjectName = () => _name;

    const getTodoList = () => _todolist;

    const addTodoItem = (item) => {
      _todolist.push(item);
    };

    return {
      getProjectName,
      getTodoList,
      addTodoItem,
    };
  };

  //

  addProject(project("Default"));
  const test = () => {
    projects.getProjectList()[0].addTodoItem(todoItem("item1"));
    const i = projects.getProjectList();
    console.log(i[0].getTodoList()[0].getTitle());
  };

  return { getProjectList, addProject, test };
})();

//testing new logic

export default projects;
