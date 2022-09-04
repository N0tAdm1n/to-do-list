//from projects.js
// import { project } from "./functions";

export const defaultProjects = (() => {
  let _defaultProjects = [];

  const defaultProject1 = project();
  defaultProject1.createProject("1");
  _defaultProjects.push(defaultProject1);

  const defaultProject2 = project();
  defaultProject2.createProject("2");
  _defaultProjects.push(defaultProject2);

  const defaultProject3 = project();
  defaultProject3.createProject("3");
  _defaultProjects.push(defaultProject3);

  const getDefaultProjects = () => _defaultProjects;

  const relateProject = (itemName) => {
    for (let i = 0; i < _defaultProjects.length; i++) {
      if (itemName === _defaultProjects[i].getProjectName()) {
        return i;
      }
    }
  };

  const getCurrentProjectList = (index) => {
    return _defaultProjects[index].getProjectList();
  };

  return { getDefaultProjects, relateProject };
})();

//
//
//
//from home-page.js
// event listener for submit button on form
const submitButtonListener = () => {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", submitForm);
};

//function to submit the form
const submitForm = () => {
  const title = document.querySelector("#titleInput").textContent;

  const newTodoItem = todoItem();
  newTodoItem.initTodoItem(title, "", "", "");
};

//
//
//event listener for all projects
const projectsListener = () => {
  const allProjects = Array.from(document.querySelectorAll(".project"));
  allProjects.forEach((element) => {
    element.addEventListener("click", () => {
      switchProject(element.textContent);
    });
  });
};

//function to switch projects tab
const switchProject = (element) => {
  const currentProject = defaultProjects.relateProject(element);
  console.log(currentProject);
  // renderProject(currentProject);
};

//function to render full project
// const renderProject = (currentProject) => {
//   todolist = defaultProjects.returnProjectItems(currentProject);
// };
