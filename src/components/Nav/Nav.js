import React from 'react'
import pure from 'recompose/pure';
import { Overlay } from './../../components';
import classNames from 'classnames';
const routePage = require('./../../route');
import Link from 'gatsby-link';

const Nav = pure(({ visible, activePage, onHandleChange }) => {
    return (
        <nav id="menu" className={classNames({ visible: visible })}>
            <Overlay visible={visible}>
                <div onClick={onHandleChange('menuVisible', false)} className="overlayContent"></div>
            </Overlay>
            <ul className="links">
                {Object.keys(routePage).length
                    ? Object.keys(routePage).map((pageTitle) =>
                        <li key={`pageList_${pageTitle}`} className={classNames({ active: activePage === `/${routePage[pageTitle]}` })} onClick={(e)=>{onHandleChange('menuVisible', false)(e)}}>
                            <Link to={`/${routePage[pageTitle]}`} >{pageTitle}</Link>
                        </li>)
                    : null}
            </ul>
        </nav>
    );
});

export default Nav;