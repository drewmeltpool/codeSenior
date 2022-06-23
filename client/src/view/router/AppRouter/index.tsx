import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from 'src/view/pages/Test';
import { userOperation } from 'src/redux/feature/user';
import { useDispatch } from 'react-redux';
import DeveloperRoute from '../DeveloperRoute';
import RecruiterRoute from '../RecruiterRoute';
import IntroRoute from '../IntroRoute';

const MainRouter: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperation.getUser());
  }, []);

  return (
    <Switch>
      <Route path="/test" exact component={Test} />
      <Route>
        <RecruiterRoute />
        <DeveloperRoute />
        <IntroRoute />
      </Route>
    </Switch>
  );
};

export default MainRouter;
