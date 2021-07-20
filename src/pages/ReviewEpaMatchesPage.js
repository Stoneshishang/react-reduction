import Page from 'components/Page';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../ContextState';
import { RenderTable } from '../components/FleetInfoInputTable';
import { Button, Card, CardBody, Col, Form, Row, Table } from 'reactstrap';

const ReviewEpaMatchesPage = () => {
  const { enteredFleetData } = useContext(Context);
  const history = useHistory();

  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);

  return (
    <Page title="Review EPA Matched Vehicles">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card style={{ boxShadow: '3px 3px 8px 2px #D1D1D1' }}>
            <CardBody>
              <Form>
                <Row
                  style={{ justifyContent: 'space-between', display: 'flex' }}
                >
                  <h5 style={{ display: 'inline-block', marginLeft: '1rem' }}>
                    Review below {enteredFleetData.length - 1} vehicles with EPA
                    matches
                  </h5>
                  <Button
                    style={{ marginBottom: '1rem', marginRight: '1rem' }}
                    color="theme"
                    size="lg"
                    onClick={() => history.push('/SelectBestEPAMatch')}
                  >
                    Select Best EPA Matches
                  </Button>
                </Row>

                {enteredFleetData.length !== 0 && (
                  <Row>
                    <Table bordered hover>
                      {enteredFleetData.map((dataItem, index) => {
                        return (
                          <React.Fragment key={index}>
                            {RenderTable(dataItem, index)}
                          </React.Fragment>
                        );
                      })}
                    </Table>
                  </Row>
                )}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ReviewEpaMatchesPage;
