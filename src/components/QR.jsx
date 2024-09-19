import QR_img from "../assets/qr.png";
import React from 'react'

function QR() {

    return(
        <div className="flex items-center justify-center py-5 ">
            <div className="w-[248px] h-[248px] p-4 rounded-3xl bg-white items-center justify-center">

                <div className="mb-5">
                    <img src={QR_img} alt="QR code" className="w-full rounded-[10px]" />
                </div>
            </div>
        </div>
       
    )
}

export default QR;