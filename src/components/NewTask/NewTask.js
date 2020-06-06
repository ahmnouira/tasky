import React, { useState } from 'react';
import './NewTask.css';
import getIcon from '../../utils/getIcon';

export default function NewTask({ openClose, handlePost }) {

    const [label, setLabel] = useState('');

    return (
        <div id="modal" className="modal" style={openClose ? { display: 'block' } : { display: 'none' }}>
            <div className="modal-content">
                <div className="modal-body">
                    <p className="modal-text">What do you want to do ?</p>
                    <form className="form">
                        <input className="modal-input" type="text" value={label} placeholder="do something..." onChange={(e) => setLabel(e.target.value)} />
                    </form>
                    <button type="submit" className="modal-btn" onClick={() => {
                        setLabel('');
                        handlePost(label);
                    }
                    }>
                        <img className="icon icon-send" src={getIcon('plus')} alt="" />
                        <span className="btn-send">I’ll do it</span>
                    </button>
                </div>
            </div>
        </div >
    );

}