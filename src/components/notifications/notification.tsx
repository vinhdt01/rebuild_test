import React from 'react'

const Notification:React.FC = ({functionHanleShow}) => {
    return (
        <div className="w-full h-[400px] bg-[#fff] absolute -top-[405px] right-0 animate-[popup_0.1s_linear]">
            <div className="fixed  right-0 p-4" onClick={functionHanleShow}>X</div>
            <div className="mt-8 px-2">Lorem ipsum d</div>
        </div>
    )
}
export default Notification;