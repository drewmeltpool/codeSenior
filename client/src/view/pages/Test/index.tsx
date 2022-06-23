import React from 'react';

import { Container } from '../../components/Wrapper';

import Typography from 'src/view/common/Typography';
import { Dropdown, DropdownOption } from 'src/view/common/Dropdown';
import Icon from 'src/view/common/Icon';
import Button from 'src/view/common/Button';
import Flex from 'src/view/common/Flex';
import { Input, Checkbox, Radio, Select, Textarea } from 'src/view/common/Form';
import { Form, Formik } from 'formik';
import Collapse from 'src/view/common/Collapse';
import Accordion from 'src/view/common/Accordion';
import Avatar from 'src/view/common/Avatar';
import { Skeleton } from 'src/view/common/Skeleton';

const Test: React.FC = () => (
  <Container size="md">
    <Flex>
      <Skeleton>
        <Flex gap="12px">
          <Skeleton.Avatar />
          <Flex flex={1} direction="column" gap="8px">
            <Flex gap="12px">
              <Skeleton.Line />
              <Skeleton.Line />
            </Flex>
            <Skeleton.Line />
          </Flex>
        </Flex>
        <Skeleton.Line />
        <Skeleton.Line />
      </Skeleton>
    </Flex>
    <Flex gap="24px" direction="column">
      <Flex direction="column">
        <Typography variant="h1" title="h1 Test some test" />
        <Typography variant="h2" title="h2 Test some test" />
        <Typography variant="h3" title="h3 Test some test" />
        <Typography variant="h4" title="h4 Test some test" />
        <Typography variant="h5" title="h5 Test some test" />
        <Typography variant="h6" title="h6 Test some test" />
        <Typography variant="body1" title="body1 Test some test" />
        <Typography variant="body2" title="body2 Test some test" />
        <Typography variant="caption" title="caption Test some test" />
      </Flex>

      <Dropdown controller={<Typography variant="h5" title="Open Dropdown" />}>
        <DropdownOption onClick={() => console.log('h1')}>
          <Typography variant="h6" title="options" />
        </DropdownOption>
        <DropdownOption onClick={() => console.log('h2')}>
          <Typography variant="h6" title="options" />
        </DropdownOption>
        <DropdownOption onClick={() => console.log('h3')}>
          <Typography variant="h6" title="options" />
        </DropdownOption>
        <DropdownOption onClick={() => console.log('h4')}>
          <Icon icon="calendar" />
          <Typography variant="h6" title="optionsasd asd asdasd" />
        </DropdownOption>
      </Dropdown>

      <Flex gap="12px" direction="column" alignItems="flex-start">
        <Button title="primary" variant="primary" />
        <Button title="outline-primary" variant="outline-primary" />
        <Button title="box" variant="box" />
        <Button title="dark" variant="dark" />
        <Button title="outline-dark" variant="outline-dark" />
        <Button title="secondary" variant="secondary" />
      </Flex>

      <Flex>
        <Formik initialValues={{ asd: '' }} onSubmit={console.log}>
          <Form>
            <Input placeholder="name" name="asd" icon="calendar" />
            <Checkbox name="checkbox" placeholder="radio1" />

            <Checkbox name="checkbox" placeholder="radio2" />

            <Radio name="radio" title="one" />

            <Radio name="radio" title="two" />
            <Select name="select" options={[]} />
            <Textarea icon="user" name="textarea" placeholder="Textares" />
          </Form>
        </Formik>
      </Flex>

      <Flex direction="column">
        <Collapse title="Collapse">
          <Typography variant="h4" title="h4 Test some test" />
        </Collapse>
      </Flex>

      <Flex direction="column">
        <Accordion
          data={[1, 2, 3, 4]}
          component={() => (
            <Typography variant="h4" title="h4 Test some test" />
          )}
          onlyOne
          title={() => <Typography variant="h6" title="h4 Test some test" />}
          setKey={(idx) => idx}
        />
      </Flex>

      <Flex gap="12px">
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
      </Flex>
    </Flex>
  </Container>
);

export default Test;
