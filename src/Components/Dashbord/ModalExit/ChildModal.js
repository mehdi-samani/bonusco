import React from 'react'

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
 const ChildModal = () => {
    return (
        <div className="child-modal-main">
         <div className="child-select">
             <p>نوع فعالیت امروز را انتخاب کنید</p>
             <select>
                 <option value=""> دور کار</option>
                 <option value="">کار در محل</option>
             </select>
         </div>
       <div className="button-child">
         <TextareaAutosize aria-label="empty textarea" placeholder="لطفا گزارش امروز خودرا شرح دهید" className="textarea-child" />
         
        <button type="submit" className="btn-act mt-2 " style={{ backgroundColor:'#00d96f'}}>ثبت </button>
        </div>
        </div>
    )
}

export default ChildModal