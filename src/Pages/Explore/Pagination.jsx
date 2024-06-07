import ArrowLeftIcon from '../../assets/arrow-left.svg'
import ArrowRightIcon from '../../assets/arrow-right.svg'

function Pagination() {
    return (
        <>
            <div className='flex justify-between border-t border-primary-border pt-5'>
                <button className='flex justify-center items-center gap-2'>
                    <img src={ArrowLeftIcon} alt="" />
                    <text className='font-poppins font-semibold text-sm'>Previous</text>
                </button>
                <div className='flex'>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>1</button>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>2</button>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>3</button>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>...</button>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>8</button>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>9</button>
                    <button className='w-10 h-10 flex justify-center items-center font-poppins font-medium text-sm'>10</button>
                </div>
                <button className='flex justify-center items-center gap-2'>
                    <text className='font-poppins font-semibold text-sm'>Previous</text>
                    <img src={ArrowRightIcon} alt="" />
                </button>
            </div>
        </>
    )
}

export default Pagination