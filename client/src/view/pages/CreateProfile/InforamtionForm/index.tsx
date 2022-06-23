import { Form, Formik } from 'formik';
import React from 'react';
import { Input, Textarea } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import Text from 'src/view/common/Text';
import { useStepper } from 'src/view/hooks';
import Flex from 'src/view/common/Flex';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userOperation } from 'src/redux/feature/user';

const InforamtionForm: React.FC = () => {
  const { data, handlePrev } = useStepper();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      onSubmit={async (form) => {
        await dispatch(userOperation.updateUser({ ...form, ...data }));
        history.push('/profile');
      }}
      initialValues={{
        title: data.title || '',
        shortDescription: data.shortDescription || '',
      }}
    >
      {({ values }) => (
        <Form className="form">
          <Title title="Information" variant="secondary" />
          <Input
            icon="stairs"
            variant="primary"
            name="title"
            placeholder="Profile title"
          />
          <Textarea
            icon="id-badge"
            variant="primary"
            name="shortDescription"
            placeholder="Profile description"
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

export default InforamtionForm;
