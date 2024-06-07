import HomePage from '../../assets/homepage.png'
import ArrowButton from '../../components/ArrowButton'
import HowWeWork from '../../assets/howwework.png'
import Category from '../../assets/category.png'
import TextLink from '../../components/TextLink.jsx'
import DonationCard from '../../components/DonationCard.jsx'
import HelpThem from '../../assets/helpThem.png'
import CharityCategory from '../../assets/charityCategory.png'
import VolunteerCategory from '../../assets/volunteerCategory.png'

import { useEffect, useState } from 'react'

function Content() {

    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        fetch("/api/campaigns")
            .then(res => res.json())
            .then(data => setCampaigns(data.campaigns))
    }, [])

    const campaignElements = campaigns.slice(0, 6).map(campaign => (
        // eslint-disable-next-line react/jsx-key
        <DonationCard data={campaign} />
    ))

    return (
        <>
            <div className="w-full h-auto flex justify-center py-14 ">
                <div className='w-[1312px] h-auto flex flex-col justify-center items-center gap-16'>

                    {/* Landing */}
                    <div className="w-full h-[678px] flex items-center justify-center rounded-[36px] overflow-hidden relative ">
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <img src={HomePage} className='w-full' />
                            <div className='w-full h-full bg-orange-950 opacity-50 absolute'></div>
                        </div>
                        <div className='w-auto h-full flex flex-col absolute'>
                            <div className='w-full h-[85%] flex flex-col justify-center items-center gap-16'>
                                <div className='flex flex-col justify-center items-center font-poppins text-primary-white text-[57px] font-semibold gap-[27px]'>
                                    <text>Make your ideas come true</text>
                                    <text>Empowering Innovation Together</text>
                                </div>
                                <div className='w-[80%] flex justify-center items-center font-poppins text-primary-white text-lg font-normal gap-7'>
                                    <text className='text-center'>Bring your ideas to life with ContributeIn, a platform that empowers your innovations with ease and efficiency</text>
                                </div>
                            </div>
                            <div className='w-full h-[15%] flex justify-center'>
                                <ArrowButton className='w-[60px] h-[50px] rounded-full bg-black flex items-center justify-center transition-all ease-in-out delay-100 hover:border-primary-white hover:border hover:w-[100px]' />
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className='flex flex-col w-full h-auto gap-10'>
                        <div className='w-full h-[390px] flex justify-between'>
                            <div className='w-[65%] flex rounded-[36px] overflow-hidden transition-all ease-in-out hover:scale-105'>
                                <div className='w-[30%] h-full flex justify-center items-center bg-primary-main'>
                                    <div className='w-[60%] h-auto flex flex-col gap-20'>
                                        <text className='w-full font-poppins text-primary-white text-4xl'>How we Work</text>
                                        <TextLink className='font-poppins text-lg text-primary-white font-medium' text='Explore category'/>
                                    </div>
                                </div>
                                <img src={HowWeWork} className='w-[70%]'/>
                            </div>
                            <div className='w-[30%] h-full flex flex-col justify-center items-center bg-primary-border rounded-[36px] transition-all ease-in-out hover:scale-105'>
                                <div className='w-[50%] h-auto flex flex-col gap-20 -translate-x-10'>
                                    <div className='w-full h-auto flex flex-col gap-5 '>
                                        <text className='font-poppins font-normal text-primary-white text-4xl'>
                                            Category
                                        </text>
                                        <text className='font-poppins font-normal text-primary-white text-xs'>
                                            Est qui dolorem ipsum quia Consectetur, adipisci
                                        </text>
                                    </div>
                                    <TextLink className='w-full font-poppins text-lg text-primary-white font-medium' text='Explore category'/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[400px] flex justify-between'>
                            <div className='w-[30%] h-full flex flex-col justify-center items-center bg-primary-main rounded-[36px] transition-all ease-in-out hover:scale-105'>
                                <div className='w-[50%] h-auto flex flex-col gap-20 -translate-x-10'>
                                    <div className='w-full h-auto flex flex-col gap-5 '>
                                        <text className='font-poppins font-normal text-primary-white text-4xl'>
                                            Category
                                        </text>
                                        <text className='font-poppins font-normal text-primary-white text-xs'>
                                            Est qui dolorem ipsum quia Consectetur, adipisci
                                        </text>
                                    </div>
                                    <TextLink className='w-full font-poppins text-lg text-primary-white font-medium' text='Explore category'/>
                                </div>
                            </div>
                            <div className='w-[65%] h-full flex flex-col justify-center items-center bg-black rounded-[36px] overflow-hidden relative transition-all ease-in-out hover:scale-105'>
                                <div className='w-full h-full'>
                                    <img src={Category} alt="" className='-translate-y-40 absolute'/>
                                    <div className='w-full h-full bg-black opacity-50'>

                                    </div>
                                </div>
                                <div className='w-[50%] h-auto flex flex-col gap-20 -translate-x-20 absolute'>
                                    <div className='w-full h-auto flex flex-col gap-5 '>
                                        <text className='font-poppins font-normal text-primary-white text-4xl'>
                                            Category
                                        </text>
                                        <text className='font-poppins font-normal text-primary-white text-xs'>
                                            Est qui dolorem ipsum quia Consectetur, adipisci
                                        </text>
                                    </div>
                                    <TextLink className='w-full font-poppins text-lg text-primary-white font-medium' text='Explore category'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donations Cards */}
                    <div className='w-full h-auto flex flex-col gap-8 pb-5'>
                        <div className='w-full h-auto flex justify-between'>
                            <text className='font-poppins font-semibold text-4xl text-primary-main justify-center'>Donations</text>
                            <TextLink text='Browse all products' className='font-poppins font-medium text-base'/>
                        </div>
                        <div className='w-auto h-auto grid grid-cols-[400px_400px_400px] justify-center gap-5'>
                            {/* {[...Array(6)].map((x, i) => 
                                <DonationCard id={i} />
                            )} */}
                            {campaignElements}
                        </div>
                    </div>

                    {/* Help Them */}
                    <div className="w-full h-[640px] max-h-[700xp] flex items-center justify-between overflow-hidden">
                        <img src={HelpThem} className='w-[780px] h-[640px] object-cover rounded-[56px]' />
                        <div className='w-[493px] h-full flex flex-col items-center justify-center bg-primary-surface rounded-[36px] gap-20'>
                            <div className='w-[80%] h-auto flex flex-col items-center gap-14'>
                                <text className='font-poppins font-semibold text-5xl text-primary-main text-center'>Help Them = Help Ourself</text>
                                <text className='font-poppins font-normal text-base text-primary-main text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</text>
                            </div>
                            <input className='w-[200px] h-[44px] bg-primary-main rounded-full' />
                        </div>
                    </div>

                    {/* About Us */}
                    <div className='w-full h-auto grid grid-cols-3 gap-[126px] px-[52px] py-[72px]'>
                        <div className='flex items-center gap-4'>
                            <div className='w-24 h-24 rounded-3xl bg-primary-surface'>
                            </div>
                            <div className='w-auto h-auto flex flex-col gap-[10px]'>
                                <text className='font-poppins font-normal text-xl text-black'>Free Shipping</text>
                                <text className='font-poppins font-normal text-base text-black'>Over $29.00</text>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-24 h-24 rounded-3xl bg-primary-surface'>
                            </div>
                            <div className='w-auto h-auto flex flex-col gap-[10px]'>
                                <text className='font-poppins font-normal text-xl text-black'>Secure Payments</text>
                                <text className='font-poppins font-normal text-base text-black'>With 5+ Payment options</text>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-24 h-24 rounded-3xl bg-primary-surface'>
                            </div>
                            <div className='w-auto h-auto flex flex-col gap-[10px]'>
                                <text className='font-poppins font-normal text-xl text-black'>30 days free return</text>
                                <text className='font-poppins font-normal text-base text-black'>No questions asked</text>
                            </div>
                        </div>
                    </div>

                    {/* Charity Categories */}
                    <div className='w-full h-auto flex flex-col gap-8'>
                        <div className='w-full h-auto flex justify-between'>
                            <text className='font-poppins font-semibold text-4xl text-primary-main justify-center'>Charity Category</text>
                            <TextLink text='Browse all products' className='font-poppins font-medium text-base'/>
                        </div>
                        <div className='w-full h-auto grid grid-cols-2 gap-10'>
                            <div className='w-full h-auto grid grid-cols-[300px_300px] gap-10'>
                                {[...Array(4)].map((x, i) =>
                                    <div className='w-full h-[414px] flex flex-col gap-10 transition-all ease-in-out cursor-pointer hover:scale-105'>
                                        <div className='w-full h-[310px] bg-primary-main rounded-[44px]'>
                                        </div>
                                        <div className='w-full h-16 flex flex-col justify-center gap-3'>
                                            <text className='font-poppins font-normal text-xl text-black'>Product</text>
                                            <text className='font-poppins font-normal text-base text-black m'>Rp500.000,00</text>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='w-full h-full flex flex-col gap-10'>
                                <div className='rounded-[44px] overflow-hidden'>
                                    <img className='h-[764px] object-cover' src={CharityCategory} alt="" />
                                </div>
                                <div className='w-full h-auto flex flex-col justify-center gap-3'>
                                    <text className='font-poppins text-xl text-black font-bold'>Wanna See More?</text>
                                    <TextLink className='font-poppins text-normal text-black font-normal' text='Browse all products'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Categories */}
                    <div className='w-full h-auto flex flex-col gap-8 pb-5'>
                        <div className='w-full h-auto flex justify-between'>
                            <text className='font-poppins font-semibold text-4xl text-primary-main justify-center'>Volunteer Category</text>
                            <TextLink text='Browse all products' className='font-poppins font-medium text-base'/>
                        </div>
                        <div className='w-full h-auto grid grid-cols-2 gap-10'>
                            <div className='w-full h-full flex flex-col gap-10'>
                                <div className='rounded-[44px] overflow-hidden'>
                                    <img className='h-[764px] object-cover' src={VolunteerCategory} alt="" />
                                </div>
                                <div className='w-full h-auto flex flex-col justify-center gap-3'>
                                    <text className='font-poppins text-xl text-black font-bold'>Wanna See More?</text>
                                    <TextLink className='font-poppins text-normal text-black font-normal' text='Browse all products'/>
                                </div>
                            </div>
                            <div className='w-full h-auto grid grid-cols-[300px_300px] gap-10'>
                                {[...Array(4)].map((x, i) =>
                                    <div className='w-full h-[414px] flex flex-col gap-10 transition-all ease-in-out cursor-pointer hover:scale-105'>
                                        <div className='w-full h-[310px] bg-primary-main rounded-[44px]'>
                                        </div>
                                        <div className='w-full h-16 flex flex-col justify-center gap-3'>
                                            <text className='font-poppins font-normal text-xl text-black'>Product</text>
                                            <text className='font-poppins font-normal text-base text-black m'>Rp500.000,00</text>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Content