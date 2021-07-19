import Page from 'components/Page';
import React, { useContext } from 'react';
import { Context } from '../ContextState';
import { useHistory } from 'react-router-dom';
import { SelectSaleVehicleTable } from '../components/SelectSaleVehicleTable';
import { readString } from 'react-papaparse';
import SaleVehicleData from '../demos/SaleVehicleData';
// import { DataGrid } from '@material-ui/data-grid';
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
  Table,
} from 'reactstrap';

const SelectSaleVehiclesForPurchasePage = () => {
  const history = useHistory();
  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);

  const saleVehicleMpg = readString(SaleVehicleData);
  const { data } = saleVehicleMpg;

  return (
    <Page title="Select Sale Vehicles For Purchase">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Table>
                  {data.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        {SelectSaleVehicleTable(data, index)}
                      </React.Fragment>
                    );
                  })}
                </Table>
                {/* <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  checkboxSelection
                /> */}
                <Button
                  color="theme"
                  size="lg"
                  onClick={() =>
                    history.push('/SelectDefaultCandidateReplacement')
                  }
                >
                  Replacement Strategy
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default SelectSaleVehiclesForPurchasePage;
