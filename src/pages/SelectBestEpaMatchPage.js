import Page from 'components/Page';
import React from 'react';

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

const SelectBestEpaMatchPage = () => {
  return (
    <Page title="Select Best EPA Match">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleSelectMulti">
                    Select the best EPA match from below for Toyota Sample 0
                  </Label>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>Toyota Sample 1</option>
                    <option>Toyota Sample 2</option>
                    <option>Toyota Sample 3</option>
                    <option>Toyota Sample 4</option>
                    <option>Toyota Sample 5</option>
                  </Input>
                </FormGroup>

                <Button color="theme" size="lg">
                  EPA Vehicle Footprint
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default SelectBestEpaMatchPage;
