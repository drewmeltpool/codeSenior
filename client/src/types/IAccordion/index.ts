import React from 'react';

export interface IAccordion {
  data: Array<any>;
  onlyOne?: boolean;
  className?: string;
  component: (_props: any) => React.ReactElement;
  title: (_props: any) => React.ReactElement;
  helpers?: (_props: any) => React.ReactElement;
  setKey: (_props: any, _index: number) => any;
}
