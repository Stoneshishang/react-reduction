import Page from 'components/Page';

import { getColor } from 'utils/colors';
import React, { useContext } from 'react';
import { Context } from '../ContextState';
import { useHistory } from 'react-router-dom';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Button as ButtonB } from 'react-bootstrap';
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
  Table,
} from 'reactstrap';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const PrepareForOptimizationPage = () => {
  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);
  const history = useHistory();

  const RadioBtnStyles = { marginRight: '2rem', marginTop: '0.5rem' };
  const CardTextStyles = { marginLeft: '20px', marginRight: '2rem' };

  return (
    <Page title="Prepare For Optimization">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Row>
                <CardText className="mt-3" style={CardTextStyles}>
                  Select Optimizations to Run:{' '}
                </CardText>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    // defaultValue="top"
                  >
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="Purchase Price"
                      control={<Radio color="primary" />}
                      label="Purchase Price"
                    />{' '}
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="Purchase Price + Fuel"
                      control={<Radio color="primary" />}
                      label="Purchase Price + Fuel"
                    />
                  </RadioGroup>
                </FormControl>
              </Row>

              <Row>
                <CardText className="mt-3" style={CardTextStyles}>
                  Select CO2 Step Size:{' '}
                </CardText>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    // defaultValue="top"
                  >
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="one percent"
                      control={<Radio color="primary" />}
                      label="1.0%"
                    />
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="point five percent"
                      control={<Radio color="primary" />}
                      label="0.5%"
                    />{' '}
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="point one percent"
                      control={<Radio color="primary" />}
                      label="0.1%"
                    />
                  </RadioGroup>
                </FormControl>
              </Row>

              <Row>
                <CardText className="mt-3" style={CardTextStyles}>
                  Select Optimality Tolerance:{' '}
                </CardText>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    // defaultValue="top"
                  >
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="one percent olerance"
                      control={<Radio color="primary" />}
                      label="1.0%"
                    />{' '}
                    <FormControlLabel
                      style={RadioBtnStyles}
                      value="point one percent olerance"
                      control={<Radio color="primary" />}
                      label="0.1%"
                    />
                  </RadioGroup>
                </FormControl>
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
