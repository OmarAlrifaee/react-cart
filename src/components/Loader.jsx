import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="grey"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
