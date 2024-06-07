import TextLink from "../components/TextLink.jsx"

function Footer() {
    return (
        <>
            <div className="w-full h-auto flex flex-col items-center justify-between bg-primary-surface pt-16 pb-12 gap-16">
                <div className="w-[80%] h-auto grid grid-cols-4">
                    <div className="w-full h-auto flex justify-center">
                        <div className="w-[50%] h-auto flex flex-col gap-4">
                            <TextLink className="font-poppins font-medium text-base text-slate-800 hover:font-semibold" text='Home' />
                            <div className="flex flex-col gap-3">
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='My Favorites' />
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Recents' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center">
                        <div className="w-[50%] h-auto flex flex-col gap-4">
                            <TextLink className="font-poppins font-medium text-base text-slate-800 hover:font-semibold" text='Explore' />
                            <div className="flex flex-col gap-3">
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Lists' />
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Maps' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center">
                        <div className="w-[50%] h-auto flex flex-col gap-4">
                            <TextLink className="font-poppins font-medium text-base text-slate-800 hover:font-semibold" text='Campaigns' />
                            <div className="flex flex-col gap-3">
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Home' />
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Campaigns' />
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Donations' />
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Analytics' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center">
                        <div className="w-[50%] h-auto flex flex-col gap-4">
                            <TextLink className="font-poppins font-medium text-base text-slate-800 hover:font-semibold" text='Profile' />
                            <div className="flex flex-col gap-3">
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Settings' />
                                <TextLink className="font-poppins font-medium text-base text-slate-600 hover:font-semibold" text='Notifications' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] h-auto flex justify-between pt-9 border-t-white border-t">
                    <text className="font-poppins font-bold text-xl">ContributeIN</text>
                    <text className="font-poppins font-normal text-base text-gray-500">&#169; 2024 ContributeIN. All rights reserved.</text>
                </div>
            </div>
        </>
    )
}

export default Footer