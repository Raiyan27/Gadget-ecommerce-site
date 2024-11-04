const getCartList = () => {
  const cartList = localStorage.getItem("cartlist");
  if (cartList) {
    const send = JSON.parse(cartList);
    return send;
  } else {
    return [];
  }
};

const addToCartList = (id) => {
  const cartList = getCartList();
  if (cartList.includes(id)) {
    console.log("already exists!");
  } else {
    cartList.push(id);
    const store = JSON.stringify(cartList);
    localStorage.setItem("cartlist", store);
  }
};
const setCartList = (cartList) => {
  localStorage.setItem("cartlist", JSON.stringify(cartList));
};
export { addToCartList, getCartList, setCartList };
