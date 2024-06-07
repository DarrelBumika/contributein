import ContentHeader from './ContentHeader';

import TimerIcon from '../../assets/timer.svg'
import CheckIcon from '../../assets/check-check.svg'

export default function MyCampaigns() {
    return(
        <>
            <div className='w-full h-auto flex justify-center py-12'>
                <div className='w-[1200px] h-auto px-8 gap-8 flex flex-col justify-center'>
                    <ContentHeader/>
                    <div className='w-full border border-gray-200 rounded-xl p-6 flex flex-col gap-5'>
                        <div className='w-full h-auto flex justify-between'>
                            <p className='font-poppins font-semibold text-lg'>Your Campaigns (2)</p>
                            <div className='w-auto flex rounded-lg border border-gray-200'>
                                <div className='px-4 py-2.5 font-poppins font-semibold text-sm'>All</div>
                                <div className='px-4 py-2.5 bg-slate-200 border-l border-gray-300 flex gap-2'>
                                    <img src={TimerIcon} alt='' className='w-5 h-5'/>
                                    <p className='font-poppins font-semibold text-sm text-slate-400'>In Progress</p>
                                </div>
                                <div
                                    className='px-4 py-2.5 bg-slate-200 border-l border-gray-300 flex gap-2'>
                                    <img src={CheckIcon} alt='' className='w-5 h-5'/>
                                    <p className='font-poppins font-semibold text-sm text-slate-400'>Concluded</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto grid grid-cols-2 gap-5'>
                            {[...Array(4)].map(() => (
                                <div className='w-full h-[260px] bg-primary-surface rounded-3xl flex overflow-hidden hover:bg-primary-main hover:text-primary-white cursor-pointer ease-in-out delay-100 transition-all'>
                                    <div className='w-[80%] flex flex-col justify-between p-6'>
                                        <div className='font-poppins font-semibold text-2xl'>Renovate Kingstown Orphanage</div>
                                        <div className='font-poppins font-semibold text-xs'>
                                            <p>Ana Yamamoto</p>
                                            <p>5226 6749 6789 4341</p>
                                        </div>
                                    </div>
                                    <div className='w-[30%] bg-primary-main'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}