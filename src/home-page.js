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

  //   todolist.appendChild(createForm());

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
  button.id = "button";

  form.appendChild(button);

  return form;
};
