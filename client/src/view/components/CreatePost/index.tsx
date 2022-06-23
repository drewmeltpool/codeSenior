import { Form, Formik } from 'formik';
import React from 'react';
import Button from 'src/view/common/Button';
import Collapse from 'src/view/common/Collapse';
import Editor from 'src/view/common/Editor';
import Flex from 'src/view/common/Flex';
import { Input, Select, Textarea } from 'src/view/common/Form';
import Title from 'src/view/common/Title';

interface ICreatePost {
  onSubmit: (_values: any) => void;
  initialValues: any;
}

const CreatePost: React.FC<ICreatePost> = ({ onSubmit, initialValues }) => {
  return (
    <Flex direction="column" gap="16px">
      <Title variant="secondary" title="Create post" />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ setFieldValue, values }) => (
          <Form className="form--default">
            <Input name="title" variant="primary" placeholder="Title" />
            <Flex gap="24px">
              <Input
                name="from"
                type="number"
                variant="primary"
                placeholder="From"
              />
              <Input
                name="to"
                type="number"
                variant="primary"
                placeholder="To"
              />
              <Select
                name="position"
                placeholder="Position"
                options={[
                  {
                    value: 'Trainee',
                    label: 'Trainee',
                  },
                  {
                    value: 'Junior',
                    label: 'Junior',
                  },
                  {
                    value: 'Middle',
                    label: 'Middle',
                  },
                  {
                    value: 'Senior',
                    label: 'Senior',
                  },
                  {
                    value: 'CTO',
                    label: 'CTO',
                  },
                ]}
              />
            </Flex>
            <Textarea name="description" placeholder="Short description" />

            <Collapse
              icon="pen"
              title={<Title variant="info" title="Bonuses" />}
            >
              <Editor
                valueHTML={values.bonuses}
                html={({ html, isEmpty }) =>
                  setFieldValue('bonuses', isEmpty ? '' : html)
                }
              />
            </Collapse>
            <Collapse
              icon="pen"
              title={<Title variant="info" title="Requirement" />}
            >
              <Editor
                valueHTML={values.requirement}
                html={({ html, isEmpty }) =>
                  setFieldValue('requirement', isEmpty ? '' : html)
                }
              />
            </Collapse>
            <Collapse
              icon="pen"
              title={<Title variant="info" title="Additional" />}
            >
              <Editor
                valueHTML={values.additional}
                html={({ html, isEmpty }) =>
                  setFieldValue('additional', isEmpty ? '' : html)
                }
              />
            </Collapse>

            <Button
              type="submit"
              size="medium"
              variant="primary"
              title="Post"
            />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default CreatePost;
