import { useEffect, useState } from "react";
import Gadget from "./Gadget";

const CardBox = () => {
  const [gadget, setGadget] = useState([]);
  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadget(data));
  }, []);
  return (
    <>
      <h1 className="text-4xl text-center">Explore Cutting-Edge Gadgets</h1>
      <div className="flex justify-around container mx-auto border p-10 rounded-3xl mb-10">
        <div className="flex flex-col gap-4 p-4 ">
          <button className="btn">Smartphones</button>
          <button className="btn">Cameras</button>
          <button className="btn">Audio</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* <p>{gadget.length}</p> */}
          {gadget.map((gadget) => (
            <Gadget key={gadget.id} gadget={gadget} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardBox;
