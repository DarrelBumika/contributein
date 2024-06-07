import Gift from '../assets/gift.svg'

import { Link } from 'react-router-dom'

function DonationCard(props) {
    const data = props.data

    return(
        <>
            <Link 
                key={data.id} 
                to={`/explore/${data.id}`}
                className="w-full h-auto flex justify-center items-center transition-all ease-in-out hover:cursor-pointer hover:scale-105">
                <div className="w-[400px] h-[400px] border shadow-sm rounded-xl overflow-hidden">
                    <div className="w-full h-[40%] bg-primary-main">
                    </div>
                    <div className="w-full h-[60%] flex flex-col justify-between p-3">
                        <div className="w-full h-[40px] flex gap-4">
                            <div className="w-10 h-10 bg-primary-main rounded-full"></div>
                            <div className="w-auto h-auto flex items-center font-poppins text-base font-medium text-primary-main">Jaylon Aminoff</div>
                        </div>
                        <div className="w-full h-[20px] font-poppins font-semibold text-2xl text-black">
                            {data.title}
                        </div>
                        <div className="w-full h-[40px] font-poppins font-normal text-base text-gray-600">
                            {data.description}
                        </div>
                        <div className="w-full h-1 bg-primary-border rounded-full relative">
                            <div className="w-[70%] h-full bg-primary-main absolute"/>
                        </div>
                        <div className="w-full h-auto flex justify-between">
                            <div className='w-auto h-auto flex gap-1 justify-center items-center'>
                                <img className="" src={Gift} />
                                <text className="font-poppins font-medium text-base">Rp500.000,00</text>
                            </div>
                            <div className='w-auto h-auto font-poppins font-medium text-base'>75%</div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default DonationCard