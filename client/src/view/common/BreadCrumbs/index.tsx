import React from 'react';

import { useHistory } from 'react-router-dom';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Button from 'src/view/common/Button';
import Budget from '../Budget';
import { Colors } from 'src/constants';

const BreadCrumbList: React.FC = () => {
  const history = useHistory();

  return (
    <div className="breadcrumb-wrapper">
      <Button onClick={history.goBack}>
        <Budget rounded variant={Colors.BLUE}>
          <Icon icon="angle-left" />
          <Text tag="span" title="Back" />
        </Budget>
      </Button>

      <Button onClick={() => history.push('/profile')}>
        <Budget rounded variant={Colors.BLUE}>
          <Icon icon="user" />
          <Text tag="span" title="Profile" />
        </Budget>
      </Button>

      <Button onClick={() => history.push('/post')}>
        <Budget rounded variant={Colors.BLUE}>
          <Icon icon="list" />
          <Text tag="span" title="Post" />
        </Budget>
      </Button>
      {/* <FlatList
        isWrapComponent
        data={breadCrumpsParse(pathname)}
        setKey={(_, key) => key}
        className="breadcrumb-list"
        itemClassName="breadcrumb-item"
        component={({ path, name }) => (
          <Link to={path}>
            <Text className="breadcrumb-text" title={name} />
          </Link>
        )}
      /> */}
    </div>
  );
};

export default BreadCrumbList;
