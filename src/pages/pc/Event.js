import React, {useState} from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import './Event.css'
import '../../component/datepick.css';
import DatePicker from 'react-datepicker'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Modal from '../../component/Modal'

import NoticeLine from '../../images/pc/noticeLine.png'
import Cancel from '../../images/pc/cancel.png'
import Upload from '../../images/pc/upload.png'
import Edit from '../../images/pc/edit2.png'
import EventMap from '../../images/pc/eventMap.png'
import ImageUpload from '../../images/pc/imageUpload.png'
import ImageUpload2 from '../../images/pc/imageUpload2.png'
import Setting from '../../images/pc/setting.png'
import Trash from '../../images/pc/trash.png'

const Event = () => {
    const [poster, setPoster] = useState(ImageUpload);
    const [poster2, setPoster2] = useState(ImageUpload2);
    const [edit, setEdit] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [eventId, setEventid] = useState(0);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [temevent, setTemevent] = useState({
        id: 0,
        name: '',
        url: '',
        place: '',
        search: '',
        duration: [null, null],
        time: '',
        size: '',
        company1: '',
        company2: '',
        detail: '',
        poster1: './images/imageUpload.png',
        poster1N: '첨부파일명',
        poster2: './images/imageUpload2.png',
        poster2N: '첨부파일명',
    })

    const [events, setEvents] = useState([
        {
            id: 1,
            name: '2022 MEGA ZOO (메가주)',
            url: 'https://k-pet.co.kr/22pet_k2/',
            place: '킨텍스 제 1 전시장 2, 3홀',
            search: '경기 고양시 일산서구 킨텍스로 217-60',
            duration: [new Date(2022,10,18), new Date(2022,10,20)],
            time: '10AM - 6PM (입장마감 5:30PM)',
            size: '',
            company1: '한국펫사료협회',
            company2: '메쎄이상',
            detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
            poster1: './images/poster1.png',
            poster1N: 'poster1.png',
            poster2: './images/poster1L.png',
            poster2N: 'poster1L.png',
        },
        {
            id: 2,
            name: '2022 케이펫페어 일산',
            url: 'https://k-pet.co.kr/22pet_k2/',
            place: '킨텍스 제 1 전시장 2, 3홀',
            search: '경기 고양시 일산서구 킨텍스로 217-60',
            duration: [new Date(2022,10,18), new Date(2022,10,20)],
            time: '10AM - 6PM (입장마감 5:30PM)',
            size: '',
            company1: '한국펫사료협회',
            company2: '메쎄이상',
            detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
            poster1: './images/poster2.png',
            poster1N: 'poster2.png',
            poster2: './images/poster2L.png',
            poster2N: 'poster2L.png',
        },
        {
            id: 3,
            name: '2022 궁디팡팡 캣 페스타',
            url: 'https://k-pet.co.kr/22pet_k2/',
            place: '킨텍스 제 1 전시장 2, 3홀',
            search: '경기 고양시 일산서구 킨텍스로 217-60',
            duration: [new Date(2022,10,18), new Date(2022,10,20)],
            time: '10AM - 6PM (입장마감 5:30PM)',
            size: '',
            company1: '한국펫사료협회',
            company2: '메쎄이상',
            detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
            poster1: './images/poster3.png',
            poster1N: 'poster3.png',
            poster2: './images/poster3L.png',
            poster2N: 'poster3L.png',
        },
        {
            id: 4,
            name: '2022 크리스마스 서울 펫 쇼',
            url: 'https://k-pet.co.kr/22pet_k2/',
            place: '킨텍스 제 1 전시장 2, 3홀',
            search: '경기 고양시 일산서구 킨텍스로 217-60',
            duration: [new Date(2022,10,18), new Date(2022,10,20)],
            time: '10AM - 6PM (입장마감 5:30PM)',
            size: '',
            company1: '한국펫사료협회',
            company2: '메쎄이상',
            detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
            poster1: './images/poster4.png',
            poster1N: 'poster4.png',
            poster2: './images/imageUpload2.png',
            poster2N: '첨부파일명',
        },
        {
            id: 5,
            name: '2021 서울 펫 쇼',
            url: 'https://k-pet.co.kr/22pet_k2/',
            place: '킨텍스 제 1 전시장 2, 3홀',
            search: '경기 고양시 일산서구 킨텍스로 217-60',
            duration: [new Date(2022,10,18), new Date(2022,10,20)],
            time: '10AM - 6PM (입장마감 5:30PM)',
            size: '',
            company1: '한국펫사료협회',
            company2: '메쎄이상',
            detail: '[참관 안내]\n- 케이펫페어 입장권은 날짜가 지정되어 있지 않습니다. 전시기간 중 원하시는 날짜에 방문하시면 됩니다.\n- 입장바코드를 지참하시어, 전시장 \'사전등록대\'에 방문하시면 바코드를 \'입장팔찌\'로 교환해드립니다.\n- 입장바코드는 행사 당일 쭈쭈쭈App 내에서 확인할 수 있습니다. (가낳지모 캣페어는 가낳지모 APP 내에서 확인)\n\n\n[사전등록 예매 취소 시 유의사항]\n★취소 기한: 2022. 11. 17(목) 23시 59분\n1. 취소/환불 규정 미숙지로 인한 불이익은 등록자에게 있음.\n2. 기한 내에는 등록자 본인이 직접 로그인 후 취소/환불 처리할 수 있음.\n3. 고지된 기한 내에만 처리가 가능하며, 기한 이후는 취소/환불 일체 불가.\n4. 취소 수수료 및 환불 처리 안내\n5. 자세한 문의는 사무국으로 문의 주시기 바랍니다. (02-6121-6247)',
            poster1: './images/poster5.png',
            poster1N: 'poster5.png',
            poster2: './images/poster5L.png',
            poster2N: 'poster5L.png',
        },
        
])

    const imageHandler = (e) => {
        const reader = new FileReader();
        setTemevent((prevState) => {
            return{...prevState, poster1: 'images/' + e.target.files[0].name,poster1N:e.target.files[0].name}})
        reader.onload = () => {
            if(reader.readyState === 2) {
                setPoster(reader.result)
            }
        }
        setUploaded(true);
        reader.readAsDataURL(e.target.files[0])
    }

    const imageHandler2 = (e) => {
        const reader = new FileReader();
        setTemevent((prevState) => {
            return{...prevState, poster2: 'images/' + e.target.files[0].name, poster2N:e.target.files[0].name}})
        reader.onload = () => {
            if(reader.readyState === 2) {
                setPoster2(reader.result)
            }
        }
        setUploaded(true);
        reader.readAsDataURL(e.target.files[0])
    }

    const loadEvent = (e) => {
        setTemevent((prevState) => {
            return {...prevState, id: e.id, name: e.name, url: e.url, place: e.place, search: e.search, duration: e.duration, time: e.time, size: e.size, company1: e.company1, company2: e.company2, detail: e.detail, poster1: e.poster1, poster1N: e.poster1N, poster2: e.poster2, poster2N: e.poster2N}
        });
        setDateRange(e.duration)
        setEdit(true)
    } 

    const inputChange = (e) => {
        setTemevent((prevState) => {
            const {name, value} = e.target;
            return {...prevState, [name]: value}
        })
    }

    const eventAdd =()=> {
        if (temevent.name.length >=1 && temevent.place.length >= 1 && temevent.search.length >= 1 &&  temevent.duration.length >= 1 && temevent.company1.length >= 1 && temevent.company2.length >= 1){
            var newState = [...events, temevent]

            setEvents(newState);
            setTemevent((prevState) => {
                return {...prevState, id: 0, name: '', url: '', place: '', search: '', duration: '', time: '', size: '', company1: '', company2: '', detail:'', poster1: 'images/imageUpload.png', poster1N: '첨부파일명', poster2: 'images/imageUpload2.png', poster2N: '첨부파일명'}
            });
            setUploaded(false);
        }
        else {
            alert('필수 입력 요소를 모두 입력해주세요.')
        }
    }

    const eventEdit = () => {
        
        console.log(temevent)
        if (temevent.name.length >=1 && temevent.place.length >= 1  && temevent.search.length >= 1 &&  temevent.duration.length >= 1 && temevent.company1.length >= 1 && temevent.company2.length >= 1){
            setEdit(edit => !edit)
            var newState = events.map(event => {
                if (event.id === temevent.id) {
                    return {...event, id: temevent.id, name: temevent.name, url: temevent.url, place: temevent.place, search: temevent.search, duration: temevent.duration, time: temevent.time, size: temevent.size, company1: temevent.company1, company2: temevent.company2, detail: temevent.detail, poster1: temevent.poster1, poster1N: temevent.poster1N, poster2: temevent.poster2, poster2N: temevent.poster2N}
                }
                return event
            })
            setEvents(newState);
            setTemevent((prevState) => {
                return {...prevState, id: 0, name: '', url: '', place: '', search: '', duration: '', time: '', size: '', company1: '', company2: '', detail:'', poster1: 'images/imageUpload.png', poster1N: '첨부파일명', poster2: 'images/imageUpload2.png', poster2N: '첨부파일명'}
            })
            setUploaded(false);
        }
        else {
            alert('필수 입력 요소를 모두 입력해주세요.')
        }
    }

    const eventDelete = (e) => {
        setEvents(events.filter(event => event.id !== Number(e.target.id)))
        setUploaded(false);
        setModalOpen(false);
    }

    const eventCancel = () => {
        setTemevent((prevState) => {
            return {...prevState, id: 0, name: '', url: '', place: '', search: '', duration: '', time: '', size: '', company1: '', company2: '', detail:'', poster1: 'images/imageUpload.png', poster1N: '첨부파일명', poster2: 'images/imageUpload2.png', poster2N: '첨부파일명'}
        });
        setEdit(false);
        setUploaded(false);
        console.log(typeof dateRange)
    }

    const openModal = (e) => {
        setEventid(e.id)
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const popupOpen = useDaumPostcodePopup(postcodeScriptUrl)

    const handleComplete = (data) => {
        let fullAddress = data.address;

        setTemevent((prevState) => {
            return {...prevState, search: fullAddress}
        })
    }

    const daumPostHandler = () => {
        popupOpen({onComplete: handleComplete})
    };

    return (
        <div>
            <Header/>
            <div style={{display:'flex', width: '100%'}}>
                <div className='eventContent'>
                    <div className='notice'>등록된 이벤트</div>
                    <img src={NoticeLine} alt='' className='noticeLine'/>
                    <div className='noticeTabs'>
                        <div className='noticeRecent'>최신 등록순</div>
                        <div className='noticeNo'>총 게시물 {events.length} 개</div>
                    </div>
                    <div style={{width:'98%', height:'50vw'}}>
                        {events.map((event) => (
                            <div className='eventList' key={event.id}>
                                <img src={event.poster1} alt="" className='eventPoster' />
                                <div className='eventListD'>
                                    <div className='eventName'>{event.name}</div>
                                    <img src={Trash} alt="" className='eventTrash' onClick={()=>openModal(event)}/>
                                    <img src={Setting} alt="" className='eventSetting' onClick={()=>loadEvent(event)}/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Modal open={modalOpen} close={closeModal} id={eventId} del={eventDelete}>
                        선택된 이벤트를 삭제하시겠습니까?
                    </Modal>
                </div>
                <div className='eventContent2'>
                    {edit?<div className='notice'>이벤트 수정하기</div> :<div className='notice'>이벤트 등록하기</div>}
                    <img src={NoticeLine} alt='' className='noticeLine'/>
                    <div className='noticeTabs'>
                        <div className='noticeinfo'>이벤트 썸네일 업로드시에는 정시각형의 사이즈로 업로드 해주세요.</div>
                    </div>
                    <div className='eventUpT'>이벤트명 *</div>
                    <div className='eventUpBox'>
                        <input type='text' className='eventUpInput' placeholder='이벤트 명을 입력해주세요.' value={temevent.name} name='name' onChange={inputChange}/>
                        <img src={Cancel} alt='' className='eventCancel' onClick={eventCancel}/>
                        {edit? <img src={Edit} alt='' className='eventUpload' onClick={eventEdit}/> : <img src={Upload} alt='' className='eventUpload' onClick={eventAdd}/>}
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='eventContent3'>
                            <div className='eventUpT'>홈페이지 URL</div>
                            <div className='eventUpBox'>
                                <input type='text' className='eventUpInput1' placeholder='여기에 이벤트 홈페이지 링크를 입력해주세요.' value={temevent.url} name='url' onChange={inputChange}/>
                            </div>
                            
                            <div >
                                <div className='eventContent5'>
                                    <div className='eventUpT'>장소명 *</div>
                                    <div className='eventUpBox'>
                                        <input type='text' className='eventUpInput2' placeholder='베뉴 이름을 입력해주세요.' value={temevent.place} name='place' onChange={inputChange}/>
                                    </div>
                                </div>
                                <div className='eventContent5' style={{marginLeft:'1.2vw'}}>
                                    <div className='eventUpT'>이벤트 베뉴 도로명 주소 *</div>
                                    <img src={EventMap} alt="" className='eventMap' name='search' onClick={daumPostHandler}/>
                                </div>
                                
                                <div className='eventContent5'>
                                    <div className='eventUpT'>기간 *</div>
                                    <DatePicker 
                                        selectsRange={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                        dateFormat='yyyy.MM.dd'
                                        onChange={(update) => {setDateRange(update);}}
                                        className='datepickerCss'
                                        name='duration'
                                        placeholderText='여기를 눌러 일정을 입력해주세요'
                                        onKeyDown={(e) => {
                                            e.preventDefault();
                                         }}
                                        />
                                </div>
                                <div className='eventContent5' style={{marginLeft:'1.3vw'}}>
                                    <div className='eventUpT'>시간 *</div>
                                    <div className='eventUpBox'>
                                        <input type='text' className='eventUpInput2' placeholder='(예. 10AM-6PM (입장마감 5:30PM))' value={temevent.time} name='time' onChange={inputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:'12.6vw'}}>
                                <div className='eventUpT'>규모</div>
                                <div className='eventUpBox'>
                                    <input type='text' className='eventUpInput1' placeholder='이벤트의 규모를 입력해주세요.' value={temevent.size} name='size' onChange={inputChange}/>
                                </div>
                            </div>
                            
                            <div className='eventContent5'>
                                <div className='eventUpT'>주최사 *</div>
                                <div className='eventUpBox'>
                                    <input type='text' className='eventUpInput2' placeholder='이벤트 주최사를 입력해주세요.' value={temevent.company1} name='company1' onChange={inputChange}/>
                                </div>
                            </div>
                            <div className='eventContent5' style={{marginLeft:'1.3vw'}}>
                                <div className='eventUpT'>주관사 *</div>
                                <div className='eventUpBox'>
                                    <input type='text' className='eventUpInput2' placeholder='이벤트 주관사를 입력해주세요.' value={temevent.company2} name='company2' onChange={inputChange}/>
                                </div>
                            </div>
                            <div style={{marginTop:'7.3vw'}}>
                                <div className='eventUpT'>이벤트 상세 내용</div>
                                <textarea placeholder='여기에 행사의 상세 내용을 입력해주세요. (예. 입장 안내 및 예매 관련 사항, 전시품목, 참가업체 리스트, 현장 이벤트 등)' className='eventUpInput3' value={temevent.detail} name='detail' onChange={inputChange}/>
                            </div>
                        </div>
                        <div className='eventContent4'>
                            <input type='file' id='poster' accept='image/*' onChange={imageHandler} name='poster1'/>
                            <label htmlFor='poster'>
                                {uploaded? <img src={poster} alt="" className='eventImage'/>:<img src={temevent.poster1} alt="" className='eventImage'/>}
                            </label>
                            <div className='eventUpT2'>{temevent.poster1N}</div>
                            <input type='file' id='poster2' accept='image/*' onChange={imageHandler2} name='poster2'/>
                            <label htmlFor='poster2'>
                                {uploaded? <img src={poster2} alt="" className='eventImage'/>:<img src={temevent.poster2} alt="" className='eventImage'/>}
                            </label>
                            <div className='eventUpT2'>{temevent.poster2N}</div>
                        </div>    
                    </div>
                </div>
                

            </div>
            <Footer/>
        </div>
    );
};

export default Event;