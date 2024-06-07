import ArrowUpIcon from '../../assets/arrow-up.svg'
import ArrowDownIcon from '../../assets/arrow-down.svg'
import FilterIcon from '../../assets/filter.svg'
import PetitionIcon from '../../assets/petition.svg'
import DonationIcon from '../../assets/donation.svg'
import ListIcon from '../../assets/list.svg'
import MapIcon from '../../assets/map.svg'

function ContentHeader() {
    return (
        <>
            <div className="w-full h-auto flex flex-col gap-5">
                <div className='w-full h-auto flex justify-between'>
                    <div className="w-auto h-aruto flex flex-col gap-1">
                        <text className="font-poppins font-semibold text-3xl">Explore</text>
                        <text className="font-poppins font-normal text-base">Where do you want to help</text>
                    </div>
                    <div className="w-auto h-auto flex gap-3">
                        <div className="w-auto h-10 border flex border-primary-border rounded-lg">
                            <button className='w-auto h-full flex px-4 py-[10px] gap-2 border-r-[1px] border-primary-border'>
                                <img src={ArrowUpIcon} alt="" />
                                <text className='font-poppins font-semibold text-sm'>Distance</text>
                            </button>
                            <button className='w-auto h-full flex px-4 py-[10px] gap-2'>
                                <img src={ArrowDownIcon} alt="" />
                                <text className='font-poppins font-semibold text-sm'>Date</text>
                            </button>
                        </div>
                        <div className='w-auto h-10'>
                            <button className='w-auto h-full flex items-center px-4 py-[10px] bg-primary-main rounded-lg gap-2'>
                                <img src={FilterIcon} alt="" />
                                <text className='font-poppins font-semibold text-sm text-primary-white'>Show Filters</text>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex justify-between'>
                    <div className='w-auto h-10 flex bg-primary-white border border-primary-border rounded-lg overflow-hidden'>
                        <button className='w-auto h-full flex px-4 py-[10px] border-r-[1px] border-primary-border'>
                            <text className='font-poppins font-semibold text-sm'>All views</text>
                        </button>
                        <button className='w-auto h-full flex px-4 py-[10px] gap-2 border-r-[1px] border-primary-border bg-slate-100'>
                            <img src={PetitionIcon} alt="" />
                            <text className='font-poppins font-semibold text-sm'>Petitions</text>
                        </button>
                        <button className='w-auto h-full flex px-4 py-[10px] gap-2 bg-slate-100'>
                            <img src={DonationIcon} alt="" />
                            <text className='font-poppins font-semibold text-sm'>Donations</text>
                        </button>
                    </div>
                    <div className='w-auto h-10 flex bg-primary-white border border-primary-border rounded-lg overflow-hidden'>
                        <button className='w-auto h-full flex px-4 py-[10px] gap-2 border-r-[1px] border-primary-border'>
                            <img src={ListIcon} alt="" />
                        </button>
                        <button className='w-auto h-full flex px-4 py-[10px] gap-2'>
                            <img src={MapIcon} alt="" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentHeader