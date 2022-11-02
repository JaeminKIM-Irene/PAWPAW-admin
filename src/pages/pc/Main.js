import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Main.css';
import LogoL from '../../images/pc/logoL.png';
import Login from '../../images/pc/login.png';
import LoginE from '../../images/pc/loginEng.png'
import InputGroup from 'react-bootstrap/InputGroup'

const Main = () => {
    const [lang, setLang] = useState(1);
    const [box, setBox] = useState(false);


    const boxC = (e) => {
        e.target.checked ? setBox(true) : setBox(false);
    }

    const directTo = () => {
        window.location.pathname = '/notice';
    }
    return (
        <div className='admin_container'>
            <img src={LogoL} alt='' className='logoL' />
            {lang? (
                <div className='admin_container2' style={{fontFamily:'gmarketSans'}}>
                    <div className='admin_welcome'>파우파우</div>
                    <div className='admin_welcome'>관리자 페이지</div>
                    <div className='admin_container3'>
                        <div className='login_input'>이메일 주소</div>
                        <input type="text" className='login_inputbox' />
                        <div className='login_input'>비밀번호</div>
                        <input type="text" className='login_inputbox' />
                        <div className='admin_container4'>
                            <InputGroup.Checkbox id='login_check' onChange={boxC} className='accountCheck' />
                            <label className='login_checklab' for='remember' >로그인 정보 기억하기</label>
                            <div className='findPass'>비밀번호 찾기</div>
                        </div>
                        <NavLink to={'/notice'}>
                            <img src={Login} alt='' className='login'/>
                        </NavLink>
                        
                        
                    </div>
                    
                </div>
            )
            :(
                <div className='admin_container2' style={{fontFamily:'Lexend'}}>
                    <div className='admin_welcomeEng' style={{fontFamily:'LexendB'}}>Welcome,</div>
                    <div className='admin_welcomeEng2' style={{fontFamily:'LexendB'}}>this is admin page</div>
                    <div className='admin_container3'>
                        <div className='login_input'>Email address</div>
                        <input type="text" className='login_inputbox' style={{borderRadius:'8px'}}/>
                        <div className='login_input' >Password</div>
                        <input type="text" className='login_inputbox' style={{borderRadius:'8px'}}/>
                        <div className='admin_container4'>
                            <input type="checkbox" className='login_check' id='remember' onChange={boxC}/>
                            <label className='login_checklab' for='remember' >Remember me</label>
                            <div className='findPassEng' style={{fontFamily:'LexendB'}}>Forgot password?</div>
                        </div>
                        <img src={LoginE} alt='' className='login' onClick={directTo}/>
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default Main;