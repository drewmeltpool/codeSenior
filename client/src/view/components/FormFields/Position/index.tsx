import React from 'react';
import { Field, useField } from 'formik';

import Button from '../../../common/Button';
import FlatList from '../../../common/FlatList';
import Icon from '../../../common/Icon';
import MulSelect from '../../../common/Former/FormMultiSelect';

const mockData: any = {
  front: { additional: ['css', 'js', 'html', 'front'], main: 'JavaScript' },
  back: { additional: ['mongo', 'java', 'node', 'back'], main: 'Backend' },
  full: {
    additional: ['js', 'html', 'mongo', 'java', 'node', 'full'],
    main: 'FullStack',
  },
};

const MultiSelect: React.FC<any> = ({ name, ...rest }) => {
  const [field, , helpers] = useField(name);

  return (
    <MulSelect
      {...rest}
      name={name}
      options={[
        {
          value: 'front',
          label: 'front',
        },
        { value: 'back', label: 'back' },
        { value: 'full', label: 'full' },
      ]}
      onChange={(option: any) => {
        helpers.setValue(
          option.map(({ value }: any, idx: number) => ({
            value,
            label: value,
            add: field.value[idx]?.add || [],
            year: field.value[idx]?.year || 0,
          }))
        );
      }}
      closeMenuOnSelect={false}
    />
  );
};

const Position: React.FC<any> = ({ name, ...rest }) => {
  const [field, , helpers] = useField(name);

  const handleChangeYear = (idx: number, step: number) => () => {
    const { year } = field.value[idx];
    field.value[idx].year = ((+year || 0) + step).toFixed(1);
    helpers.setValue(field.value);
  };

  return (
    <Field name={name}>
      {() => (
        <>
          <MultiSelect value={field.value} name={name} {...rest} />
          {!!field.value.length && (
            <FlatList
              data={field.value}
              setKey={(_, idx) => idx}
              component={({ value }, idx) => {
                const { main, additional } = mockData[value];
                return (
                  <>
                    <div className="position__header">
                      <h4 className="position__title">{main}</h4>
                      <div className="year__controller-wrapper">
                        <div className="year__controller">
                          <Button
                            type="button"
                            onClick={handleChangeYear(idx, -0.5)}
                          >
                            <Icon icon="minus" />
                          </Button>
                          <div className="position__input-wrapper">
                            <Field
                              name={`${name}[${idx}].year`}
                              value={field.value[idx]?.year}
                              className="position__input"
                            />
                          </div>
                          <Button
                            type="button"
                            onClick={handleChangeYear(idx, 0.5)}
                          >
                            <Icon icon="plus" />
                          </Button>
                        </div>

                        {/* <ErrorMessage
                          component={Former.Error}
                          name={`${name}[${idx}].year`}
                        /> */}
                      </div>
                    </div>
                    <MulSelect
                      name={`${name}[${idx}].add`}
                      options={additional.map((v: string) => ({
                        value: v,
                        label: v,
                      }))}
                    />
                    {/* <ErrorMessage
                      component={Former.Error}
                      name={`${name}[${idx}].add`}
                    /> */}
                  </>
                );
              }}
              className="position__list"
              isWrapComponent
              itemClassName="position__item"
            />
          )}
        </>
      )}
    </Field>
  );
};

export default Position;
