import { project } from "./functions";

export const createDefaultProjects = () => {
  const defaultProjects = [];

  const defaultProject1 = project();
  defaultProject1.createProject("1");
  defaultProjects.push(defaultProject1);

  const defaultProject2 = project();
  defaultProject2.createProject("2");
  defaultProjects.push(defaultProject2);

  const defaultProject3 = project();
  defaultProject3.createProject("3");
  defaultProjects.push(defaultProject3);

  return defaultProjects;
};
