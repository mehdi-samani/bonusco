import React from 'react'

 const ModalExit = (props) => {
    return (
        <div className="modal-main">
            <div className="child-modal">
                <span className="close-modal-btn"  onClick={props.close}>x</span>
                {props.children}
              
            </div>
        </div>
    )
}
export default ModalExit
