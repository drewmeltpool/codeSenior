import React from 'react';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { Colors } from 'src/constants';
import Flex from 'src/view/common/Flex';

interface IWork {
  name: string;
  position: string;
  start: number | string;
  end: number | string;
  description: string;
}

const Work: React.FC<IWork> = ({ name, position, start, end, description }) => {
  const endYear = new Date(end).getFullYear();

  const startDate = new Date(start);
  const endDate = new Date(end);

  const startMounth = startDate.toLocaleString('en', {
    month: 'short',
    year: 'numeric',
  });

  const endMounth = endDate.toLocaleString('en', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="work">
      <Title className="work-year" variant="info" title={endYear} />
      <div className="work-line" />
      <div className="work-content">
        <Title variant="medium" title={name} />
        <Flex wrap="wrap" gap="8px">
          <Title variant="small" color={Colors.GREY} title={position} />
          <Title
            variant="small"
            color={Colors.BLUE}
            title={`(${startMounth} - ${endMounth})`}
          />
        </Flex>
        <Text variant="secondary" title={description} />
      </div>
    </div>
  );
};

export default Work;
