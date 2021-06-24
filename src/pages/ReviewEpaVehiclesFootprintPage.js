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

const ReviewEpaVehiclesFootprintPage = () => {
  return (
    <Page title="Review EPA Vehicle Footprint">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Button color="theme" size="lg">
                  Select Replacement Vehicles
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ReviewEpaVehiclesFootprintPage;
