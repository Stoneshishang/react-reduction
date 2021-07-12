import Page from 'components/Page';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Context } from '../ContextState';
import { RenderTable } from '../components/FleetInfoInputTable';
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
  Table,
  Row,
} from 'reactstrap';

const DefineColumnsPage = () => {
  const { enteredFleetData } = useContext(Context);
  const history = useHistory();
  // console.log('==================DefineColumnPage==================');
  // console.log(enteredFleetData);
  // console.log('====================================');

  return (
    <Page title="Define Columns">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleEmail">VIN</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>VIN</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="examplePassword">Annual Mileage</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Miles/Year</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="examplePassword">User MPG</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>User MPG</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleCity">Price Per Gallon</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Fuel Price</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">Location</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Not Included in Uploaded Data</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleFile">City Driving Share</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Not Included in Uploaded Data</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  color="theme"
                  size="lg"
                  onClick={() => {
                    history.push('/DecodedVINs');
                  }}
                >
                  Decode VINs
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {enteredFleetData.length !== 0 && (
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card style={{ boxShadow: '3px 3px 8px 2px #e0e0e0' }}>
              <CardBody>
                <Table bordered hover>
                  {enteredFleetData.map((dataItem, index) => {
                    return (
                      <React.Fragment key={index}>
                        {RenderTable(dataItem, index)}
                      </React.Fragment>
                    );
                  })}
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Page>
  );
};

export default DefineColumnsPage;
