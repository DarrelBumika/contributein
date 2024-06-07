import Header from './Header.jsx'
import Button from '../components/Button.jsx'
import FailedIllustration from '../assets/failed.svg'

function Failed() {
    return (
        <>
            <div className="w-lvw h-lvh flex flex-col">
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[375px] h-auto flex flex-col gap-[75px]'>
                        <img src={FailedIllustration} className='w-[300px] h-[300px] self-center'/>
                        <div className='flex flex-col gap-10'>
                            <text className='text-center font-poppins font-semibold text-2xl'>Error 404!</text>
                            <text className='text-center font-poppins font-normal text-base leading-none'>May be bigfoot has broken this page.<br/>Come back to the homepage</text>
                        </div>
                        <div>
                            <Button text='Back To Homepage' className='w-full bg-primary-main text-primary-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Failed