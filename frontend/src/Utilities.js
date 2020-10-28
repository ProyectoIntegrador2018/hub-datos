export const splitProjects = (projectList) => {
  // split projects into chunks of 5 to map in the card rows
  const projectChunks = [];
  while (projectList.length) {
    projectChunks.push(projectList.splice(0, 3));
  }

  return projectChunks;
};

export const _handlePreview = (e, setImage, setImgUrl) => {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    setImage(file);
    setImgUrl(reader.result);
  };

  reader.readAsDataURL(file);
};

export const getId = () => {
  let route = window.location.href;
  route = route.split("/");
  const id = route[route.length - 1];

  return id;
};