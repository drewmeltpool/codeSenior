import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Spinner } from 'src/view/common/Loader';

const PrivarRouter: React.FC<any> = ({
  component: Component,
  ...restProps
}) => {
  const isLoggin = true;

  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
    }, 1000);
  }, []);

  return check ? (
    <Route
      {...restProps}
      render={(props: any) =>
        isLoggin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  ) : (
    <Spinner color="red" />
  );
};

export default PrivarRouter;
