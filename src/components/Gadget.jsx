import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { id, title, image, category, price } = gadget;

  return (
    <>
      <div className="card   bg-white ">
        <div className="p-4 ">
          <img
            className="rounded-xl flex justify-center items-center w-[300px] h-[200px] md:w-[370px] md:h-[350px]"
            src={image}
            alt={title}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <h1 className="text-lg">{title}</h1>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`gadget/${id}`}>
              <button className="btn btn-primary bg-[#9538E2] text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gadget;
