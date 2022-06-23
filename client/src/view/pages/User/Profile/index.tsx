import React from 'react';

import Developer from './Developer';
import Recruiter from './Recruiter';
import { EUserTypes } from 'src/constants';

const Profile: React.FC<any> = ({ userTableNameId, profile }) => {
  return (
    <>
      {EUserTypes.Developer === userTableNameId && (
        <Developer profile={profile} />
      )}
      {EUserTypes.Recruiter === userTableNameId && (
        <Recruiter profile={profile} />
      )}
      {EUserTypes.Unknown === userTableNameId && null}
    </>
  );
};

export default Profile;
