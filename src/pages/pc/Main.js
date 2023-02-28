import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Main.css';
import LogoL from '../../images/pc/logoL.png';
import Login from '../../images/pc/login.png';
import LoginE from '../../images/pc/loginEng.png'
import InputGroup from 'react-bootstrap/InputGroup'

const Main = () => {
    const [box, setBox] = useState(false);
    const [login, setLogin] = useState({
            email: "",
            password: ""
        });
    const loginInfo = [
        {
            email: 'ative@ative.co.kr',
            password: '1234'
        },
        {
            email: 'ative@ative.co.kr',
            password: '1234'
        },
    ]

    const boxC = (e) => {
        e.target.checked ? setBox(true) : setBox(false);
    }

    const inputChange = (e) => {
        setLogin((prevState) => {
            const {name, value} = e.target;
            return {...prevState, [name]: String(value)}
        })
    }

    const loginDirect = () => {
        var found = loginInfo.find(obj => {
            return obj.email == login.email && obj.password == login.password
        })
        if (found != undefined) {
            window.location.pathname = '/notice';
        }
        else {
            alert("이메일: ative@ative.co.kr, 비밀번호:1234 를 입력해주세요.")
        }
    }
    return (
        <div className='admin_container'>
            <img src={LogoL} alt='' className='logoL' />
            <div className='admin_container2' style={{fontFamily:'gmarketSans'}}>
                <div className='admin_welcome'>파우파우</div>
                <div className='admin_welcome'>관리자 페이지</div>
                <div className='admin_container3'>
                    <div className='login_input' >이메일 주소</div>
                    <input type="text" className='login_inputbox' name='email' value={login.email} onChange={inputChange}/>
                    <div className='login_input'>비밀번호</div>
                    <input type="text" className='login_inputbox' name='password' value={login.password} onChange={inputChange} />
                    <div className='admin_container4'>
                        <InputGroup.Checkbox id='login_check' onChange={boxC} className='accountCheck' />
                        <label className='login_checklab' for='remember' >로그인 정보 기억하기</label>
                    </div>
                    <img src={Login} alt='' className='login' onClick={loginDirect}/>
                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default Main;