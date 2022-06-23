import React from 'react';
import Telegram from './Telegram';
import Collapse from 'src/view/common/Collapse';

import Icon from 'src/view/common/Icon';

const Aside: React.FC = () => {
  return (
    <aside className="aside">
      <Collapse title="Filter" icon="filter" className="filter__outer">
        <div className="filter">
          <div className="filter__group">
            <h4 className="chip--heading">
              <Icon className="chip__icon fill--dark" icon="wrench" />
              Technologies
            </h4>
            {/* <FlatList
              isWrapComponent
              className="chip__list"
              itemClassName="chip__item"
              setKey={(_, index) => index}
              data={technologies}
              component={(title) => (
                <Chip title={title} className="color--primary" />
              )}
            /> */}
          </div>
          <div className="filter__group">
            <h4 className="chip--heading">
              <Icon className="chip__icon fill--dark" icon="dollar-sign" />
              Expected salary
            </h4>
          </div>
          <div className="filter__group">
            <h4 className="chip--heading">
              <Icon className="chip__icon fill--dark" icon="building" />
              Company type
            </h4>
            {/* <FlatList
              isWrapComponent
              className="chip__list"
              itemClassName="chip__item"
              setKey={(_, index) => index}
              data={companyType}
              component={(props) => (
                <Button
                  className="btn chip chip--primary color--primary"
                  title={props}
                />
              )}
            /> */}
          </div>
          <div className="filter__group">
            <h4 className="chip--heading">
              <Icon className="chip__icon fill--dark" icon="building" />
              Work type
            </h4>
            {/* <FlatList
              isWrapComponent
              className="chip__list"
              itemClassName="chip__item"
              setKey={(_, index) => index}
              data={workType}
              component={(props) => (
                <Button
                  className="btn chip chip--primary color--primary"
                  title={props}
                />
              )}
            /> */}
          </div>
        </div>
        <Telegram />
      </Collapse>
    </aside>
  );
};

export default Aside;
