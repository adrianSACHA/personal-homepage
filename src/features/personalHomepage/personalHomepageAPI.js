export const getProjects = async () => {
  const response = await fetch(
    "https://api.github.com/users/adriansacha/repos"
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
