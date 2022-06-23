import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import FlatList from '../FlatList';
import { Tab, Tabber } from '../Tabber';

import { Company, Payment, Profile, Settings } from '../../pages/Recruiter/Tab';

interface ILinkTabber {
  match: { url: string };
  className: string;
}

const urls = [
  { url: '/recruiter/profile', component: Profile, label: 'Profile' },
  { url: '/recruiter/payment', component: Payment, label: 'Payment' },
  { url: '/recruiter/settings', component: Settings, label: 'Settings' },
  { url: '/recruiter/company', component: Company, label: 'Company' },
];

const LinkTabber: React.FC<ILinkTabber> = ({ match, className }) => {
  const activeUrl = match.url;

  return (
    <Switch>
      <Tabber active={activeUrl} className={className}>
        <FlatList
          data={urls}
          setKey={({ url }, index) => url + index}
          component={({ label, url, component }) => (
            <Tab
              index={url}
              title={
                <Link className="link" to={url}>
                  {label}
                </Link>
              }
            >
              <Route path={url} component={component} />
            </Tab>
          )}
        />
      </Tabber>
    </Switch>
  );
};

export default LinkTabber;
