import Page from 'components/Page';
import React, { useContext } from 'react';
import { Context } from '../ContextState';
import { useHistory } from 'react-router-dom';
import { FinancialInfoAndBondsTable } from '../components/UpdateFinanicalInfoAndSetBondsTable';
import { readString } from 'react-papaparse';
import SaleVehicleData from '../demos/SaleVehicleData';
import { Button, Card, CardBody, Col, Form, Table, Row } from 'reactstrap';

const UpdateFinanicalInfoAndSetBondsPage = () => {
  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);
  const history = useHistory();
  const saleVehicleMpg = readString(SaleVehicleData);
  const { data } = saleVehicleMpg;

  return (
    <Page title="Update Finanical Info And Set Bonds">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Table>
                  {data.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        {FinancialInfoAndBondsTable(data, index)}
                      </React.Fragment>
                    );
                  })}
                </Table>
                <Button
                  color="theme"
                  size="lg"
                  onClick={() => history.push('/PrepareForOptimization')}
                >
                  Continue to Optimization Parameters
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default UpdateFinanicalInfoAndSetBondsPage;
