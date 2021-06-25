import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const HomePage = React.lazy(() => import('pages/HomePage'));

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const EnterFleetInfoPage = React.lazy(() => import('pages/EnterFleetInfoPage'));
const DefineColumnsPage = React.lazy(() => import('pages/DefineColumnsPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const DecodedVINsPage = React.lazy(() => import('pages/DecodedVINsPage'));
const ReviewEpaMatchesPage = React.lazy(() =>
  import('pages/ReviewEpaMatchesPage'),
);
const SelectBestEpaMatchPage = React.lazy(() =>
  import('pages/SelectBestEpaMatchPage'),
);
const ReviewEpaVehiclesFootprintPage = React.lazy(() =>
  import('pages/ReviewEpaVehiclesFootprintPage'),
);
const SelectSaleVehiclesForPurchasePage = React.lazy(() =>
  import('pages/SelectSaleVehiclesForPurchasePage'),
);
const SelectDefaultCandidateReplacementPage = React.lazy(() =>
  import('pages/SelectDefaultCandidateReplacementPage'),
);
const SelectCandidateReplacementPage = React.lazy(() =>
  import('pages/SelectCandidateReplacementPage'),
);

const UpdateFinanicalInfoAndSetBondsPage = React.lazy(() =>
  import('pages/UpdateFinanicalInfoAndSetBondsPage'),
);

const PrepareForOptimizationPage = React.lazy(() =>
  import('pages/PrepareForOptimizationPage'),
);

const OptimizationResultsPage = React.lazy(() =>
  import('pages/OptimizationResultsPage'),
);

const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/login-modal" component={AuthModalPage} />

                <Route exact path="/" component={HomePage} />
                <Route
                  exact
                  path="/EnterFleetInfo"
                  component={EnterFleetInfoPage}
                />
                <Route
                  exact
                  path="/DefineColumns"
                  component={DefineColumnsPage}
                />
                <Route exact path="/DecodedVINs" component={DecodedVINsPage} />
                <Route
                  exact
                  path="/ReviewEpaMatches"
                  component={ReviewEpaMatchesPage}
                />
                <Route
                  exact
                  path="/SelectBestEPAMatch"
                  component={SelectBestEpaMatchPage}
                />
                <Route
                  exact
                  path="/ReviewEPAVehiclesFootprint"
                  component={ReviewEpaVehiclesFootprintPage}
                />
                <Route
                  exact
                  path="/SelectSaleVehiclesForPurchase"
                  component={SelectSaleVehiclesForPurchasePage}
                />
                <Route
                  exact
                  path="/SelectDefaultCandidateReplacement"
                  component={SelectDefaultCandidateReplacementPage}
                />
                <Route
                  exact
                  path="/SelectCandidateReplacement"
                  component={SelectCandidateReplacementPage}
                />
                <Route
                  exact
                  path="/UpdateFinanicalInfoAndSetBonds"
                  component={UpdateFinanicalInfoAndSetBondsPage}
                />

                <Route
                  exact
                  path="/PrepareForOptimization"
                  component={PrepareForOptimizationPage}
                />
                <Route
                  exact
                  path="/OptimizationResults"
                  component={OptimizationResultsPage}
                />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
