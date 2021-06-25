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

const EnterFleetInfoPage = () => {
  const history = useHistory();

  return (
    <Page title="Enter Fleet Info">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleEmail">Enter Default Mileage</Label>

                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Miles"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="examplePassword">
                        Enter Default Gas Price
                      </Label>

                      {/* <Input id="default-gas-price" placeholder="USD" />*/}
                      <CurrencyInputField
                        placeholder="USD"
                        prefix="$"
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '2.25rem',
                          padding: '0.375rem 0.75rem',
                          fontSize: '1rem',
                          fontWeight: '400',
                          fontColor: '#495057',
                          lineHeight: '1.5',
                          color: '#495057',
                          backgroundColor: '#fff',
                          backgroundClip: 'padding-box',
                          border: '1px solid #ced4da',
                          borderRadius: '0.25rem',
                          transition:
                            'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="examplePassword">
                        Enter Default Vehicle Life
                      </Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Years"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleCity">
                        Select Default City Diving Share
                      </Label>

                      <Input type="select" name="select" id="exampleSelect">
                        <option>10%</option>
                        <option>20%</option>
                        <option>30%</option>
                        <option>40%</option>
                        <option>50%</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">Select Default Location</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>US AVERAGE</option>
                        <option>EU AVERAGE</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleFile">
                        Select a Vehicle Fleet File
                      </Label>
                      <Input type="file" name="file" id="exampleFile" />
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  color="theme"
                  size="lg"
                  onClick={() => history.push('/DefineColumns')}
                >
                  Continue to Define Columns
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default EnterFleetInfoPage;
