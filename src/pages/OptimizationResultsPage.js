import React from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import 'chartjs-plugin-style';
import Page from 'components/Page';

const Co2Reduction = [
  '25.70%',
  '28.20%',
  '30.60%',
  '33%',
  '35.50%',
  '36.60%',
  '38%',
  '39.10%',
  '40.30%',
  '41.60%',
  '43.90%',
  '45%',
  '46.20%',
  '47.30%',
  '48.40%',
  '49.40%',
  '50.40%',
  '51.40%',
];

const genLineData = (moreData = {}, moreData2 = {}, moreData3 = {}) => {
  return {
    labels: Co2Reduction,
    datasets: [
      {
        label: 'Total Price (Fuel + Car)',
        backgroundColor: getColor('primary'),
        pointHoverBackgroundColor: 'rgba(106, 130, 221, 1)',
        borderColor: getColor('primary'),
        pointRadius: 2.3,
        pointHoverRadius: 4,
        pointHoverBorderColor: 0,

        data: [
          749921, 754424, 759188, 763930, 768709, 778011, 785611, 787436,
          793417, 799810, 812050, 817908, 824301, 830828, 837458, 844054,
          853617, 863185,
        ],
        ...moreData,
      },
      {
        label: 'Fuel Price',
        backgroundColor: getColor('secondary'),
        pointHoverBackgroundColor: 'rgba(252,92,125,1)',
        pointRadius: 2.3,
        pointHoverRadius: 4,
        borderColor: getColor('secondary'),
        pointHoverBorderColor: 0,
        data: [
          81681, 78799, 76178, 73535, 70929, 69606, 68176, 66941, 65737, 64365,
          61655, 60328, 58956, 57718, 56583, 55414, 54352, 53295,
        ],
        ...moreData2,
      },
      {
        label: 'Car Price',
        backgroundColor: getColor('info'),
        pointHoverBackgroundColor: 'rgba(0,201,255,1)',
        pointRadius: 2.3,
        pointHoverRadius: 4,
        borderColor: getColor('info'),
        pointHoverBorderColor: 0,
        data: [
          668240, 675625, 683010, 690395, 697780, 708405, 717435, 720495,
          727680, 735445, 750395, 757580, 765345, 773110, 780875, 788640,
          799265, 809890,
        ],
        ...moreData3,
      },
    ],
  };
};

const stackedBarData = () => {
  return {
    labels: Co2Reduction,
    datasets: [
      {
        label: '2021 Escape AWD HEV 2.5 L (43, 37)',
        backgroundColor: getColor('primary'),
        hoverBackgroundColor: 'rgba(106, 130, 221, 0.7)',
        borderColor: getColor('primary'),
        shadowOffsetX: 25,
        borderWidth: 0,
        data: [4, 3, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
      },
      {
        label: '2021 Escape FWD 1.5 L (28, 34)',
        backgroundColor: getColor('secondary'),
        hoverBackgroundColor: 'rgba(252,92,125,0.7)',
        borderColor: getColor('secondary'),
        borderWidth: 0,
        data: [6, 6, 6, 6, 6, 5, 6, 5, 6, 5, 5, 6, 5, 4, 3, 2, 1, 0],
      },
      {
        label: '2021 Escape FWD HEV 2.5 L (44, 37)',
        backgroundColor: getColor('info'),
        hoverBackgroundColor: 'rgba(0,201,255,0.7)',
        borderColor: getColor('info'),
        borderWidth: 0,
        data: [6, 6, 6, 6, 6, 6, 5, 6, 4, 5, 4, 2, 3, 4, 5, 6, 6, 6],
      },
      {
        label: '2021 Mustang Mach-E AWD (100, 86)',
        backgroundColor: getColor('success'),
        hoverBackgroundColor: 'rgba(69,182,73,0.7)',
        borderColor: getColor('success'),
        borderWidth: 0,
        data: [2, 3, 4, 5, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      },
      {
        label: '2021 Mustang Mach-E RWD (105, 93)',
        backgroundColor: getColor('danger'),
        hoverBackgroundColor: 'rgba(248,80,50, 0.7)',
        borderColor: getColor('danger'),
        borderWidth: 0,
        data: [2, 2, 2, 2, 2, 2, 4, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 6],
      },
    ],
  };
};

const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
  };
};

const renderPieChart = () => {
  console.log('====================================');
  console.log('Onclick on Bar Chart executed');
  console.log('====================================');

  return (
    <div>
      <h1>Pie Chart</h1>
    </div>
  );
};

const OptimizationResultsPage = () => {
  return (
    <Page title="Charts">
      <Row>
        {/* <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Bar</CardHeader>
            <CardBody>
              <Bar data={genLineData()} />
            </CardBody>
          </Card>
        </Col> */}

        <Col xl={10} lg={12} md={12}>
          <Card>
            <CardHeader>Line</CardHeader>
            <CardBody>
              <Line
                data={genLineData(
                  { fill: false },
                  { fill: false },
                  { fill: false },
                )}
                options={{
                  legend: { position: 'right' },
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'CO2 Reduction',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'Cost',
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={10} lg={12} md={12}>
          <Card>
            <CardHeader>Stacked Bar</CardHeader>
            <CardBody>
              <Bar
                data={stackedBarData}
                options={{
                  onClick: renderPieChart,
                  legend: { position: 'right' },
                  scales: {
                    xAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'CO2 Reduction',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Quantity',
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBody>
          </Card>
        </Col>

        {/* <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Combo Bar / Line</CardHeader>
            <CardBody>
              <Bar data={genLineData({ type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col> */}
      </Row>
      {/* <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Pie</CardHeader>
            <CardBody>
              <Pie data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Doughnut</CardHeader>
            <CardBody>
              <Doughnut data={genPieData()} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Polar</CardHeader>
            <CardBody>
              <Polar data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Radar</CardHeader>
            <CardBody>
              <Radar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>
      </Row> */}
    </Page>
  );
};

export default OptimizationResultsPage;
