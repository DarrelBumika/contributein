import DonationCard from '../../components/DonationCard.jsx'
import TextLink from '../../components/TextLink.jsx'
import ContentHeader from './ContentHeader.jsx'
import Pagination from './Pagination.jsx'

import { useEffect, useState } from 'react'

function Gallery() {

    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        fetch("/api/campaigns")
            .then(res => res.json())
            .then(data => setCampaigns(data.campaigns))
    }, [])

    const campaignElements = campaigns.map((campaign) => (
        // eslint-disable-next-line react/jsx-key
        <DonationCard data={campaign} />
    ))

    return (
        <>
            <div className="w-full h-auto py-12 flex justify-center items-center">
                <div className="w-[1216px] h-auto flex flex-col gap-6">

                    {/* Content Header */}
                    <ContentHeader />

                    {/* Cards */}
                    <div className='w-full h-auto flex flex-col gap-8 pb-5'>
                        <div className='w-full h-auto flex justify-between'>
                            <text className='font-poppins font-semibold text-4xl text-primary-main justify-center'>Donations</text>
                            <TextLink text='Browse all products' className='font-poppins font-medium text-base'/>
                        </div>
                        <div className='w-auto h-auto grid grid-cols-[400px_400px_400px] justify-center gap-5'>
                            {campaignElements}
                        </div>
                    </div>

                    {/* pagination */}
                    <Pagination/>

                </div>
            </div>
        </>
    )
}

export default Gallery