import React, {useState} from 'react';
import './Notice.css';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Modal from '../../component/Modal'

import NoticeLine from '../../images/pc/noticeLine.png'
import Arrow from '../../images/pc/arrow.png'
import Delete from '../../images/pc/delete.png'
import Edit from '../../images/pc/edit.png'
import Edit2 from '../../images/pc/edit2.png'
import Cancel from '../../images/pc/cancel.png'
import Upload from '../../images/pc/upload.png'

const Notice = () => {
    const [open, setOpen] = useState([false,false,false]);
    const [modalOpen, setModalOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [effect, setEffect] = useState('appear')
    const [effect2, setEffect2] = useState('turn')
    const [noticeId, setNoticeid] = useState(0);

    const [noticeTem, setNoticeTem] = useState({
        id : 4,
        title: '',
        content: '',
    })

    const [notices, setNotices] = useState([
        {
            id: 1,
            title: '[2022 펫페어 아시아] 코로나 관련 방역지침 공지사항',
            content: '코로나19 관련하여 지난 8월 3일 중앙재난안전대책본부 생활 속 거리두기 세부지침을 발표하였습니다.\n2020 펫페어 아시아는 전시산업진흥회에서 발표한 전시회 개최 방역관리 가이드라인을 참고하여 펫페어 아시아의 코로나 관련 방역지침 안내사항을 알려드립니다.\n\n· 발열 또는 호흡기 증상(기침, 인후통 등)이 있거나 최근 14일이내 해외여행을 한 경우 전시회 방문을 자제해주세요.\n· 다른 참가자와 2m (최소 1m) 이상 거리 두기를 유지하세요.\n· 흐르는 물과 비누로 30초 이상 손을 씻거나 손 소독제로 손 소독해주세요.\n· 기침이나 재채기를 할 때는 휴지, 옷소매로 입과 코를 가려주세요.\n· 침방울이 튀는 행위(노래부리기, 소리지르기 등)나 신체접촉(악수, 포옹 등)을 자제해주세요.\n· 전시회장 내에서는 꼭 마스크 착용을 유지해주세요.\n\n우리 모두 코로나19 방역을 위해 위의 방역지침 사항을 참고하여 안전하고 건강한 전시를 합시다. 감사합니다.',
        },
        {
            id: 2,
            title: '[2022 펫페어 아시아] 전시장 촬영 관련 안내',
            content: '[ 언론사 전시장 출입 및 활영 안내 ]\n사전에 촬영 협조 공문을 발송하지 않은 경우, 전시장 장 내 입장을 비롯하여 사진 및 영상 촬영, 공식 인터뷰는 불가합니다. 사전 촬영 협의가 완료된 프레스에 한하여, \'PRESS\' 네임택이 발급되며 전시장 출입이 가능합니다.\n\n\n[ 개인방송 크리에이터 전시장 촬영 안내 ]\n사전에 촬영 협조 내용의 \'메일\'을 발송하지 않은 경우, 사진 및 영상 촬영, 라이브 방송 등이 불가합니다.\n크리에이터 대상 별도의 네임택은 지급되지 않습니다. 촬영한 사진 및 영상을 편집하여 개인 채널에 업로드 시, 타인의 초상권을 반드시 보호해야 합니다. (얼굴 흐림효과 처리 등)\n\n상기 원칙을 준수하지 않은 경우, 사무국은 사진 / 영상 삭제를 요구할 수 있습니다.',
        },
        {
            id: 3,
            title: '[제 1회 집사 대첩] 참가자 안내사항 필독',
            content: '안녕하세요. 파우파우 사무국입니다.\n\n제 1회 냥집사 대첩 본선에 진출하시게 된 여러분들꼐 다시 한 번 축하의 말씀을 드립니다. 이번 경연대회 진행에 앞서 꼭 확인이 필요한 내용들을 다음과 같이 전달 드리니, 대회 참가 전 필수 확인 부탁 드립니다.\n부득이하게 반려동물과 대회에 동반하시는 경우 아래 사항을 꼭 확인하시어 방문 부탁드립니다!!!\n\n(1) 반려동물 하네스 및 목줄 착용 필수\n(2) 개인 조리대 및 공간: 테이블 폭 80cm / 높이 75cm -> 해당 공간에 캔넬 또는 방석을 두고 진행 가능합니다.\n(3) 유모차 지참 시 대회장 여유공간에 잠시 보관하여 행사 종료 후 찾아가시길 바랍니다.\n*요리대회는 뜨거운 육수 또는 칼과 같은 위험한 사고가 발생할 수 있으므로, 되도록 다른 보호자와 함께 동반하거나 동반하시지 않는 것을 권장드립니다.\n*요리대회 현장에서 반려동물에게 발생하는 사고에 있어서는 반려인, 참가자 본인에게 있습니다.',
        }
    ])

    const detailShow = (e) => {
        setOpen(prevState=> prevState.map((item, idx) => idx+1 === e.id? !item: item))
    }

    const loadNotice = (e) => {
        setNoticeTem((prevState) => {
            return {...prevState, id: e.id, title: e.title, content: e.content}
        });
        setEdit(true)
    }

    const noticeAdd = () => {
        if (noticeTem.title.length >=1 && noticeTem.content.length >= 1){
            setOpen([...open, false]);
            setNoticeTem((prevState) => {return {...prevState, id: open.length+2}})
            setNotices([...notices, noticeTem]);
        }
        else {
            alert('필수 입력 요소를 모두 입력해주세요.')
        }
        
    }

    const inputChange = (e) => {
        setNoticeTem((prevState) => {
            const {name, value} = e.target;
            return {...prevState, [name]: value}
        })
    }
    
    const noticeSave = () => {
        if (noticeTem.title.length >=1 && noticeTem.content.length >= 1){
            setEdit(edit => !edit)
            var newState = notices.map(notice => {
                if (notice.id === noticeTem.id) {
                    return {...notice, id: noticeTem.id, title: noticeTem.title, content: noticeTem.content}
                }
                return notice
            })
            setNotices(newState);
            setNoticeTem((prevState) => {
                return {...prevState, id: 4, title: '', content: ''}
            })
        }
        else {
            alert('필수 입력 요소를 모두 입력해주세요.')
        }
    }

    const noticeDelete = (e) => {
        setNotices(notices.filter(notice => notice.id !== Number(e.target.id)))
        setModalOpen(false);
    }

    const noticeCancel = () => {
        setEdit(false)
        setNoticeTem((prevState) => {
            return {...prevState, id: 0, title: '', content: ''}
        })
    }

    const openModal = (e) => {
        setNoticeid(e.id)
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <Header />
            <div style={{display:'flex'}}>
                <div className='noticeContent'>
                    <div className='notice'>등록된 공지사항</div>
                    <img src={NoticeLine} alt='' className='noticeLine'/>
                    <div className='noticeTabs'>
                        <div className='noticeRecent'>최신 등록순</div>
                        <div className='noticeNo'>총 게시물 {notices.length} 개</div>
                    </div>
                    <table className='noticeTable'>
                        <tr >
                            <th colSpan='2'>제목</th>
                            <th></th>
                        </tr>
                        {notices.map((notice)=>(
                            <>
                                <tr onClick={()=>detailShow(notice)} style={{borderBottom:'1px solid black'}}>
                                    <td className='noticeTitle' name='title' >{notice.title}</td>
                                    
                                    <td>
                                        {open[notice.id-1]? (
                                            <img src={Arrow} alt="" className={`box-wrap ${effect2}`}/>
                                        ):(
                                            <img src={Arrow} alt="" className='detailArrow'/>
                                        )}
                                        </td>
                                </tr>
                                { open[notice.id-1]? (
                                <tr className={`box-wrap ${effect}`} onClick={()=>detailShow(notice)}>
                                    <td colSpan='2' >
                                        <div >
                                            <div className='noticeDetail' onClick={()=>detailShow(notice)}>
                                                {notice.content.split('\n').map((txt)=> (
                                                    <>
                                                    {txt}
                                                    <br />
                                                    </>
                                                ))}
                                            </div>
                                            <div className='noticeBut'>
                                                <img src={Delete} alt="" className='noticeDel' onClick={()=>openModal(notice)}/>
                                                <img src={Edit} alt="" className='noticeEd' onClick={()=>loadNotice(notice)}/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                )
                                :(<></>)}
                            </>
                        ))}
                        
                        <Modal open={modalOpen} close={closeModal} id={noticeId} del={noticeDelete}>
                            해당 공지를 삭제하시겠습니까?
                        </Modal>
                        
                    </table>
                </div>
                <div className='noticeContent2'>
                    {edit? (<div className='notice'>공지사항 수정하기</div>) : (<div className='notice'>공지사항 등록하기</div>)}
                    <img src={NoticeLine} alt='' className='noticeLine2'/>
                    <div className='noticeTabs'>
                        <div className='noticeinfo'>좌측의 리스트에서 등록된 공지사항 게시글을 확인 및 수정이 가능합니다.</div>
                    </div>
                    <div className='noticeUpT'>제목 *</div>
                    <div className='noticeUpBox'>
                        <input type='text' className='noticeUpInput' placeholder='여기에 공지사항 제목을 입력해주세요.' name='title' value={noticeTem.title} onChange={inputChange} minLength='5'/>
                        <img src={Cancel} alt='' className='noticeCancel' onClick={noticeCancel}/>
                        {edit? <img src={Edit2} alt='' className='noticeUpload' onClick={noticeSave}/>: <img src={Upload} alt='' className='noticeUpload' onClick={noticeAdd}/>}
                    </div>
                    <div className='noticeUpT'>본문 내용 *</div>
                    <textarea placeholder='여기에 공지사항 상세 본문 내용을 입력해주세요.' className='noticeUpInput2' name='content' value={noticeTem.content} onChange={inputChange}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Notice;