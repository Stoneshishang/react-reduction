import Page from 'components/Page';
import React from 'react';
import { useHistory } from 'react-router-dom';

import CurrencyInputField from 'react-currency-input-field';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const SelectCandidateReplacementPage = () => {
  const history = useHistory();
  return (
    <Page title="Select Candidate Replacements">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Button
                  color="theme"
                  size="lg"
                  onClick={() =>
                    history.push('/UpdateFinanicalInfoAndSetBonds')
                  }
                >
                  Continue to Pricing
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default SelectCandidateReplacementPage;
