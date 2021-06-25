import Page from 'components/Page';

import { getColor } from 'utils/colors';
import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardText,
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

const PrepareForOptimizationPage = () => {
  const history = useHistory();

  return (
    <Page title="Prepare For Optimization">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Row>
                <CardText
                  className="mt-3"
                  style={{ marginLeft: '20px', marginRight: '10px' }}
                >
                  Select Optimizations to Run:{' '}
                </CardText>
                <ButtonGroup className="mr-3 mb-3">
                  <Button color="lightgrey">Purchase Price</Button>
                  <Button color="lightgrey">Price + Fuel</Button>
                </ButtonGroup>
              </Row>

              <Row>
                <CardText
                  className="mt-3"
                  style={{ marginLeft: '20px', marginRight: '10px' }}
                >
                  Select CO2 Step Size:{' '}
                </CardText>
                <ButtonGroup className="mr-3 mb-3">
                  <Button color="lightgrey">1.0%</Button>
                  <Button color="lightgrey">0.5%</Button>
                  <Button color="lightgrey">0.1%</Button>
                </ButtonGroup>
              </Row>

              <Row>
                <CardText
                  className="mt-3"
                  style={{ marginLeft: '20px', marginRight: '10px' }}
                >
                  Select Optimality Tolerance:{' '}
                </CardText>
                <ButtonGroup className="mr-3 mb-3">
                  <Button color="lightgrey">1.0%</Button>
                  <Button color="lightgrey">0.1%</Button>
                </ButtonGroup>
              </Row>
              <Form>
                <Button
                  color="theme"
                  size="lg"
                  style={{ marginTop: '30px' }}
                  onClick={() => history.push('/OptimizationResults')}
                >
                  Optimize
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default PrepareForOptimizationPage;
