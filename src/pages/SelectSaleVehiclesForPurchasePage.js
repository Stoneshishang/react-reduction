import Page from 'components/Page';
import React from 'react';
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
  //   const str = `Sale Vehicle Model,MPG City,MPG Highway
  // 2021 Escape Hybrid 2.5L,44,37
  // 2020 Exploreer Limited Hybrid 3.3L,21,28
  // 2022 F150 Lightning ,85,50
  // 2022 E Transit,61,66`;

  const saleVehicleMpg = readString(SaleVehicleData);
  const { data } = saleVehicleMpg;
  console.log('=================saleVehicleMpg===================');
  console.log(data);
  console.log('====================================');

  // const columns = [
  //   { field: 'saleVehicleModel', headerName: 'Sale Vehicle Model', width: 150 },
  //   { field: 'mpgCity', headerName: 'Mpg City', width: 90 },
  //   { field: 'mpgHighway', headerName: 'Mpg Highway', width: 90 },
  // ];

  // const rows = [
  //   {
  //     saleVehicleModel: '2021 Escape Hybrid 2.5L',
  //     mpgCity: '44',
  //     mpgHighway: '37',
  //   },
  //   {
  //     saleVehicleModel: '2020 Exploreer Limited Hybrid 3.3L',
  //     mpgCity: '21',
  //     mpgHighway: '28',
  //   },
  //   {
  //     saleVehicleModel: '2022 E Transit',
  //     mpgCity: '61',
  //     mpgHighway: '66',
  //   },
  // ];

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
