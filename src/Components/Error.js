import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Error</h1>
      <h2>OOps Something went wrong</h2>
      <h2>
        {error.status} : {error.statusText}
      </h2>
    </>
  );
};

export default Error;
