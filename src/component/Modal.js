import React from 'react';
import './modal.css'
import Delete from '../images/pc/deleteModal.png'
import Cancel from '../images/pc/cancelModal.png'

const Modal = (props) => {

    const {open, close, id, del} = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <main>{props.children}</main>
                    <footer>
                        <img src={Cancel} alt="" className='modalCancel' onClick={close}/>
                        <img src={Delete} alt="" className='modalDelete' id ={id} onClick={del}/>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;