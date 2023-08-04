import { useRouteError } from 'react-router-dom';

const SingleErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h3>{error.message}</h3>
    </div>
  );
};

export default SingleErrorPage;
