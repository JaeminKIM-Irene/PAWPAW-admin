import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'
import LogoS from '../images/pc/logoS.png'

const Header = () => {
    
    return (
        <div className='headerC'>
            <NavLink to={'/notice'}>
                <img src={LogoS} alt='' className="logoS"/>
            </NavLink>
                <div className='headerC2' style={{fontFamily:'gmarketSans'}}>
                    <div className='navlinks'>
                        <NavLink to={'/notice'} activeClassName="active">
                            <div className='link'>공지사항</div>
                        </NavLink>
                        <NavLink to={'/event'} activeClassName="active">
                            <div className='link'>이벤트</div>
                        </NavLink>
                        <NavLink to={'/account'} activeClassName="active">
                            <div className='link'>관리자 계정</div>
                        </NavLink>
                    </div>
                    <NavLink to={'/'}>
                        <div className='logout'>로그아웃</div>
                    </NavLink>
                </div>
        </div>
    );
};

export default Header;