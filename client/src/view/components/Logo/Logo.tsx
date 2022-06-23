import React from 'react';
import { Link } from 'react-router-dom';
import Text from 'src/view/common/Text';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
      <Text className="logo-short-title">SC</Text>
      <h1 className="logo-title">
        <Text tag="span" title="Senior" />
        <Text tag="span" title="Code" />
      </h1>
    </Link>
  );
};

export default Logo;
