import projects from "./projects";

let currentProjectIndex = 0;
export const homepage = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.id = "header";

  const logo = document.createElement("h1");
  logo.textContent = "todo || !todo";
  logo.id = "logo";
  header.append(logo);

  content.appendChild(header);

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const projectList = document.createElement("div");
  projectList.id = "project-list";
  sidebar.appendChild(projectList);

  const divide = document.createElement("hr");
  sidebar.append(divide);

  const createProjectButton = document.createElement("button");
  createProjectButton.id = "new-project-btn";
  createProjectButton.textContent = "New Project";
  sidebar.appendChild(createProjectButton);

  content.appendChild(sidebar);

  const todolist = document.createElement("div");
  todolist.id = "todolist";

  const addTodoContainer = document.createElement("div");
  addTodoContainer.id = "add-todo-container";

  const projectName = document.createElement("div");
  projectName.id = "project-name-container";
  addTodoContainer.append(projectName);

  const addButton = document.createElement("div");
  addButton.id = "addButton";
  addButton.classList.add("material-symbols-outlined");
  addButton.textContent = "add_task";
  addTodoContainer.appendChild(addButton);

  todolist.append(addTodoContainer);

  const list = document.createElement("div");
  list.id = "list";
  todolist.appendChild(list);

  addButton.addEventListener("click", addButtonListener);

  content.appendChild(todolist);

  const footer = document.createElement("div");
  footer.id = "footer";

  const credit = document.createElement("div");
  credit.id = "credit";

  const githubLogo = document.createElement("img");
  githubLogo.id = "github-logo";
  githubLogo.src = "https://img.icons8.com/fluency/344/github.png";

  credit.append(githubLogo);

  const link = document.createElement("a");
  link.textContent = "Created by N0tAdm1n";
  link.href = "https://github.com/N0tAdm1n";
  link.target = "_blank";
  link.id = "link";
  credit.append(link);

  footer.append(credit);

  content.appendChild(footer);

  displayProjects();
  displayItems();
  newProjectButtonListener();
};

//event listener for new project button
const newProjectButtonListener = () => {
  const button = document.querySelector("#new-project-btn");
  button.addEventListener("click", createNewProject);
};

//function to create new project
const createNewProject = () => {
  const name = prompt("Enter project name: ");
  projects.addProject(name);
  displayProjects();

  const projectId =
    document.querySelector("#project-list").lastChild.dataset.projectId;
  currentProjectIndex = projects.getProjectIndex(projectId);
  displayItems();
};

//function to display projects
const displayProjects = () => {
  clearProjectList();
  const projectList = document.querySelector("#project-list");

  for (const project of projects.getProjectList()) {
    const name = project.getProjectName();
    const projectId = project.getId();

    projectList.append(createProjectTile(name, projectId));
  }

  projectTileListener();
  renameProjectButtonListener();
  deleteProjectButtonListener();
};

//event listener for each project tile
const projectTileListener = () => {
  const projectTiles = Array.from(document.querySelectorAll(".project-tile"));
  projectTiles.forEach((tile) => tile.addEventListener("click", changeProject));
};

// function to change current displayed project
function changeProject() {
  const projectId = this.dataset.projectId;
  currentProjectIndex = projects.getProjectIndex(projectId);
  const projectTiles = Array.from(document.querySelectorAll(".project-tile"));
  projectTiles.forEach((tile) => tile.classList.remove("active-project"));
  this.classList.add("active-project");
  displayItems();
}

// function to clear project list
const clearProjectList = () => {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
};

// function to create a project tile
const createProjectTile = (name, projectId) => {
  const tile = document.createElement("div");
  tile.classList.add("project-tile");
  tile.dataset.projectId = projectId;

  const tileName = document.createElement("div");
  tileName.classList.add("project-tile-name");
  tileName.textContent = name;
  tile.appendChild(tileName);

  if (projectId > 0) {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("project-tile-btn-container");

    const renameButton = document.createElement("button");
    renameButton.classList.add(
      "project-tile-rename-btn",
      "material-symbols-outlined"
    );
    renameButton.textContent = "drive_file_rename_outline";
    buttonContainer.appendChild(renameButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "project-tile-delete-btn",
      "material-symbols-outlined"
    );
    deleteButton.textContent = "delete";
    buttonContainer.appendChild(deleteButton);

    tile.append(buttonContainer);
  }
  return tile;
};

