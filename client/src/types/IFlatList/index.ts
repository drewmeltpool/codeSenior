import React from 'react';

export interface IFlatList {
  tag?: any;
  itemTag?: any;
  isWrapComponent?: boolean;
  data: Array<any>;
  className?: string;
  itemClassName?: string;
  component: (_props: any, _index: number) => React.ReactElement;
  setKey: (_key: any, _index: number) => number | string;
  empty?: () => JSX.Element;
}
