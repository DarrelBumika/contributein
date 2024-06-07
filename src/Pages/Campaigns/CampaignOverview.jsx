import HeartIcon from '../../assets/heart.svg'
import ShareIcon from '../../assets/share.svg'
import MapIcon from '../../assets/map.svg'
import FlagIcon from '../../assets/flag.svg'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CampaignOverview() {

    const params = useParams()
    const [campaign, setCampaign] = useState(null)

    useEffect(() => {
        fetch(`/api/campaigns/${params.id}`)
            .then(res => res.json())
            .then(data => setCampaign(data.campaigns))
    }, [params.id])

    console.log(campaign)

    return (
        <>
            <div className="w-full h-auto py-12 flex justify-center items-center">
                {
                    campaign ? (
                        <div className="w-[1280px] h-auto flex flex-col gap-8">
                            <div className="w-full h-auto flex px-8 justify-between">
                                <div className="w-auto h-auto flex flex-col">
                                    <text className="font-poppins font-semibold text-5xl">{campaign.title}</text>
                                    <text className="font-poppins font-normal text-base">Your current sales summary and activity.</text>
                                </div>
                                <div className="w-auto h-auto flex gap-2">
                                    <button className="w-auto h-12 flex items-center gap-2 bg-primary-main rounded-md px-3">
                                        <img src={ShareIcon} alt="" />
                                        <p className="font-poppins font-medium text-sm text-primary-white">Share Campaign</p>
                                    </button>
                                    <button className='w-auto h-12 flex items-center gap-2 bg-primary-white rounded-md px-3 shadow border border-slate-200'>
                                        <img src={HeartIcon} alt="" />
                                        <p className="font-poppins font-medium text-sm">Like</p>
                                    </button>
                                </div>
                            </div>
                            <div className='w-auto h-auto flex gap-10 px-8'>
                                {/*w-[776px]*/}
                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <div className='w-full h-[348px] bg-primary-main' />
                                    <div className='w-full h-auto'>
                                        <p className='font-poppins font-normal text-base text-slate-600'>{campaign.description}</p>
                                    </div>
                                    <div className='w-full h-auto flex flex-col gap-4 border-t border-t-slate-300 pt-[18px]'>
                                        <p className='font-poppins font-semibold text-xl'>Initiator</p>
                                        <div className='flex gap-4 items-center'>
                                            <div className='w-[42px] h-[42px] rounded-full bg-primary-main'/>
                                            <p className='font-poppins font-semibold text-lg'>Someone</p>
                                        </div>
                                        <button className='w-fit h-auto py-2 px-4 font-poppins font-medium text-sm border border-slate-200 rounded-md'>Contact</button>
                                    </div>
                                    {/*<div className='w-full h-auto flex flex-col gap-4 border-t border-t-slate-300 pt-[18px]'>*/}
                                    {/*    <p className='font-poppins font-semibold text-xl'>Words of Support</p>*/}
                                    {/*    <div className='flex flex-col gap-[18px]'>*/}
                                    {/*        <div className='flex flex-col gap-[18px]'>*/}
                                    {/*            <p className='font-poppins font-medium text-base'>I just wanted to help 💪</p>*/}
                                    {/*            <div className='flex gap-4 items-center'>*/}
                                    {/*                <div className='w-[42px] h-[42px] rounded-full bg-primary-main'/>*/}
                                    {/*                <p className='font-poppins font-semibold text-lg'>Someone</p>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className='flex flex-col gap-[18px]'>*/}
                                    {/*            <p className='font-poppins font-medium text-base'>I just wanted to help 💪</p>*/}
                                    {/*            <div className='flex gap-4 items-center'>*/}
                                    {/*                <div className='w-[42px] h-[42px] rounded-full bg-primary-main'/>*/}
                                    {/*                <p className='font-poppins font-semibold text-lg'>Someone</p>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className='flex flex-col gap-[18px]'>*/}
                                    {/*            <p className='font-poppins font-medium text-base'>I just wanted to help 💪</p>*/}
                                    {/*            <div className='flex gap-4 items-center'>*/}
                                    {/*                <div className='w-[42px] h-[42px] rounded-full bg-primary-main'/>*/}
                                    {/*                <p className='font-poppins font-semibold text-lg'>Someone</p>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <button className='w-fit h-auto py-2 px-4 font-poppins font-medium text-sm border border-slate-200 rounded-md'>Show More</button>*/}
                                    {/*</div>*/}
                                    <div className='w-full h-auto flex justify-between gap-4 border-t border-t-slate-300 pt-[18px]'>
                                        <p className='font-poppins font-medium text-sm'>Created on November 2nd, 2023</p>
                                        <img src={MapIcon} alt="" />
                                    </div>
                                    <div className='w-full h-auto border-t border-t-slate-300 pt-[18px]'>
                                        <a href="" className='flex gap-1 items-center'>
                                            <img src={FlagIcon} alt="" />
                                            <p className='font-poppins font-medium text-xs'>Report</p>
                                        </a>
                                    </div>
                                </div>
                                {/*<div className='w-auto h-auto flex flex-col gap-4'>*/}
                                {/*    <div className='w-full h-auto flex flex-col gap-5 p-[18px] bg-primary-white rounded-xl shadow border border-slate-200'>*/}
                                {/*        <div className='font-poppins font-semibold text-base'>🫰 Funds donated to this campaign</div>*/}
                                {/*        <div className='flex'>*/}
                                {/*            <p className='font-poppins font-normal text-xl'>Rp1.000.000,00 <span className='font-semibold'>/ Rp5.000.000,00</span></p>*/}
                                {/*        </div>*/}
                                {/*        <div className='w-full h-1 bg-primary-border rounded-full overflow-hidden relative'>*/}
                                {/*            <div className='w-[20%] h-1 bg-primary-main absolute' />*/}
                                {/*        </div>*/}
                                {/*        <div className="w-full h-auto grid grid-cols-2 gap-2">*/}
                                {/*            <button className="w-auto h-12 flex items-center gap-2 bg-primary-main rounded-md px-3">*/}
                                {/*                <img src={ShareIcon} alt="" />*/}
                                {/*                <p className="font-poppins font-medium text-sm text-primary-white">Share Campaign</p>*/}
                                {/*            </button>*/}
                                {/*            <button className='w-full h-12 flex justify-center items-center gap-2 bg-primary-white rounded-md px-3 shadow border border-slate-200'>*/}
                                {/*                <img src={HeartIcon} alt="" />*/}
                                {/*                <p className="font-poppins font-medium text-sm">Like</p>*/}
                                {/*            </button>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className='w-full h-auto flex flex-col gap-5 p-[18px] bg-primary-white rounded-xl shadow border border-slate-200'>*/}
                                {/*        <div className='font-poppins font-semibold text-base'>💪 Fund this campaign</div>*/}
                                {/*        <div className='flex flex-col gap-[6px]'>*/}
                                {/*            <p className='font-poppins font-medium text-sm'>Funding</p>*/}
                                {/*            <div className='w-full h-auto relative'>*/}
                                {/*                <div className='h-full flex items-center px-3 absolute'>Rp</div>*/}
                                {/*                <input type="text" className='w-full h-10 rounded-md border border-slate-200 shadow p-3 pl-10  font-poppins' />*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className='flex flex-col gap-1'>*/}
                                {/*            <p className='font-poppins font-medium text-sm'>Words of Support</p>*/}
                                {/*            <textarea  type='text' className='w-full h-auto min-h-40 font-poppins shadow border border-slate-200 rounded-md p-3 resize-none' />*/}
                                {/*            <p className='font-poppins font-normal text-xs text-slate-500'>Not only numbers make the difference on our lives :)</p>*/}
                                {/*        </div>*/}
                                {/*        <button className='w-full h-auto py-2 px-4 bg-primary-main rounded-md'>*/}
                                {/*            <p className='font-poppins font-medium text-sm text-primary-white'>Donate Now</p>*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-[500px] flex justify-center items-center">
                            <h1 className="font-poppins font-bold text-3xl">Loading...</h1>
                        </div>
                    )
                }
                
            </div>
        </>
    )
}

export default CampaignOverview