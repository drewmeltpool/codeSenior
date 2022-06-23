import React from 'react';
import { Colors } from 'src/constants';
import { ILayout } from 'src/types';
import Budget from 'src/view/common/Budget';
import FlatList from 'src/view/common/FlatList';
import Title from 'src/view/common/Title';
import { Aside, Container } from 'src/view/components/Wrapper';

const PostFilter: React.FC<ILayout> = ({ children }) => {
  return (
    <Container className="content">
      <Aside.Aside>
        <Aside.Box>
          <Title variant="small" title="Salary" />
          <FlatList
            data={[
              '500$',
              '1000$',
              '1500$',
              '2000$',
              '2500$',
              '3000$',
              '4000$',
              '5000$',
            ]}
            component={(salary) => (
              <Budget variant={Colors.PURPLE} title={salary} hovered />
            )}
            tag="div"
            className="post-filter-list"
            setKey={(_, idx) => idx}
          />
        </Aside.Box>
        <Aside.Box>
          <Title variant="small" title="Position" />
          <FlatList
            data={['Trainee', 'Junior', 'Middle', 'Senior', 'Team Leader']}
            component={(position) => (
              <Budget variant={Colors.LIGHT_BLUE} title={position} hovered />
            )}
            tag="div"
            className="post-filter-list"
            setKey={(_, idx) => idx}
          />
        </Aside.Box>
      </Aside.Aside>
      {children}
    </Container>
  );
};

export default PostFilter;
