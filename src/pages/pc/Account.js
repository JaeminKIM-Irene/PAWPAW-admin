import React, {useState} from 'react';
import './Account.css'
import InputGroup from 'react-bootstrap/InputGroup'

import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Modal from '../../component/Modal'

import NoticeLine from '../../images/pc/noticeLine.png'
import Setting from '../../images/pc/setting.png'
import Trash from '../../images/pc/trash.png'
import Edit from '../../images/pc/edit2.png'
import Cancel from '../../images/pc/cancel.png'
import Upload from '../../images/pc/upload.png'

const Account = () => {
    const [edit, setEdit] = useState(false);
    const [auth, setAuth] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [accountId, setAccountid] = useState(0);

    const [temaccount, setTemaccount] = useState({
        id: 0,
        auth: false,
        name: '',
        email: '',
        password: '',
        phonenum: '',

    })

    //auth:false => 권한 없음. auth:true => 권한있음
    const [accounts, setAccounts] = useState([
        {
            id: 1,
            auth: true,
            name: '이소라',
            email: 'info@apawpaw.com',
            password: 'pawpaw',
            phonenum: '01012345678',
        },
        {
            id: 2,
            auth: true,
            name: '장지현',
            email: 'jihyeon@apawpaw.com',
            password: 'pawpaw',
            phonenum: '01012345678',
        },
        {
            id: 3,
            auth: false,
            name: '신해은',
            email: 'haeun@apawpaw.com',
            password: 'pawpaw',
            phonenum: '01012345678',
        }
    ])

    const loadAccount = (e) => {
        setTemaccount((prevState) => {
            return {...prevState, id: e.id, auth: e.auth, name: e.name, email: e.email, password: e.password, phonenum: e.phonenum}
        });
        setEdit(true)
    }

    const inputChange = (e) => {
        setTemaccount((prevState) => {
            const {name, value} = e.target;
            return {...prevState, [name]: value}
        })
    }

    const accountAdd = () => {
        if (temaccount.name.length >=1 && temaccount.email.length >=1 && temaccount.password.length >=1 && temaccount.phonenum.length >=1){
            var newState = [...accounts, temaccount]

            setAccounts(newState);
        }
        else {
            alert('필수 입력 요소를 모두 입력해주세요.')
        }
    }

    const accountSave = () => {
        if (temaccount.name.length >=1 && temaccount.email.length >=1 && temaccount.password.length >=1 && temaccount.phonenum.length >=1){
            setEdit(edit => !edit)
            var newState = accounts.map(acc => {
                if (acc.id === temaccount.id) {
                    return {...acc, id: temaccount.id, auth: temaccount.auth, name: temaccount.name, email: temaccount.email, password: temaccount.password, phonenum: temaccount.phonenum}
                }
                return acc
            })
            setAccounts(newState);
            setTemaccount((prevState) => {
                return {...prevState, id: 0, auth: false, name: '', email: '', password: '', phonenum: '',}
            })
        }
        else {
            alert('필수 입력 요소를 모두 입력해주세요.')
        }
    }

    const accountCancel = () => {
        setEdit(false)
        setTemaccount((prevState) => {
            return {...prevState, id: 0, auth: false, name: '', email: '', password: '', phonenum: '',}
        })
    }

    const accountDelete = (e) => {
        setAccounts(accounts.filter(account => account.id !== Number(e.target.id)))
        setModalOpen(false);
    }

    const authChange = () => {
        setAuth(auth=>!auth);
        setTemaccount((prevState) => {
            return {...prevState, auth: auth}
        })
    }

    const openModal = (e) => {
        setAccountid(e.id)
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <div>
            <Header/>
            <div style={{display:'flex'}}>
                <div className='accountContent'>
                    <div className='notice'>등록된 직원</div>
                    <img src={NoticeLine} alt='' className='noticeLine'/>
                    <div className='noticeTabs'>
                        <div className='noticeRecent'>계정 이름순</div>
                        <div className='noticeNo'>총 계정 {accounts.length} 개</div>
                    </div>
                    {accounts.map((account) => (
                        <div className='accountList'>
                            <div className='accountD'>
                                <div style={{display:'flex', marginBottom:'1.1vw'}}>
                                    <div className='accountDT'>관리자</div>
                                    <div className='accountDC'>{account.name}</div>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div className='accountDT'>이메일</div>
                                    <div className='accountDC'>{account.email}</div>
                                </div>
                            </div>
                            <div className='accountB'>
                                <img src={Trash} className='accountTrash' alt='' onClick={()=>openModal(account)}/>
                                <img src={Setting} className='accountSet' alt='' onClick={()=>loadAccount(account)}/>
                            </div>
                        </div>
                    ))}
                    <Modal open={modalOpen} close={closeModal} id={accountId} del={accountDelete}>
                        선택한 직원을 삭제하시겠습니까?
                    </Modal>
                </div>
                <div className='accountContent2'>
                    {edit? (<div className='notice'>직원정보 수정하기</div>) : (<div className='notice'>직원정보 등록하기</div>)}
                    <img src={NoticeLine} alt='' className='accountLine'/>
                    <div className='noticeTabs'>
                        <div className='noticeinfo'>오직 관리자 권한이 있는 직원만 관리자 계정 페이지를 열람, 등록 및 수정이 가능하오니 관리자 권한을 신중하게 체크해주세요.</div>
                    </div>
                    <div className='accountEditB'>
                        <InputGroup.Checkbox id='authorize' onChange={authChange} className='accountCheck' name='id' checked={temaccount.auth}/>
                        <label for='authroize' className='accountCheckLab'>해당 직원에게 관리자 권한을 주려면 체크해주세요.</label>
                        {edit? <img src={Edit} alt='' className='accountUpload' onClick={accountSave}/>: <img src={Upload} alt='' className='accountUpload' onClick={accountAdd}/>}
                        <img src={Cancel} alt='' className='accountCancel' onClick={accountCancel}/>
                    </div>
                    <div className='noticeUpT'>직원 이름 *</div>
                    <input type='text' className='accountInput' placeholder='이름을 입력해주세요.' name='name' value={temaccount.name} onChange={inputChange} minlength='2'/>
                    <div className='noticeUpT'>이메일 주소 *</div>
                    <input type='text' className='accountInput' placeholder='직원의 이메일 주소를 입력해주세요.' name='email' value={temaccount.email} onChange={inputChange}/>
                    <div className='noticeUpT'>비밀번호 *</div>
                    <input type='text' className='accountInput' placeholder='로그인 시 사용할 비밀번호를 입력해주세요.' name='password' value={temaccount.password} onChange={inputChange}/>
                    <div className='noticeUpT'>휴대폰 번호 *</div>
                    <input type='text' className='accountInput' placeholder='비상 연락처로 사용될 휴대폰 번호를 입력해주세요.' name='phonenum' value={temaccount.phonenum} onChange={inputChange}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Account;