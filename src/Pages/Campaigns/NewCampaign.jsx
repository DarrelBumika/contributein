import PiggyBankIcon from '../../assets/piggy-bank.svg';
import FileSignatureIcon from '../../assets/file-signature.svg';
import ArrowRightIcon from '../../assets/arrow-right.svg';
import ArrowLeftIcon from '../../assets/arrow-left.svg';
import Input from '../../components/Input.jsx'

export default function NewCampaign() {
    const step = ['type', 'detail', 'final'];
    let index = 0;

    const nextClickHandler = () => {
        document.getElementById(step[index]).classList.add('hidden')

        index = index + 1

        document.getElementById(step[index]).classList.remove('hidden')

        updateButton()
    }

    const prevClickHandler = () => {
        document.getElementById(step[index]).classList.add('hidden')

        index = index - 1

        document.getElementById(step[index]).classList.remove('hidden')

        updateButton()
    }

    const updateButton = () => {
        if (index === 0) {
            document.getElementById('prev').classList.add('hidden')
        } else if (index === 1) {
            document.getElementById('prev').classList.remove('hidden')
            document.getElementById('next').classList.remove('hidden')
        } else {
            document.getElementById('next').classList.add('hidden')
        }
    }

    return (
        <>
            <div className='w-full h-auto flex justify-center py-12'>
                <div className='w-[1440px] h-auto grid grid-cols-2 justify-center'>
                    <div className='w-full flex flex-col gap-6 px-8'>

                        <div className='w-full h-[600px] flex'>
                            <div className='w-full flex flex-col gap-6 transition-all ease-in-out' id='type'>
                                <div className='flex flex-col'>
                                    <p className='font-poppins font-semibold text-3xl'>1. Choose your campaign style</p>
                                    <p className='font-poppins font-normal text-base'>What it&#39;s about your
                                        campaign?</p>
                                </div>
                                <div className='w-full h-full grid grid-cols-2 gap-4'>
                                    <div className='
                                h-full border border-gray-200 rounded-xl p-8 flex flex-col justify-end gap-5
                                cursor-pointer hover:scale-105 transition-all ease-in-out'
                                    >
                                        <div
                                            className='w-16 h-16 bg-slate-200 p-3 rounded-full flex justify-center items-center'>
                                            <img src={PiggyBankIcon} alt=''/>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-poppins font-semibold text-3xl'>Donation</p>
                                            <p className='font-poppins font-normal text-base text-slate-500'>Create a
                                                donation to receive funds</p>
                                        </div>
                                    </div>
                                    <div className='
                                h-full border border-gray-200 rounded-xl p-8 flex flex-col justify-end gap-5
                                cursor-pointer hover:scale-105 transition-all ease-in-out'
                                    >
                                        <div
                                            className='w-16 h-16 bg-slate-200 p-3 rounded-full flex justify-center items-center'>
                                            <img src={FileSignatureIcon} alt=''/>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-poppins font-semibold text-3xl'>Volunteer</p>
                                            <p className='font-poppins font-normal text-base text-slate-500'>Create a
                                                petition to crowd signatures</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-6 hidden transition-all ease-in-out' id='detail'>
                                <div className='flex flex-col'>
                                    <p className='font-poppins font-semibold text-3xl'>2. Tell more about your
                                        campaign</p>
                                    <p className='font-poppins font-normal text-base'>What it&#39;s about your
                                        campaign?</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-poppins font-normal text-base'>Your Campaign Title</p>
                                        <input type='text'
                                               className='h-14 rounded-xl border border-solid border-primary-border p-4 text-m font-poppins'/>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-poppins font-normal text-base'>Description</p>
                                        <textarea
                                            className='h-60 rounded-xl border border-solid border-primary-border p-4 text-m font-poppins resize-none'/>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex flex-col gap-6 hidden transition-all ease-in-out' id='final'>
                                <div className='flex flex-col'>
                                    <p className='font-poppins font-semibold text-3xl'>2. Give final details</p>
                                    <p className='font-poppins font-normal text-base'>What it&#39;s about your
                                        campaign?</p>
                                </div>
                                <div className='h-full flex flex-col gap-4'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-poppins font-normal text-base'>Contact</p>
                                        <input type='text'
                                               className='h-14 rounded-xl border border-solid border-primary-border p-4 text-m font-poppins'/>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-poppins font-normal text-base'>No Rekening</p>
                                        <input type='text'
                                               className='h-14 rounded-xl border border-solid border-primary-border p-4 text-m font-poppins'/>
                                    </div>
                                    <div className='h-full flex flex-col gap-4'>
                                        <p className='font-poppins font-normal text-base'>Upload a beautiful cover
                                            image</p>
                                        <div className="flex items-center justify-center w-full h-full">
                                            <label htmlFor="dropzone-file"
                                                   className="flex flex-col items-center justify-center w-full h-full border border-primary-border rounded-xl cursor-pointer hover:bg-slate-200 bg-primary-whit hover:border-gray-500">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2"
                                                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 font-poppins font-semibold text-sm text-primary-main">Upload the image according to the format and size.</p>
                                                    <p className="font-poppins font-normal text-base text-gray-500">SVG, PNG, JPG, GIF (max. 1MB)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden"/>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between pt-5 border-t border-gray-200'>
                            <div id='prev'
                                 className='flex gap-2 items-center cursor-pointer hidden transition-all ease-in-out'
                                 onClick={prevClickHandler}>
                                <img src={ArrowLeftIcon} alt='' className='w-5 h-5'/>
                                <p className='font-poppins font-semibold text-base'>Next</p>
                            </div>
                            <div className='flex gap-3 p-4 rounded-full bg-gray-200 transition-all ease-in-out'>
                                <div className='w-2 h-2 rounded-full bg-primary-main'/>
                                <div className='w-2 h-2 rounded-full bg-primary-main'/>
                                <div className='w-2 h-2 rounded-full bg-primary-main'/>
                            </div>
                            <div id='next' className='flex gap-2 items-center cursor-pointer transition-all ease-in-out'
                                 onClick={nextClickHandler}>
                                <p className='font-poppins font-semibold text-base'>Next</p>
                                <img src={ArrowRightIcon} alt='' className='w-5 h-5'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-primary-main'>
                        <div className='w-[650px] h-auto flex flex-col rounded-xl bg-primary-white p-8 gap-5'>
                            <p className='font-poppins font-semibold text-2xl'>Help us Teach English for Kids on China
                                Countryside</p>
                            <p className='font-poppins font-normal text-sm text-slate-600'>I need about 9.000 signatures
                                to deliver to my mayor in two weeks and get that grant! Check more about our project and
                                if you want to see how we are changing lovely children lifes on China countryside just
                                teaching how they can use the internet.</p>
                            <div className='flex gap-3 items-center'>
                                <div className='w-10 h-10 rounded-full bg-primary-main'/>
                                <p className='font-poppins font-medium text-base'>Mateus Rodrigues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}