import React, { useState } from 'react';
import { Container } from 'src/view/components/Wrapper';
import Flex from 'src/view/common/Flex';
import { Form, Formik } from 'formik';
import { Input, Radio } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import { Colors } from 'src/constants';
import { useHistory } from 'react-router-dom';
import { SignInSvg } from 'src/view/common/Svg';
import { userOperation } from 'src/redux/feature/user';
import { useDispatch } from 'react-redux';

const SignUp: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const onSubmit = async (data: {
    email: string;
    password: string;
    userTableNameId: string;
  }) => {
    try {
      dispatch(
        userOperation.registerUser({
          data,
          onSuccess: () => history.push('/create-profile'),
        })
      );
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Flex alignItems="center" gap="40px" justify="center">
        <SignInSvg className="sign-svg" />
        <Formik
          initialValues={{
            email: '',
            password: '',
            userTableNameId: '',
          }}
          onSubmit={onSubmit}
        >
          <Form className="form sign-form">
            <Title variant="secondary" title="Sign up" />
            <Input variant="primary" name="email" placeholder="Email" />
            <Input
              variant="primary"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Radio
              name="userTableNameId"
              value="0"
              title={<Title variant="small" title="I am developer" />}
            />
            <Radio
              name="userTableNameId"
              value="1"
              title={<Title variant="small" title="I am recruiter" />}
            />
            <Button type="submit" variant="primary" size="medium">
              <Text tag="span">Sign up</Text>
              <Icon icon="sign-in" />
            </Button>
            <Title variant="info" color={Colors.PINK} title={error} />
          </Form>
        </Formik>
      </Flex>
    </Container>
  );
};

export default SignUp;
