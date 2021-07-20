import Page from 'components/Page';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CSVReader } from 'react-papaparse';
import { Context } from '../ContextState';
import { RenderTable } from '../components/FleetInfoInputTable';
import CurrencyInputField from 'react-currency-input-field';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';

const EnterFleetInfoPage = () => {
  const { enteredFleetData, setEnteredFleetData } = useContext(Context);
  const { setCurrentURL } = useContext(Context);

  setCurrentURL(window.location.pathname);

  const handleOnDrop = data => {
    // console.log('------------handleOnDrop---------------');
    if (data !== null) {
      setEnteredFleetData(data);
    }
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = data => {
    console.log('------------handleOnRemoveFile---------------');
    console.log(data);
    console.log('---------------------------');
  };

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
                      <Input type="select" name="select" id="exampleSelect1">
                        <option>US AVERAGE</option>
                        <option>EU AVERAGE</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleFile">
                        Drop or Click Below to Upload a Vehicle Fleet CSV File
                      </Label>
                      <CSVReader
                        onDrop={handleOnDrop}
                        onError={handleOnError}
                        addRemoveButton
                        onRemoveFile={handleOnRemoveFile}
                        style={{
                          dropArea: {
                            borderRadius: 5,
                          },
                          dropAreaActive: {
                            borderColor: 'red',
                          },
                          dropFile: {
                            width: 100,
                            height: 100,
                            background: '#ccc',
                          },
                          fileSizeInfo: {
                            color: '#fff',
                            backgroundColor: '#000',
                            borderRadius: 3,
                            lineHeight: 1,
                            marginBottom: '0.4em',
                            padding: '0 0.4em',
                          },
                          fileNameInfo: {
                            color: '#fff',
                            backgroundColor: '#696969',
                            borderRadius: 3,
                            fontSize: 12,
                            lineHeight: 1,
                            padding: '0 0.2em',
                          },
                          removeButton: {
                            color: 'red',
                          },
                          progressBar: {
                            backgroundColor: 'green',
                          },
                        }}
                      ></CSVReader>
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
      {enteredFleetData.length !== 0 && (
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card style={{ boxShadow: '3px 3px 8px 2px #e0e0e0' }}>
              <CardBody>
                <Table bordered hover striped>
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

export default EnterFleetInfoPage;
