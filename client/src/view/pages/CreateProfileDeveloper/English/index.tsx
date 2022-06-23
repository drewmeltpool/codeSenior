import { Form, Formik } from 'formik';
import React from 'react';
import { Radio } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { useStepper } from 'src/view/hooks';
import Flex from 'src/view/common/Flex';
import FlatList from 'src/view/common/FlatList';
import Typography from 'src/view/common/Typography';
import { Colors, englishLevels } from 'src/constants';

import * as api from 'src/api';
import { useSelector } from 'react-redux';

const EnglishForm: React.FC = () => {
  const { data, handlePrev, handleNext } = useStepper();
  const { id } = useSelector((s: any) => s.developer) as any;

  return (
    <Formik
      onSubmit={async (form) => {
        await api.developer.update(id, form);
        handleNext({ ...data, ...form })();
      }}
      initialValues={{
        english: data.english || 'B1 (Intermidiate)',
      }}
    >
      {({ values }) => (
        <Form className="form">
          <Title title="English" variant="secondary" />

          <Typography
            className="text-center"
            variant="h3"
            color={Colors.BLUE}
            title={values.english}
          />
          <FlatList
            data={englishLevels}
            component={({ label }) => (
              <Radio
                name="english"
                value={label}
                className="english-level shadow"
                title={<Typography variant="body-bold" title={label} />}
              />
            )}
            setKey={(_, idx) => idx}
            className="english-list"
            tag="div"
          />

          <Flex gap="35px">
            <Button
              type="button"
              size="medium"
              variant="outline-primary"
              onClick={handlePrev({ ...data, ...values })}
            >
              <Icon icon="angle-left" />
              <Text tag="span" title="Prev" />
            </Button>
            <Button type="submit" size="medium" variant="primary">
              <Text tag="span" title="Next" />
              <Icon icon="angle-right" />
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default EnglishForm;
