import React from 'react';

import './style.scss';

const Section: React.FC<any> = (props) => {
  const { title, description, split = true, children, className = '' } = props;
  return (
    <section className={className}>
      {split && <div className="splitContent"></div>}
      <h2 className="heading heading--default">{title}</h2>
      {description && (
        <h3 className="heading heading--secondary">{description}</h3>
      )}
      {children}
    </section>
  );
};

export default Section;
