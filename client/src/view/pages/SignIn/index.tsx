import React, { useState } from 'react';
import { Container } from 'src/view/components/Wrapper';
import { Form, Formik } from 'formik';
import Flex from 'src/view/common/Flex';
import { Input } from 'src/view/common/Form';
import Button from 'src/view/common/Button';
import Text from 'src/view/common/Text';
import Icon from 'src/view/common/Icon';
import Title from 'src/view/common/Title';
import { Colors } from 'src/constants';
import { SignInSvg } from 'src/view/common/Svg';
import { useDispatch } from 'react-redux';

import { userOperation } from 'src/redux/feature/user';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await dispatch(userOperation.loginUser(data));
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
          }}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className="form sign-form" onChange={() => setError('')}>
            <Title variant="secondary" title="Sign in" />
            <Input variant="primary" name="email" placeholder="Email" />
            <Input
              variant="primary"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Flex gap="25px" wrap="wrap">
              <Button type="submit" variant="primary" size="medium">
                <Text tag="span">Sign in</Text>
                <Icon icon="sign-in" />
              </Button>
              {/* <Button variant="outline-dark" size="medium" type="button">
                <Text tag="span" title="Fogot the password" />
                <Icon icon="circle-question" />
              </Button> */}
            </Flex>
            <Title variant="info" color={Colors.PINK} title={error} />
          </Form>
        </Formik>
      </Flex>
    </Container>
  );
};

export default SignIn;
