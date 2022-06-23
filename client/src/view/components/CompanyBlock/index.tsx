import React from 'react';
import Avatar from 'src/view/common/Avatar';
import Flex from 'src/view/common/Flex';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import * as Profile from '../ProfileBlock';
import Icon from 'src/view/common/Icon';
import { Colors } from 'src/constants';

interface ICompanyBlock {
  companyName: string;
  aboutCompany: string;
  companyImage: string;
  companyWebsite: string;
}

const CompanyBlock: React.FC<ICompanyBlock> = ({
  aboutCompany,
  companyName,
  companyImage,
  companyWebsite,
}) => {
  return (
    <Profile.Block direction="column">
      <Flex alignItems="center" gap="24px" className="profile-head">
        <Title variant="secondary">
          <Icon icon="info-circle" />
          <Text tag="span" title="Our Company" />
        </Title>
      </Flex>
      <Flex gap="24px">
        <Avatar size="lg" image={companyImage} title={companyName} />
        <Flex direction="column" gap="12px">
          <Title variant="secondary" title={companyName} />
          {companyWebsite && (
            <Title variant="small" color={Colors.BLUE}>
              <Icon icon="globe" />
              <a
                target="_blank"
                href={companyWebsite}
                className="link"
                rel="noreferrer"
              >
                {new URL(companyWebsite).host}
              </a>
            </Title>
          )}
          <Text variant="primary" title={aboutCompany} />
        </Flex>
      </Flex>
    </Profile.Block>
  );
};

export default CompanyBlock;
