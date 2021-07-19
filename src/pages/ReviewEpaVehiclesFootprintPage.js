import Page from 'components/Page';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../ContextState';
import { CsvToHtmlTable } from 'react-csv-to-table';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
  Row as RowB,
  Table as TableB,
} from 'reactstrap';
import EpaVehicleFootprintDemoData from '../demos/EpaVehicleFootprint';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const ReviewEpaVehiclesFootprintPage = () => {
  const [open, setOpen] = React.useState(false);
  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);
  const history = useHistory();

  const handleChange = event => {
    setOpen({ ...open, [event.target.name]: event.target.checked });
  };

  return (
    <Page title="Review EPA Vehicle Footprint">
      <RowB>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <TableB striped bordered hover style={{ textAlign: 'center' }}>
                  <thead
                    style={{
                      fontSize: '1.2rem',
                      backgroundColor: '#cfcfcf',
                    }}
                  >
                    <tr>
                      <th colSpan="4">Annual Totals</th>
                    </tr>
                    <tr>
                      <th colSpan="2">EPA MPG</th>

                      <th colSpan="2">User MPG</th>
                    </tr>
                    <tr>
                      <th>Fuel Cost</th>
                      <th>CO2</th>
                      <th>Fuel Cost</th>
                      <th>CO2</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>$36,613</th>
                      <th>140 Metric Tons</th>
                      <th>$37,216</th>
                      <th>137 Metric Tons</th>
                    </tr>
                  </tbody>
                </TableB>
                <RowB
                  style={{ justifyContent: 'space-between', display: 'flex' }}
                >
                  <Button
                    style={{ marginLeft: '1rem', marginTop: '2rem' }}
                    color="theme"
                    size="lg"
                    onClick={() => {
                      history.push('/SelectSaleVehiclesForPurchase');
                    }}
                  >
                    Select Replacement Vehicles
                  </Button>
                  <FormControlLabel
                    style={{ marginTop: '2rem', marginRight: '2rem' }}
                    control={
                      <Switch
                        checked={open}
                        onChange={() => setOpen(!open)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Display Detailed Vehicle Info"
                  />
                </RowB>
              </Form>
            </CardBody>
          </Card>

          {open === true && (
            <Card
              style={{
                boxShadow: '3px 3px 8px 2px #e0e0e0',
                marginTop: '2rem',
              }}
            >
              <CardBody>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    justifyContent: 'center',
                  }}
                  colSpan={12}
                >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <CsvToHtmlTable
                      data={EpaVehicleFootprintDemoData}
                      csvDelimiter=","
                      tableClassName="table table-striped table-hover"
                    />
                  </Collapse>
                </TableCell>
              </CardBody>
            </Card>
          )}
        </Col>
      </RowB>
    </Page>
  );
};

export default ReviewEpaVehiclesFootprintPage;
