import ExploreSubNavMenu from '../../components/ExploreSubNavMenu.jsx'

function SubHeader() {
    const indexes = [0, 1, 2]

    return (
        <>
            <div className="w-full h-16 py-5 flex z-50 self-stretch justify-center border border-b-gray-200 bg-primary-white">
                <div className="w-[90%] h-full flex justify-between items-center">
                    <div className="flex w-auto gap-3 justify-between">
                        {indexes.map((index) =>
                            // eslint-disable-next-line react/jsx-key
                            <ExploreSubNavMenu index={index} />
                        )}
                    </div>
                    <div className='w-[320px] flex items-center h-11 relative'>
                        <input type='text' className='w-full h-full rounded-lg border border-slate-200 font-poppins font-normal text-base pl-3' placeholder='Search'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubHeader