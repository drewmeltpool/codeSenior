import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Container } from 'src/view/components/Wrapper';

import Post from 'src/view/pages/Post';
import Recruiter from 'src/view/layouts/Recruiter';
import RecruiterAside from 'src/view/layouts/RecruiterAside';
import CreatePost from 'src/view/pages/CreatePost';
import Posts from 'src/view/pages/Posts';
import RecruiterProfile from 'src/view/pages/RecruiterProfile';
import User from 'src/view/pages/User';
import BreadCrumbs from 'src/view/common/BreadCrumbs';
import MyPosts from 'src/view/pages/RecruiterMyPosts';
import CreateProfile from 'src/view/pages/CreateProfile';
import { Developers } from 'src/view/pages/Developers';

import { recruiterAction } from 'src/redux/feature/recruiter';
import { EUserTypes } from 'src/constants';
import PostFilter from 'src/view/layouts/PostFilter';

const RecruiterRoute: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((store: any) => store.user.profile);
  const { userTableNameId } = useSelector(({ user }: any) => user);

  useEffect(() => {
    if (userTableNameId === EUserTypes.Recruiter) {
      dispatch(recruiterAction.setRecruiter(profile));
    }
  }, [userTableNameId]);

  if (userTableNameId !== EUserTypes.Recruiter) return null;

  return (
    <Switch>
      <Route exact path="/create-profile" component={CreateProfile} />
      <Route>
        <Recruiter>
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
              <RecruiterAside>
                <Switch>
                  <Route exact path="/my-posts" component={MyPosts} />
                  <Route exact path="/developers" component={Developers} />
                  <Route exact path="/post/:id" component={Post} />
                  <Route exact path="/user/:id" component={User} />
                  <Route exact path="/profile" component={RecruiterProfile} />
                  <Route exact path="/create-post" component={CreatePost} />
                  <Redirect to="/post" />
                </Switch>
              </RecruiterAside>
            </Route>
          </Switch>
        </Recruiter>
      </Route>
    </Switch>
  );
};

export default RecruiterRoute;
