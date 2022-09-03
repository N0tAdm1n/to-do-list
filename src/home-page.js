import { todoItem, project } from "./functions";
import { defaultProjects, relateProject } from "./projects";

export const homepage = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.id = "header";
  content.appendChild(header);

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  //
  //
  //default projects
  const defaultProjectsDOM = defaultProjects.getDefaultProjects();
  // console.log(defaultProjectsDOM);
  defaultProjectsDOM.forEach((element) => {
    const container = document.createElement("button");
    container.textContent = element.getProjectName();
    container.classList.add("project");
    sidebar.appendChild(container);
  });

  content.appendChild(sidebar);

  projectsListener();

  const todolist = document.createElement("div");
  todolist.id = "todolist";

  const addButton = document.createElement("div");
  addButton.id = "addButton";
  addButton.textContent = "+";
  addButton.addEventListener("click", addButtonListener);

  todolist.appendChild(addButton);

  content.appendChild(todolist);

  const footer = document.createElement("div");
  footer.id = "footer";
  content.appendChild(footer);
};

//add button event listener
const addButtonListener = () => {
  if (!document.querySelector("#form")) {
    const addButton = document.querySelector("#addButton");
    addButton.before(createForm());
    submitButtonListener();
    cancelButtonListener();
  }
};

//function to get input fom user
const createForm = () => {
  //form
  const form = document.createElement("div");
  form.id = "form";

  //title
  const title = document.createElement("div");
  title.id = "title";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.htmlFor = "titleInput";

  title.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  title.appendChild(titleInput);

  form.appendChild(title);

  //description
  const description = document.createElement("div");
  description.id = "description";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description";
  descriptionLabel.htmlFor = "descriptionInput";

  description.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "descriptionInput";
  description.appendChild(descriptionInput);

  form.appendChild(description);

  //duedate
  const dueDate = document.createElement("div");
  dueDate.id = "dueDate";

  const dueDateLabel = document.createElement("Label");
  dueDateLabel.textContent = "Date";
  dueDateLabel.htmlFor = "dueDateInput";
  dueDate.appendChild(dueDateLabel);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "dueDateInput";
  dueDate.appendChild(dueDateInput);

  form.appendChild(dueDate);

  //add button
  const button = document.createElement("button");
  button.textContent = "Add";
  button.id = "submit";
  form.appendChild(button);

  //cancel button
  const cancelButton = document.createElement("button");
  cancelButton.id = "Cancel";
  cancelButton.textContent = "Cancel";
  form.appendChild(cancelButton);

  return form;
};

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

// event listener for cancel button on form
const cancelButtonListener = () => {
  const cancelButton = document.querySelector("#Cancel");
  cancelButton.addEventListener("click", removeForm);
};
//function to remove form
const removeForm = () => {
  const form = document.querySelector("#form");
  form.innerHTML = "";
  form.remove();
};
//
//
//event listener for all projects
const projectsListener = () => {
  const allProjects = Array.from(document.querySelectorAll(".project"));
  allProjects.forEach((element) => {
    element.addEventListener("click", () => {
      switchProject(element);
    });
  });
};

//function to switch projects tab
const switchProject = (element) => {
  const currentProject = relateProject(element);
};
