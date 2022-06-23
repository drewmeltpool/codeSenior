import React from 'react';

import { Step, Stepper, Steps } from 'src/view/common/Stepper';

import Formbar from './Formbar';

import { MainStep } from './Steps/MainStep';
import { AdditionalStep } from './Steps/AdditionalStep';
import { RequirementStep } from './Steps/RequirementStep';
import { BonusesStep } from './Steps/BonusStep';

const CreatePost: React.FC = () => {
  return (
    <Stepper className="flex-1" initialValue={{ postDate: 'now' }}>
      <Formbar className="create-post-box section" />
      <Steps className="create-post-stepps create-post-box section">
        <Step>
          <MainStep />
        </Step>
        <Step>
          <RequirementStep />
        </Step>
        <Step>
          <BonusesStep />
        </Step>
        <Step>
          <AdditionalStep />
        </Step>
      </Steps>
    </Stepper>
  );
};

export default CreatePost;

/* 
<Formik
      initialValues={{
        title: '1',
        from: '1',
        to: '1',
        position: '1',
        description: '1',
        postDate: 'now',
        requirement: '2',
        additional: '3',
        bonuses: '4',
      }}
      onSubmit={async (d, { setSubmitting }) => {
        setSubmitting(true);

        await api.post.create({
          ...d,
          authorId: user.profile.id,
        });
        
        setSubmitting(false);
      }}
    >
      {({ setFieldValue, values, isSubmitting }) => (
        <Form className="form--default form-bg flex-1">
          <Title variant="secondary" title="Create post" />
          
          <Collapse icon="pen" title={<Title variant="info" title="Bonuses" />}>
            <Flex direction="column">
              <Title variant="secondary" title="Bonuses" />
              <Editor
                valueHTML={values.bonuses}
                html={({ html }) => setFieldValue('bonuses', html)}
              />
            </Flex>
          </Collapse>
          <Collapse
            icon="pen"
            title={<Title variant="info" title="Requirement" />}
          >
            <Flex direction="column">
              <Title variant="secondary" title="Requirement" />
              <Editor
                valueHTML={values.requirement}
                html={({ html }) => setFieldValue('requirement', html)}
              />
            </Flex>
          </Collapse>
          <Collapse
            icon="pen"
            title={<Title variant="info" title="Additional" />}
          >
            <Flex direction="column">
              <Title variant="secondary" title="Additional" />
              <Editor
                valueHTML={values.additional}
                html={({ html }) => setFieldValue('additional', html)}
                />
            </Flex>
          </Collapse>

          <Button
            disabled={isSubmitting}
            type="submit"
            size="medium"
            variant="primary"
          >
            {isSubmitting ? (
              <Spinner color={Colors.WHITE} />
            ) : (
              <Text tag="span" title="Post" />
            )}
          </Button>
        </Form>
      )}
    </Formik>
*/
