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
  content.appendChild(todolist);

  const footer = document.createElement("div");
  footer.id = "footer";
  content.appendChild(footer);
};