// event listener for delete button on project tile
const deleteProjectButtonListener = () => {
  const deleteButtons = Array.from(
    document.querySelectorAll(".project-tile-delete-btn")
  );
  deleteButtons.forEach((button) =>
    button.addEventListener("click", removeProject)
  );
};

//function to remove project
function removeProject() {
  const projectId = this.parentNode.parentNode.dataset.projectId;
  this.parentNode.parentNode.removeEventListener("click", changeProject);
  projects.deleteProject(projectId);

  this.parentNode.parentNode.remove();

  currentProjectIndex = 0;
  displayItems();
}

// event listener for rename button on project tile
const renameProjectButtonListener = () => {
  const renameButtons = Array.from(
    document.querySelectorAll(".project-tile-rename-btn")
  );
  renameButtons.forEach((button) =>
    button.addEventListener("click", renameProject)
  );
};

//function to rename project
function renameProject() {
  const projectId = this.parentNode.parentNode.dataset.projectId;
  const name = prompt("Enter project name: ");
  projects
    .getProjectList()
    [projects.getProjectIndex(projectId)].changeProjectName(name);

  this.parentNode.parentNode.querySelector(".project-tile-name").textContent =
    name;
}

//add todoitem button event listener
const addButtonListener = () => {
  if (!document.querySelector("#form")) {
    const addButton = document.querySelector("#addButton");
    addButton.after(createForm());
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
  title.classList.add("form-container");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.htmlFor = "titleInput";
  titleLabel.classList.add("form-label");

  title.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  // titleInput.autofocus = true;
  title.appendChild(titleInput);

  form.appendChild(title);

  //description
  const description = document.createElement("div");
  description.id = "description";
  description.classList.add("form-container");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description";
  descriptionLabel.htmlFor = "descriptionInput";
  descriptionLabel.classList.add("form-label");

  description.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "descriptionInput";
  description.appendChild(descriptionInput);

  form.appendChild(description);

  //duedate
  const dueDate = document.createElement("div");
  dueDate.id = "dueDate";
  dueDate.classList.add("form-container");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Date";
  dueDateLabel.htmlFor = "dueDateInput";
  dueDateLabel.classList.add("form-label");

  dueDate.appendChild(dueDateLabel);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "dueDateInput";
  dueDate.appendChild(dueDateInput);

  form.appendChild(dueDate);

  //
  //prority
  const priority = document.createElement("form");
  priority.id = "priority";
  priority.classList.add("form-container");

  const priorityHeading = document.createElement("span");
  priorityHeading.textContent = "Priority";
  priorityHeading.classList.add("form-label");

  priority.append(priorityHeading);

  //low priority
  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.textContent = "Low";

  const lowPriorityInput = document.createElement("input");
  lowPriorityInput.type = "radio";
  lowPriorityInput.value = "Low";
  lowPriorityInput.name = "priority";
  lowPriorityInput.checked = true;

  lowPriorityLabel.appendChild(lowPriorityInput);
  priority.appendChild(lowPriorityLabel);
  //medium priority
  const mediumPriorityLabel = document.createElement("label");
  mediumPriorityLabel.textContent = "Medium";

  const mediumPriorityInput = document.createElement("input");
  mediumPriorityInput.type = "radio";
  mediumPriorityInput.value = "Medium";
  mediumPriorityInput.name = "priority";

  mediumPriorityLabel.appendChild(mediumPriorityInput);
  priority.appendChild(mediumPriorityLabel);
  //high priority
  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.textContent = "High";

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
  displayItems();
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
  console.log(currentProjectIndex);
  const project = projects.getProjectList()[currentProjectIndex].getTodoList();
  const projectId = projects.getProjectList()[currentProjectIndex].getId();

  const projectName = projects
    .getProjectList()
    [currentProjectIndex].getProjectName();
  document.querySelector("#project-name-container").textContent = projectName;
  const list = document.querySelector("#list");

  for (const item of project) {
    // console.log(item.getTitle());
    const title = item.getTitle();
    const description = item.getDescription();
    const dueDate = item.getDueDate();
    const priority = item.getPriority();
    const status = item.getStatus();

    list.append(
      createTodoTile(
        title,
        description,
        dueDate,
        priority,
        projectId,
        item.getId(),
        status
      )
    );
  }
  deleteTileButtonListener();
  editTileButtonListener();
  tileStatusButtonListener();
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
  itemId,
  status
) => {
  const tile = document.createElement("div");
  tile.classList.add("todo-tile");
  tile.dataset.projectId = projectId;
  tile.dataset.itemId = itemId;
  tile.dataset.status = status;

  const tileTitle = document.createElement("div");
  tileTitle.classList.add("tile-title");
  tileTitle.textContent = title;
  tile.appendChild(tileTitle);

  const tileDescription = document.createElement("div");
  tileDescription.classList.add("tile-description");
  tileDescription.textContent = description;
  tile.appendChild(tileDescription);

  const tileDueDate = document.createElement("div");
  tileDueDate.classList.add("tile-due-date");
  tileDueDate.textContent = dueDate;
  tile.appendChild(tileDueDate);

  const tilePriority = document.createElement("div");
  tilePriority.classList.add("tile-priority");
  tilePriority.textContent = priority;
  tile.appendChild(tilePriority);

  const tileStatusButton = document.createElement("button");
  tileStatusButton.classList.add(
    "tile-status-btn",
    "material-symbols-outlined"
  );
  if (status == 0) {
    tileStatusButton.textContent = "assignment_turned_in";
    tileStatusButton.classList.remove("complete-todo");
  } else {
    tileStatusButton.textContent = "assignment_turned_in";
    tileStatusButton.classList.add("complete-todo");
  }
  tile.append(tileStatusButton);

  const tileEditButton = document.createElement("button");
  tileEditButton.classList.add("tile-edit-btn", "material-symbols-outlined");
  tileEditButton.textContent = "edit_note";
  tile.appendChild(tileEditButton);

  const tileDeleteButton = document.createElement("button");
  tileDeleteButton.classList.add(
    "tile-delete-btn",
    "material-symbols-outlined"
  );
  tileDeleteButton.textContent = "delete";
  tile.appendChild(tileDeleteButton);

  return tile;
};

// event listener for delete button on tiles
const deleteTileButtonListener = () => {
  const deleteButtons = Array.from(
    document.querySelectorAll(".tile-delete-btn")
  );
  deleteButtons.forEach((button) =>
    button.addEventListener("click", removeTodoItem)
  );
};

function removeTodoItem() {
  const itemId = this.parentNode.dataset.itemId;
  projects.getProjectList()[currentProjectIndex].deleteTodoItem(itemId);
  this.parentNode.remove();
}

const editTileButtonListener = () => {
  const editButtons = Array.from(document.querySelectorAll(".tile-edit-btn"));
  editButtons.forEach((button) =>
    button.addEventListener("click", editTodoItem)
  );
};

function editTodoItem() {
  if (!document.querySelector("#form")) {
    const itemId = this.parentNode.dataset.itemId;
    const parent = this.parentNode;

    parent.insertBefore(createForm(), this.previousSibling);
    parent.querySelector(".tile-edit-btn").style.display = "none";
    parent.querySelector(".tile-delete-btn").style.display = "none";

    const title = document.querySelector("#titleInput");
    const description = document.querySelector("#descriptionInput");
    const dueDate = document.querySelector("#dueDateInput");
    const priority = document.querySelector("#priority").priority;

    title.value = parent.querySelector(".tile-title").textContent;
    description.value = parent.querySelector(".tile-description").textContent;
    dueDate.value = parent.querySelector(".tile-due-date").textContent;
    priority.value = parent.querySelector(".tile-priority").textContent;

    const project = projects.getProjectList()[currentProjectIndex];

    //change add button to edit button
    const editButton = document.querySelector("#submit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      project.changeTodoItem(
        itemId,
        title.value,
        description.value,
        dueDate.value,
        priority.value
      );
      displayItems();
    });

    cancelButtonListener();
  }
}

const tileStatusButtonListener = () => {
  const statusButtons = Array.from(
    document.querySelectorAll(".tile-status-btn")
  );
  statusButtons.forEach((button) =>
    button.addEventListener("click", changeTileStatus)
  );
};

function changeTileStatus() {
  if (this.parentNode.dataset.status == 0) {
    this.parentNode.dataset.status = 1;
    this.textContent = "assignment_turned_in";
    this.classList.add("complete-todo");
  } else {
    this.parentNode.dataset.status = 0;
    this.textContent = "assignment_turned_in";
    this.classList.remove("complete-todo");
  }

  const project = projects.getProjectList()[currentProjectIndex];

  project.changeTodoItemStatus(
    this.parentNode.dataset.itemId,
    this.parentNode.dataset.status
  );
}
