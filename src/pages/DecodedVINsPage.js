import Page from 'components/Page';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../ContextState';
import { RenderTable } from '../components/FleetInfoInputTable';
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

const DecodedVINsPage = () => {
  const { enteredFleetData } = useContext(Context);
  const history = useHistory();

  const { setCurrentURL } = useContext(Context);
  setCurrentURL(window.location.pathname);

  return (
    <Page title="Decoded VINs">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card
            style={{
              boxShadow: '3px 3px 8px 2px #D1D1D1',
            }}
          >
            <CardBody>
              <Form>
                <Row
                  style={{ justifyContent: 'space-between', display: 'flex' }}
                >
                  <h5 style={{ display: 'inline-block', marginLeft: '1rem' }}>
                    Review below {enteredFleetData.length - 1} decoded VINs
                    table
                  </h5>
                  <Button
                    style={{ marginRight: '1rem', marginBottom: '1rem' }}
                    color="theme"
                    size="lg"
                    onClick={() => history.push('/ReviewEpaMatches')}
                  >
                    Find Matching EPA Records
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

export default DecodedVINsPage;
