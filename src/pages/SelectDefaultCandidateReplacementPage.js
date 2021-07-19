import Page from 'components/Page';
import React, { useContext } from 'react';
import { Context } from '../ContextState';
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
  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);
  const history = useHistory();
  const animatedComponents = makeAnimated();
  const saleVehicleList = [
    { value: '1', label: '2021 Escape Hybrid 2.5L' },
    { value: '2', label: '2020 Exploreer Limited Hybrid 3.3L' },
    { value: '3', label: '2022 F150 Lightning ' },
    { value: '4', label: '2022 E Transit' },
  ];

  return (
    <Page title="Select Default Candidate Replacement">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <h5 style={{ lineHeight: '2rem' }}>
                  Replace{' '}
                  <span
                    style={{
                      color: '#37cc4b',
                      marginTop: '1rem',
                    }}
                  >
                    2018; COROLLA; TOYOTA; 1.8; 4; FWD; SEDAN;
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
                  Replace{' '}
                  <span style={{ color: '#37cc4b', marginTop: '1rem' }}>
                    2018; MALIBU; Chevrolet; 1.8; 4; FWD; SEDAN;
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
