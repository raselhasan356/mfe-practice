export const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

export const getAuth = () => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
};

export const setAuth = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

export const removeAuth = () => {
  localStorage.removeItem("auth");
};
