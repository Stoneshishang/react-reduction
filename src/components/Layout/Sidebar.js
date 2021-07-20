import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React, { useContext } from 'react';
import SidebarItems from './SidebarItems';
import { Context } from '../../ContextState';
import {
  MdHome,
  MdRateReview,
  MdCheckBox,
  MdChromeReaderMode,
  MdInsertChart,
} from 'react-icons/md';

import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink as BSNavLink } from 'reactstrap';
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
  {
    to: '/ReviewEpaMatches',
    name: 'Review Epa Matches',
    exact: false,
    Icon: MdChromeReaderMode,
  },
];

const SustainabilityEvalution = [
  {
    to: '/SelectBestEPAMatch',
    name: 'Select Best EPA Match',
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
    to: '/SelectCandidateReplacement',
    name: 'Select Candidate Replacement',
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

const PrepareForOptimization = [
  {
    to: '/PrepareForOptimization',
    name: 'Prepare For Optimization',
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

const navItems = [{ to: '/', name: 'home', exact: true, Icon: MdHome }];

const bem = bn.create('sidebar');

const Sidebar = () => {
  const { isOpenAssemblies, setIsOpenAssemblies } = useContext(Context);
  const { isOpenEvaluation, setIsOpenEvaluation } = useContext(Context);
  const { isOpenRecommendation, setIsOpenRecommendation } = useContext(Context);
  const { isOpenOptimization, setIsOpenOptimization } = useContext(Context);

  const handleClickAssembly = () => {
    setIsOpenAssemblies(prevIsOpenAssemblies => !prevIsOpenAssemblies);
  };

  const handleClickEvalution = () => {
    setIsOpenEvaluation(prevIsOpenEvaluation => !prevIsOpenEvaluation);
  };

  const handleClickRecommandation = () => {
    setIsOpenRecommendation(
      prevIsOpenRecommendation => !prevIsOpenRecommendation,
    );
  };
  console.log('++++++++++++++++++isOpenEvaluation++++++++++++++++++');
  console.log(isOpenEvaluation);

  console.log('===============isOpenRecommendation=====================');
  console.log(isOpenRecommendation);

  const handleClickOptimization = () => {
    setIsOpenOptimization(prevIsOpenOptimization => !prevIsOpenOptimization);
  };

  // const handleClick = name => () => {
  //   this.setState(prevState => {
  //     const isOpen = prevState[`isOpen${name}`];

  //     return {
  //       [`isOpen${name}`]: !isOpen,
  //     };
  //   });
  // };

  return (
    <aside className={bem.b()} data-image={sidebarBgImage}>
      <div className={bem.e('background')} style={sidebarBackground} />
      <div className={bem.e('content')}>
        <Navbar>
          <SourceLink>
            <span className="text-white" style={{ fontSize: '1.4rem' }}>
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

          <SidebarItems
            handleClick={handleClickAssembly}
            isOpenState={isOpenAssemblies}
            moduleName={FleetDataAssembly}
            categoryTitle={'Fleet Data Assembly'}
          />

          <SidebarItems
            handleClick={handleClickEvalution}
            isOpenState={isOpenEvaluation}
            moduleName={SustainabilityEvalution}
            categoryTitle={'Sustainability Evalution'}
          />

          <SidebarItems
            handleClick={handleClickRecommandation}
            isOpenState={isOpenRecommendation}
            moduleName={PurchaseRecommendation}
            categoryTitle={'Purchase Recommendation'}
          />

          <SidebarItems
            handleClick={handleClickOptimization}
            isOpenState={isOpenOptimization}
            moduleName={PrepareForOptimization}
            categoryTitle={'Optimization Recommendation'}
          />
        </Nav>
      </div>
    </aside>
  );
};

export default Sidebar;
