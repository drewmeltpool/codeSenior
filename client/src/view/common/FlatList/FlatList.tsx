import React, { useMemo, Fragment } from 'react';
import { IFlatList } from 'src/types';

const FlatList: React.FC<IFlatList> = ({
  tag: Tag,
  itemTag: ItemTag,
  data,
  className,
  itemClassName,
  isWrapComponent,
  component,
  setKey,
  empty: Empty,
}) => {
  const components = useMemo(
    () =>
      data?.map((props, index) =>
        isWrapComponent ? (
          <ItemTag key={setKey(props, index)} className={itemClassName}>
            {component(props, index)}
          </ItemTag>
        ) : (
          <Fragment key={setKey(props, index)}>
            {component(props, index)}
          </Fragment>
        )
      ),
    [ItemTag, component, data, isWrapComponent, itemClassName, setKey]
  );

  if ((!data || !data.length) && Empty) {
    return <Empty />;
  }

  return <Tag className={className}>{components}</Tag>;
};

FlatList.defaultProps = {
  tag: 'div',
  itemTag: 'div',
  isWrapComponent: false,
};

export default FlatList;
