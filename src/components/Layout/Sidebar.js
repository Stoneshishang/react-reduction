import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  MdHome,
  MdRateReview,
  MdAccountCircle,
  MdShoppingCart,
  MdArrowDropDownCircle,
  MdCheckBox,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from 'react-icons/md';


import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const FleetDataAssembly = [
  {
    to: '/EnterFleetInfo',
    name: 'Enter Fleet Info',
    exact: false,
    Icon: MdChromeReaderMode,
  },
  {
    to: '/DefineColumns',
    name: 'Define Columns',
    exact: false,
    Icon: MdChromeReaderMode,
  },
  {
    to: '/DecodedVINs',
    name: 'Decoded VINs',
    exact: false,
    Icon: MdChromeReaderMode,
  },
];

const SustainabilityEvalution = [
  {
    to: '/SelectBestEPAMatches',
    name: 'Select Best EPA Matches',
    exact: false,
    Icon: MdCheckBox,
  },
  {
    to: '/ReviewEPAVehiclesFootprint',
    name: 'Review EPA Vehicles Footprint',
    exact: false,
    Icon: MdRateReview,
  },
];

const PurchaseRecommendation = [
  {
    to: '/SelectSaleVehiclesForPurchase',
    name: 'Select Sale Vehicles For Purchase',
    exact: false,
    Icon: MdCheckBox,
  },
  {
    to: '/SelectDefaultCandidateReplacement',
    name: 'Select Default Candidate Replacement',
    exact: false,
    Icon: MdCheckBox,
  },
  {
    to: '/UpdateFinanicalInfoAndSetBonds',
    name: 'Update Finanical Info And Set Bonds',
    exact: false,
    Icon: MdRateReview,
  },
];

const OptimizationVisualization = [
  {
    to: '/OptimizationVisualization',
    name: 'Optimization Visualization',
    exact: false,
    Icon: MdInsertChart,
  },
  {
    to: '/OptimizationResults',
    name: 'Optimization Results',
    exact: false,
    Icon: MdInsertChart,
  },
];

const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  {
    to: '/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  },
];

const navItems = [{ to: '/', name: 'home', exact: true, Icon: MdHome}];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenAssemblies: false,
    isOpenEvaluations: false,
    isOpenPages: false,
    isOpenPurchases: false,
    isOpenOptimizations: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink >
              <span className="text-white" style={{fontSize: '1.4rem'}}>
                Sustainable Fleet Purchase Planner
              </span>
            </SourceLink>
          </Navbar>

          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Assemblies')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon') }/>
                  <span className=" align-self-start text-uppercase">Fleet Data Assembly</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenAssemblies
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenAssemblies}>
              {FleetDataAssembly.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} style={{marginLeft: '20px'}}/>
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Evaluations')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdRateReview className={bem.e('nav-item-icon')} />
                  <span className="align-self-start text-uppercase">
                    Sustainability Evalution
                  </span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenEvaluations
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenEvaluations}>
              {SustainabilityEvalution.map(
                ({ to, name, exact, Icon }, index) => (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}
                    >
                      <Icon className={bem.e('nav-item-icon')} style={{marginLeft: '20px'}} />
                      <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                ),
              )}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Purchases')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdShoppingCart className={bem.e('nav-item-icon')} />
                  <span className="align-self-start text-uppercase">Purchase Recommendation</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPurchases
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPurchases}>
              {PurchaseRecommendation.map(
                ({ to, name, exact, Icon }, index) => (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}
                    >
                      <Icon className={bem.e('nav-item-icon')} style={{marginLeft: '20px'}}/>
                      <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                ),
              )}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Optimizations')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdInsertChart className={bem.e('nav-item-icon')} size={30}/>
                  <span className="align-self-start text-uppercase">
                    Optimization Visualization
                  </span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenOptimizations
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenOptimizations}>
              {OptimizationVisualization.map(
                ({ to, name, exact, Icon }, index) => (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}     
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}
                    >
                      <Icon className={bem.e('nav-item-icon')} style={{marginLeft: '20px'}}/>
                      <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                ),
              )}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="align-self-start text-uppercase">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} style={{marginLeft: '20px'}}/>
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
