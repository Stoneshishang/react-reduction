import React, { useContext } from 'react';
import { MdExtension, MdKeyboardArrowDown } from 'react-icons/md';
import { Context } from '../../ContextState';
import { NavLink } from 'react-router-dom';
import { Collapse, NavItem, NavLink as BSNavLink } from 'reactstrap';
import bn from 'utils/bemnames';
const bem = bn.create('sidebar');

const SidebarItems = ({
  handleClick,
  isOpenState,
  moduleName,
  categoryTitle,
}) => {
  const { currentURL } = useContext(Context);
  const isUrlSame = (currentURL, Modules) => {
    return Modules.some(module => module.to === currentURL);
  };

  return (
    <React.Fragment>
      <NavItem className={bem.e('nav-item')} onClick={handleClick}>
        <BSNavLink className={bem.e('nav-item-collapse')}>
          <div className="d-flex">
            <MdExtension className={bem.e('nav-item-icon')} />
            <span className=" align-self-start text-uppercase">
              {categoryTitle}
            </span>
          </div>
          <MdKeyboardArrowDown
            className={bem.e('nav-item-icon')}
            style={{
              padding: 0,
              transform:
                isOpenState || isUrlSame(currentURL, moduleName)
                  ? 'rotate(0deg)'
                  : 'rotate(-90deg)',
              transitionDuration: '0.3s',
              transitionProperty: 'transform',
            }}
          />
        </BSNavLink>
      </NavItem>
      <Collapse isOpen={isOpenState || isUrlSame(currentURL, moduleName)}>
        {moduleName.map(({ to, name, exact, Icon }, index) => (
          <NavItem key={index} className={bem.e('nav-item')}>
            <BSNavLink
              id={`navItem-${name}-${index}`}
              tag={NavLink}
              to={to}
              activeClassName="active"
              exact={exact}
            >
              <Icon
                className={bem.e('nav-item-icon')}
                style={{ marginLeft: '20px' }}
              />
              <span className="">{name}</span>
            </BSNavLink>
          </NavItem>
        ))}
      </Collapse>
    </React.Fragment>
  );
};

export default SidebarItems;
