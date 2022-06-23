import React from 'react';
import Flex from 'src/view/common/Flex';
import { EmptySvg } from 'src/view/common/Svg/EmptySvg';

interface EmptyProps {
  title?: string | React.ReactNode;
}

const Empty: React.FC<EmptyProps> = ({ title }) => {
  return (
    <Flex
      alignItems="center"
      justify="center"
      direction="column"
      className="empty"
    >
      {title}
      <EmptySvg className="empty-svg" />
    </Flex>
  );
};

export { Empty };
