import Page from 'components/Page';
import React, { useContext } from 'react';
import { Context } from '../ContextState';
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

const SelectBestEpaMatchPage = () => {
  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);
  const history = useHistory();

  return (
    <Page title="Select Best EPA Match">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label
                    for="exampleSelectMulti"
                    style={{ fontSize: '1.3rem' }}
                  >
                    Select the best EPA match from below for below 5 vehicles
                  </Label>
                  <h5 style={{ color: '#37cc4b', marginTop: '2rem' }}>
                    {' '}
                    Vehicle 16: 2018; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    2T1BURHE9JC975914; 19704; 30; MICHIGAN; 2.85;
                  </h5>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>
                      2018; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (AV-S7); 28; 35
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 28; 36
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA LE ECO; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 30; 40
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA IM; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (AV-S7); 28; 36
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA LE ECO; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 29; 38
                    </option>
                  </Input>

                  <h5 style={{ color: '#37cc4b', marginTop: '2rem' }}>
                    {' '}
                    Vehicle 17: 2020; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    JTDEPRAEXLJ027480; 19054; 33; MICHIGAN; 2.92;
                  </h5>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>
                      2020; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 30; 38
                    </option>
                    <option>
                      2020; TOYOTA; COROLLA XLE; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 29; 37
                    </option>
                  </Input>

                  <h5 style={{ color: '#37cc4b', marginTop: '2rem' }}>
                    {' '}
                    Vehicle 18: 2019; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    5YFBURHE5KP884527; 16684; 33; MICHIGAN; 2.76;
                  </h5>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>
                      2019; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 28; 36
                    </option>
                    <option>
                      2019; TOYOTA; COROLLA LE ECO; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 29; 38
                    </option>
                    <option>
                      2019; TOYOTA; COROLLA LE ECO; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 30; 40
                    </option>
                    <option>
                      2019; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (AV-S7); 28; 35
                    </option>
                  </Input>

                  <h5 style={{ color: '#37cc4b', marginTop: '2rem' }}>
                    {' '}
                    Vehicle 19: 2018; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    2T1BURHE2JC993199; 23140; 35; MICHIGAN; 3;
                  </h5>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>
                      2018; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (AV-S7); 28; 35
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 28; 36
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA LE ECO; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 30; 40
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA IM; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (AV-S7); 28; 36
                    </option>
                    <option>
                      2018; TOYOTA; COROLLA LE ECO; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 29; 38
                    </option>
                  </Input>

                  <h5 style={{ color: '#37cc4b', marginTop: '2rem' }}>
                    {' '}
                    Vehicle 20: 2020; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    JTDEPRAEXLJ030816; 16291; 30; MICHIGAN; 2.91;
                  </h5>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>
                      2020; TOYOTA; COROLLA; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 30; 38
                    </option>
                    <option>
                      2020; TOYOTA; COROLLA XLE; 1.8; 4; FRONT-WHEEL DRIVE;
                      AUTOMATIC (VARIABLE GEAR RATIOS); 29; 37
                    </option>
                  </Input>
                </FormGroup>

                <Button
                  color="theme"
                  size="lg"
                  onClick={() => history.push('/ReviewEPAVehiclesFootprint')}
                >
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
