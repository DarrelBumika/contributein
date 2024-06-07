import { useState } from "react";
import HideIcon from "../assets/hide.svg"
import ShowIcon from "../assets/show.svg"

function Input(props) {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <div className={"w-auto flex flex-col items-start gap-1 "+props.className}>
                <div className="w-full flex justify-between ">
                    {/* eslint-disable-next-line react/prop-types */}
                    <label htmlFor={props.id} className="font-poppins text-stone-500 text-base font-normal">{props.label}</label>
                </div>
                <input 
                    id={props.id} 
                    type="text"
                    className="h-14 self-stretch rounded-xl border border-solid border-primary-border px-4 text-m font-poppins"
                ></input>
            </div>
        </>
    )
}

export default Input