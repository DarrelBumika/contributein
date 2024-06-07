import { useState } from "react";
import HideIcon from "../assets/hide.svg"
import ShowIcon from "../assets/show.svg"

function Input(props) {
    const [showPassword, setShowPassword] = useState(props.type !== "password");
    const toggleShowID = props.id + "toggleShow";
    let display = '';

    // eslint-disable-next-line react/prop-types
    if (props.type !== 'password') {
        display = ' hidden';
    }

    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <div className={"w-auto flex flex-col items-start gap-1 "+props.className}>
                <div className="w-full flex justify-between ">
                    {/* eslint-disable-next-line react/prop-types */}
                    <label htmlFor={props.id} className="font-poppins text-stone-500 text-base font-normal">{props.label}</label>
                    {
                        // eslint-disable-next-line react/prop-types
                        props.type === 'password' ?
                        <button
                            id={toggleShowID}
                            onClick={() =>
                                setShowPassword((prev) => !prev)
                            }
                            className={"w-auto px-3 gap-1 flex cursor-pointer hover:bg-gray-100 rounded-full justify-center items-center"+display
                        }>
                            <img src={
                                showPassword ? HideIcon : ShowIcon
                            } />
                            <label htmlFor={toggleShowID} className="font-poppins text-primary-gray text-base font-normal cursor-pointer">
                                {
                                    showPassword ? "hide" : "show"
                                }
                            </label>
                        </button> : null
                    }
                </div>
                <input 
                    id={props.id} 
                    type={
                        showPassword ? "text" : "password"
                    }
                    className="h-14 self-stretch rounded-xl border border-solid border-primary-border px-4 text-m font-poppins"
                ></input>
            </div>
        </>
    )
}

export default Input