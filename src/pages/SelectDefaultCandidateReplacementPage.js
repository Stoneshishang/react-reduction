import Page from 'components/Page';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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

const SelectDefaultCandidateReplacementPage = () => {
  const history = useHistory();
  const animatedComponents = makeAnimated();
  const saleVehicleList = [
    { value: '1', label: '2021 Escape Hybrid 2.5L' },
    { value: '2', label: '2020 Exploreer Limited Hybrid 3.3L' },
    { value: '3', label: '2022 F150 Lightning ' },
    { value: '4', label: '2022 E Transit' },
  ];

  const customStyles = {
    app: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      justifyItems: 'center',
      alignItems: 'center',
      display: 'grid',
      height: '100vh',
      fontFamily: 'Arial',
      color: 'rgba(0,0,100,1)',
      gridTemplateColumns: '1fr',
      fontSize: 25,
    },
    select: {
      width: '80%',
      maxWidth: 600,
    },
  };

  return (
    <Page title="Select Default Candidate Replacement">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <h5>
                  Replace{' '}
                  <span style={{ color: '#37cc4b', marginTop: '1rem' }}>
                    Vehicle 16: 2018; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    2T1BURHE9JC975914; 19704; 30; MICHIGAN; 2.85
                  </span>{' '}
                  with{' '}
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[]}
                    isMulti
                    options={saleVehicleList}
                    // width="100px"
                    styles={customStyles.select}
                  />
                </h5>

                <h5>
                  Replace{' '}
                  <span style={{ color: '#37cc4b', marginTop: '1rem' }}>
                    Vehicle 17: 2018; MALIBU; Chevrolet; 1.8; 4; FWD; SEDAN;
                    1G1ZD5STXKF163053 ; 19704; 30; MICHIGAN; 2.85
                  </span>{' '}
                  with{' '}
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[]}
                    isMulti
                    options={saleVehicleList}
                    // width="100px"
                    styles={customStyles.select}
                  />
                </h5>
                <Button
                  style={{ marginTop: '2rem' }}
                  color="theme"
                  size="lg"
                  onClick={() => history.push('/SelectCandidateReplacement')}
                >
                  Continue to Vehicle Replacement
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default SelectDefaultCandidateReplacementPage;
