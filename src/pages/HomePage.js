import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import { useHistory } from 'react-router-dom';
import fordFleet from 'assets/img/fpp-homepage/ford-fleet.PNG';

import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const HomePage = () => {
  const history = useHistory();

  return (
    <Page title="Home">
      {/* <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row" style={{boxShadow: '3px 3px 8px 1px #D1D1D1'}}>
            <CardImg
              className="card-img-left"
              src={bg1Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
              <CardTitle>Horizontal Image Card(Left)</CardTitle>
              <CardText>
              Ford’s Fleet Purchase Planner system (patent-pending) is designed to provide our fleet customers with 
						optimal purchase strategies, based on their fleets' vehicle usage patterns, that incorporate 
						their companies’ cost and sustainability goals. 
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Horizontal Image Card(Right)</CardTitle>
              <CardText>Some quick example card</CardText>
            </CardBody>
            <CardImg
              className="card-img-right"
              src={bg3Image}
              style={{ width: 'auto', height: 150 }}
            />
          </Card>
        </Col>
      </Row> */}
      <Row>
        <Col md={12} sm={6} xs={12} className="mb-3">
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardImg top src={fordFleet} />
            <CardBody>
              <CardTitle style={{ fontSize: '1.7rem' }}>
                About Sustainable Fleet Purchase Planner
              </CardTitle>
              <CardText>
                Ford’s Fleet Purchase Planner system (patent-pending) is
                designed to provide our fleet customers with optimal purchase
                strategies, based on their fleets' vehicle usage patterns, that
                incorporate their companies’ cost and sustainability goals.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        {[''].map((color, index) => (
          <Col key={index} md={12} sm={6} xs={12} className="mb-3">
            <Card
              inverse
              className={`border-0 bg-gradient-theme${
                !!color ? '-' : ''
              }${color}`}
              style={{
                height: 250,
                boxShadow: '3px 3px 8px 2px #D1D1D1',
              }}
            >
              <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardTitle style={{ fontSize: '1.5rem' }}>
                  Introduction
                </CardTitle>
                <CardText>
                  This web application navigates you through the analysis
                  process, providing results that are completely customized and
                  uniquely tailored for each customer.
                </CardText>
                <CardText>
                  To get started, please select an existing customer account or
                  create a new customer account.
                </CardText>
              </CardBody>

              <CardBody className="d-flex justify-content-around align-items-center">
                <Button
                  outline
                  color="light"
                  onClick={() => history.push('/signup')}
                >
                  Register
                </Button>
                <Button
                  outline
                  color="light"
                  onClick={() => history.push('/login')}
                >
                  Log in
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default HomePage;
