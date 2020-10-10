export const splitProjects = (projectList) => {
  // split projects into chunks of 5 to map in the card rows
  const projectChunks = [];
  while (projectList.length) {
    projectChunks.push(projectList.splice(0, 3));
  }

  return projectChunks;
};
