const getFavList = () => {
  const favList = localStorage.getItem("favlist");
  if (favList) {
    const send = JSON.parse(favList);
    return send;
  } else {
    return [];
  }
};

const addToFavList = (id) => {
  const favList = getFavList();
  if (favList.includes(id)) {
    console.log("already exists!");
  } else {
    favList.push(id);
    const store = JSON.stringify(favList);
    localStorage.setItem("favlist", store);
  }
};
const setFavList = (favList) => {
  localStorage.setItem("favlist", JSON.stringify(favList));
};
export { addToFavList, getFavList, setFavList };
