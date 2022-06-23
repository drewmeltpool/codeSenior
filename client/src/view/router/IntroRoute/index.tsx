import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SignIn from 'src/view/pages/SignIn';
import SignUp from 'src/view/pages/SignUp';
import Common from 'src/view/layouts/Common';
import Home from 'src/view/pages/Home';

import { EUserTypes } from 'src/constants';
import { useSelector } from 'react-redux';

const IntroRoute: React.FC = () => {
  const { userTableNameId } = useSelector(({ user }: any) => user);

  if (userTableNameId !== EUserTypes.Unknown) return null;

  return (
    <Route>
      <Common>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </Common>
    </Route>
  );
};

export default IntroRoute;
