import MapIcon from '../../assets/map.svg'
import VerifiedIcon from '../../assets/verified.svg'
import HeartIcon from '../../assets/heart.svg'
import MapExample from '../../assets/mapExample.png'

import ContentHeader from './ContentHeader.jsx'
import Pagination from './Pagination'

function Map() {
    return (
        <>
            <div className="w-full h-auto py-8 flex justify-center">
                <div className="w-[1440px] h-auto grid grid-cols-2">


                    <div className="w-full h-auto flex flex-col px-8 gap-6">

                        <ContentHeader/>

                        <div className='w-full h-auto flex flex-col gap-4'>
                            {[...Array(3)].map((x, i) => 
                                <div className='w-full h-auto flex gap-5 rounded-xl outline outline-1 outline-primary-border p-4'>
                                    <div className='w-[200px] h-[218px] bg-primary-main rounded-lg relative'>
                                        <img src="" alt="" />
                                        <div className='w-full h-full absolute p-2 flex justify-start items-end'>
                                            <div className='w-fit h-auto flex gap-1 px-2 py-[2px] bg-primary-surface rounded-2xl'>
                                                <img src={VerifiedIcon} alt="" />
                                                <text className='font-poppins font-medium text-xs text-primary-main'>Verified</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[404px] flex flex-col gap-4'>
                                        <div className='w-full h-auto flex gap-4'>
                                            <div className='w-auto h-auto flex flex-col gap-1'>
                                                <text className='font-poppins font-semibold text-sm text-primary-border'>Petitions</text>
                                                <text className='font-poppins font-semibold text-2xl'>Ms. Saint-Martin Doranyia Pascal</text>
                                            </div>
                                            <button className='w-11 h-10 flex justify-center items-center outline outline-1 outline-primary-border rounded-md'>
                                                <img src={HeartIcon} alt="" />
                                            </button>
                                        </div>
                                        <text className='font-poppins font-normal text-base text-slate-600'>In 2022 my husband and I moved to Portugal to follow our simple life dream and build our..</text>
                                        <div className='w-full h-auto flex justify-between'>
                                            <div className='w-auto h-6 flex gap-2'>
                                                <img src={MapIcon} alt="" />
                                                <text className='font-poppins font-medium text-base'>Jakarta, Indonesia</text>
                                            </div>
                                            <div className='flex gap-2 justify-center items-center'>
                                                <text className='font-poppins font-semibold text-xl'>4.444</text>
                                                <text className='font-poppins font-normal text-base'>signs</text>
                                            </div>
                                        </div>
                                        <div className="w-full h-1 bg-primary-border rounded-full overflow-hidden relative">
                                            <div className="w-[70%] h-full bg-primary-main absolute"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Pagination/>

                    </div>


                    <div className='w-full h-full'>
                        <img src={MapExample} alt="" className='w-full h-full object-cover'/>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Map