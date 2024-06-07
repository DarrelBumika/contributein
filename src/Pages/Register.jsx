import Logo from '../assets/logo.png'
import TextLink from '../components/TextLink'
import Input from '../components/Input'
import Button from '../components/Button'
import RegisterIllustration from '../assets/register.svg'

function Register() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-primary-white">
                <div className="w-auto h-auto flex flex-col container gap-3">
                    <div className="w-[1017px] h-[789px] flex justify-end items-center border border-gray-300 rounded-3xl gap-[37px]">
                        <div className="w-[534px] h-[675px] flex flex-col justify-center gap-10">
                            <div className='flex flex-col gap-4'>
                                <img src={Logo} alt="" className='h-12 w-12' />
                                <div className='flex flex-col'>
                                    <text className='font-poppins font-medium text-[32px]'>Create an account</text>
                                    <text className='font-poppins font-normal text-base'>Already have an ccount? <span><TextLink className='underline' text='Log in'/></span></text>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-4'>
                                    <Input label='First Name' className='w-[260px]'/>
                                    <Input label='Last Name' className='w-[260px]'/>
                                </div>
                                <div className='w-auto h-auto'>
                                    <Input label='Email address' className='w-[534px]'/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-4'>
                                        <Input label='Password' className='w-[260px]'/>
                                        <Input label='Confirm your password' className='w-[260px]'/>
                                    </div>
                                    <div>
                                        <text className='font-poppins font-normal text-base text-stone-500'>Use 8 or more characters with a mix of letters, numbers & symbols</text>
                                    </div>
                                    <div className='h-6 flex items-center gap-2'>
                                        <input id='showPassword' type='checkbox' className='w-[18px] h-[18px] accent-black cursor-pointer'/>
                                        <label htmlFor='showPassword' className='font-poppins font-normal text-base text-zinc-800 cursor-pointer'>Show Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-between items-center'>
                                <TextLink text='log in instead' className='underline'/>
                                <Button text='Create an account' className='w-[259px] h-16 bg-primary-main text-primary-white'/>
                            </div>
                        </div>
                        <div className='w-[390px] h-[390px] flex justify-center items-center bg-primary-main rounded-l-2xl'>
                            <img src={RegisterIllustration}/>
                        </div>
                    </div>
                    <div className='flex justify-between px-12'>
                        <div>
                            <select className='cursor-pointer font-poppins font-normal text-base'>
                                <option>English (United States)</option>
                                <option>English (United Kingdom)</option>
                            </select>
                        </div>
                        <div className='flex gap-6'>
                            <TextLink text='Help' className='font-poppins font-normal text-base'/>
                            <TextLink text='Privacy' className='font-poppins font-normal text-base'/>
                            <TextLink text='Terms' className='font-poppins font-normal text-base'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register