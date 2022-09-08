import projects from "./projects";

const currentProjectIndex = 0;
export const homepage = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.id = "header";
  content.appendChild(header);

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  content.appendChild(sidebar);

  const todolist = document.createElement("div");
  todolist.id = "todolist";

  const list = document.createElement("div");
  list.id = "list";
  todolist.appendChild(list);

  const addButton = document.createElement("div");
  addButton.id = "addButton";
  addButton.textContent = "+";
  todolist.appendChild(addButton);

  addButton.addEventListener("click", addButtonListener);

  content.appendChild(todolist);

  const footer = document.createElement("div");
  footer.id = "footer";
  content.appendChild(footer);

  // console.log(projects.getProjectList()[currentProject].getProjectName());
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

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Date";
  dueDateLabel.htmlFor = "dueDateInput";
  dueDate.appendChild(dueDateLabel);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "dueDateInput";
  dueDate.appendChild(dueDateInput);

  form.appendChild(dueDate);

  //
  //prority
  const priority = document.createElement("div");
  priority.id = "priority";
  //low priority
  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.textContent = "Low Priority";

  const lowPriorityInput = document.createElement("input");
  lowPriorityInput.type = "radio";
  lowPriorityInput.value = "Low";
  lowPriorityInput.name = "priority";
  lowPriorityInput.checked = true;

  lowPriorityLabel.appendChild(lowPriorityInput);
  priority.appendChild(lowPriorityLabel);
  //medium priority
  const mediumPriorityLabel = document.createElement("label");
  mediumPriorityLabel.textContent = "Medium Priority";

  const mediumPriorityInput = document.createElement("input");
  mediumPriorityInput.type = "radio";
  mediumPriorityInput.value = "Medium";
  mediumPriorityInput.name = "priority";

  mediumPriorityLabel.appendChild(mediumPriorityInput);
  priority.appendChild(mediumPriorityLabel);
  //high priority
  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.textContent = "High Priority";

  const highPriorityInput = document.createElement("input");
  highPriorityInput.type = "radio";
  highPriorityInput.value = "High";
  highPriorityInput.name = "priority";

  highPriorityLabel.appendChild(highPriorityInput);
  priority.appendChild(highPriorityLabel);

  form.appendChild(priority);

  //
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

// event listener for cancel button on form
const cancelButtonListener = () => {
  const cancelButton = document.querySelector("#Cancel");
  cancelButton.addEventListener("click", removeForm);
};
//function to remove form
const removeForm = () => {
  const form = document.querySelector("#form");
  // form.innerHTML = "";
  form.remove();
};

//submit Button listener
const submitButtonListener = () => {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", submitForm);
};
//function to submit the form
const submitForm = () => {
  addItemToProject(); //add todo item to current Project
  removeForm();
  displayItems(); //display todo items
};

//function to add item to the current project
const addItemToProject = () => {
  const title = document.querySelector("#titleInput").value;
  const description = document.querySelector("#descriptionInput").value;
  const dueDate = document.querySelector("#dueDateInput").value;
  const priority = document.querySelector(
    "input[name='priority']:checked"
  ).value;

  //add todoitem to current project(for now default project)
  const project = projects.getProjectList()[currentProjectIndex];
  project.addTodoItem(title, description, dueDate, priority);
};

//function to display the list items of current project
const displayItems = () => {
  clearList(); //clears the list
  const project = projects.getProjectList()[currentProjectIndex].getTodoList();
  const projectId = projects.getProjectList()[currentProjectIndex].getId();
  const list = document.querySelector("#list");

  for (const item of project) {
    // console.log(item.getTitle());
    const title = item.getTitle();
    const description = item.getDescription();
    const dueDate = item.getDueDate();
    const priority = item.getPriority();

    list.append(
      createTodoTile(
        title,
        description,
        dueDate,
        priority,
        projectId,
        item.getId()
      )
    );
  }
};

//clears the list dom
const clearList = () => {
  const list = document.querySelector("#list");
  list.innerHTML = "";
};

//create a dom tile for todoItem
const createTodoTile = (
  title,
  description,
  dueDate,
  priority,
  projectId,
  itemId
) => {
  const tile = document.createElement("div");
  tile.classList.add("todo-tile");
  tile.dataset.projectId = projectId;
  tile.dataset.itemId = itemId;

  const tileTitle = document.createElement("div");
  tileTitle.id = "#tile-title";
  tileTitle.textContent = title;
  tile.appendChild(tileTitle);

  const tileDescription = document.createElement("div");
  tileDescription.id = "#tile-description";
  tileDescription.textContent = description;
  tile.appendChild(tileDescription);

  const tileDueDate = document.createElement("div");
  tileDueDate.id = "#tile-due-date";
  tileDueDate.textContent = dueDate;
  tile.appendChild(tileDueDate);

  const tilePriority = document.createElement("div");
  tilePriority.id = "#tile-priority";
  tilePriority.textContent = priority;
  tile.appendChild(tilePriority);

  return tile;
};
