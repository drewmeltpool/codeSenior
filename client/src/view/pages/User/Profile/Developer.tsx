import React from 'react';
import Education from 'src/view/components/Education';
import Experience from 'src/view/components/Experience';
import Skills from 'src/view/components/Skills';

const Developer: React.FC<any> = ({ profile }) => {
  return (
    <>
      {!!profile.experience.length && <Experience data={profile.experience} />}
      {!!profile.education.length && <Education data={profile.education} />}
      {!!profile.technology.length && <Skills data={profile.technology} />}
    </>
  );
};

export default Developer;
