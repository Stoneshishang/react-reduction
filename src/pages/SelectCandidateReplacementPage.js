import Page from 'components/Page';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Button, Card, CardBody, Col, Form, Row } from 'reactstrap';

const SelectCandidateReplacementPage = () => {
  const history = useHistory();
  const animatedComponents = makeAnimated();
  const saleVehicleList = [
    { value: '1', label: '2021 Escape Hybrid 2.5L' },
    { value: '2', label: '2020 Exploreer Limited Hybrid 3.3L' },
    { value: '3', label: '2022 F150 Lightning ' },
    { value: '4', label: '2022 E Transit' },
  ];

  return (
    <Page title="Select Candidate Replacements">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <h5
                  style={{
                    lineHeight: '2rem',
                  }}
                >
                  For type{' '}
                  <span
                    style={{
                      color: '#37cc4b',
                      marginTop: '1rem',
                    }}
                  >
                    2018; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
                    2T1BURHE9JC975914; 19704; 30; MICHIGAN; 2.85
                  </span>{' '}
                  , <br /> replace{' '}
                  <span style={{ color: '#3d87f5' }}>
                    Vehicle 1: 5YFBURHE5KP884527
                    ,21718,29,Michigan,2.74,2020,TOYOTA,COROLLA,1.8,4,FWD,SEDAN
                  </span>{' '}
                  with{' '}
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[]}
                    isMulti
                    options={saleVehicleList}
                  />
                </h5>

                <h5 style={{ marginTop: '2rem', lineHeight: '2rem' }}>
                  For type{' '}
                  <span style={{ color: '#37cc4b', marginTop: '1rem' }}>
                    2018; MALIBU; Chevrolet; 1.8; 4; FWD; SEDAN;
                    1G1ZD5STXKF163053 ; 19704; 30; MICHIGAN; 1.95
                  </span>{' '}
                  , <br /> replace{' '}
                  <span style={{ color: '#3d87f5' }}>
                    Vehicle 2:
                    1G1ZD5ST8LF044788,21718,29,Michigan,2.74,2020,CHEVROLET,MALIBU,1.5,4,FWD,SEDAN
                  </span>{' '}
                  with{' '}
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[]}
                    isMulti
                    options={saleVehicleList}
                  />
                </h5>
                <Button
                  style={{ marginTop: '2rem' }}
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
