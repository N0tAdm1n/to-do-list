import { project } from "./functions";

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

  return { getDefaultProjects };
})();

//relate the projects in DOM to defaultProjects array
export const relateProject = (item) => {
  const arr = defaultProjects.getDefaultProjects();
  arr.forEach((ele) => {
    if (item.textContent === ele.getProjectName()) {
      return ele;
    }
  });
};
