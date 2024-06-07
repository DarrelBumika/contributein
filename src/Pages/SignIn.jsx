import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import TextLink from '../components/TextLink.jsx'
import Logo from '../assets/logo.png'

function Login() {

  return (
    <>
      <div className='w-lvw h-lvh flex flex-col justify-between items-center'>
        <div className='w-[640px] h-[847px] flex flex-col items-center justify-center gap-6'>
          <img src={Logo} className='mt-10 w-16 h-16'/>
          <div className='flex flex-col items-start py-10 px-14 gap-2 rounded-3xl border border-solid border-primary-border'>
            <div className='flex flex-col justify-center items-center gap-12'>
              <div className='text-center font-poppins text-3xl font-medium'>
                Sign In
              </div>
              <div className='flex flex-col items-center gap-5'>
                <Input label='Email or mobile phone number' id='emailOrPhone' type='text' className='w-full'/>
                <Input label='Your password' id='password' type='password' className='w-full'/>
                <Button text='Log In' className='w-full text-primary-white bg-primary-main'/>
                <div className='w-[514px] h-10 bg-white flex-col justify-center items-center gap-2 inline-flex'>
                  <div className='pr-2 py-2 justify-start items-start gap-2.5 inline-flex'>
                    <p className='font-poppins text-s font-normal'>
                      <span>By continuing, you agree to the</span> <span><TextLink className='text-s underline' text='Terms of use'/> </span> 
                      and <TextLink className='text-s underline' text=' Privacy Policy.'/>
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-between items-center '>
                <TextLink className='text-s underline' text='Other issue with sign in'/>
                <TextLink className='text-s underline' text='Forget your password'/>
              </div>
            </div>
          </div>
          <div className='w-full h-[30px] justify-center items-center gap-[23px] flex'>
            <div className='w-full h-0.5 bg-primary-surface'/>
            <div className='w-fit text-primary-darkGray text-m font-normal font-poppins text-nowrap'>New to our community</div>
            <div className='w-full h-0.5 bg-primary-surface'/>
          </div>
          <div className='w-full'>
            <Button text='Create an account' className='w-[640px] bg-primary-white text-primary-darkGray border border-primary-border hover:text-primary-white'/>
          </div>
        </div>
        <div className='flex flex-col w-full h-auto pb-4 justify-center items-center gap-4 shrink-0'>
          <div className='w-full h-0.5 bg-primary-surface'/>
          <div className='w-auto flex items-end gap-10'>
            <TextLink text='Help Center' textColor='primary-gray'/>
            <TextLink text='Terms of Service' textColor='primary-gray'/>
            <TextLink text='Privacy Policy' textColor='primary-gray'/>
            <TextLink text='@2024ContributeIN' textColor='primary-gray'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login