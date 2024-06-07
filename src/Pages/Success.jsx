import Header from './Header.jsx'
import Button from '../components/Button.jsx'
import SuccessIllustration from '../assets/success.svg'

function Success() {
    return (
        <>
            <div className="w-lvw h-lvh flex flex-col">
                <Header />
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[375px] h-auto flex flex-col gap-[75px]'>
                        <img src={SuccessIllustration} className='w-[300px] h-[300px] self-center'/>
                        <div className='flex flex-col gap-10'>
                            <text className='text-center font-poppins font-semibold text-2xl'>Success!!</text>
                            <text className='text-center font-poppins font-normal text-base leading-none'>All of your action have been processed successfully.</text>
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

export default Success