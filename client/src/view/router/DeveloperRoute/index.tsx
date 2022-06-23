import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Post from 'src/view/pages/Post';
import Developer from 'src/view/layouts/Developer';
import DeveloperProfile from 'src/view/pages/DeveloperProfile';
import Posts from 'src/view/pages/Posts';
import { developerAction } from 'src/redux/feature/developer';
import { useDispatch, useSelector } from 'react-redux';
import User from 'src/view/pages/User';
import BreadCrumbs from 'src/view/common/BreadCrumbs';
import { Container } from 'src/view/components/Wrapper';
import DeveloperInbox from 'src/view/pages/DeveloperInbox';
import DeveloperAside from 'src/view/layouts/DeveloperAside';
import CreateDeveloperProfile from 'src/view/pages/CreateProfileDeveloper';
import PostFilter from 'src/view/layouts/PostFilter';

import { EUserTypes } from 'src/constants';

const DeveloperRoute: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((store: any) => store.user.profile);
  const { userTableNameId } = useSelector(({ user }: any) => user);

  useEffect(() => {
    if (userTableNameId === EUserTypes.Developer) {
      dispatch(developerAction.setDeveloper(profile));
    }
  }, [userTableNameId]);

  if (userTableNameId !== EUserTypes.Developer) return null;

  return (
    <Switch>
      <Route exact path="/create-profile" component={CreateDeveloperProfile} />
      <Route>
        <Developer>
          <Container>
            <BreadCrumbs />
          </Container>
          <Switch>
            <Route exact path="/post">
              <PostFilter>
                <Route component={Posts} />
              </PostFilter>
            </Route>
            <Route>
              <DeveloperAside>
                <Switch>
                  <Route exact path="/inbox" component={DeveloperInbox} />
                  <Route exact path="/user/:id" component={User} />
                  <Route exact path="/post/:id" component={Post} />
                  <Route exact path="/profile" component={DeveloperProfile} />
                  <Redirect to="/post" />
                </Switch>
              </DeveloperAside>
            </Route>
          </Switch>
        </Developer>
      </Route>
    </Switch>
  );
};

export default DeveloperRoute;
