export const usePostVotes = (path, id) => {
  if (!path) {
    throw new Error("Path is required");
  }
  fetch(path, { method: "POST", body: JSON.stringify({ votableId: id }) });
};
