const set = (key, value) => {
  return localStorage.setItem(key, value);
};

const Storage = { set };
export default Storage;
