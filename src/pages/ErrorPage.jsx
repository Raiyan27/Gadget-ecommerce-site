import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#9538E2] p-10">
      <Helmet>
        <title>Error || Gadget Haven</title>
      </Helmet>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-4">ERROR</h1>
        <p className="text-lg text-white mb-6">PAGE NOT FOUND!</p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-[#9538E2] font-bold py-2 px-4  hover:bg-purple-200 rounded-full"
        >
          GO TO HOME
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
