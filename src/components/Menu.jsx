
function Menu(props) {
    return (
        <>
            <div className='w-10 h-10 p-2 bg-[#EDEDED] rounded-md border-4 border-[#F7F7F7] cursor-pointer transition-all ease-in-out duration-100 hover:border-none hover:rounded-full'>
                <img src={props.iconSrc}/>
            </div>
        </>
    )
}

export default Menu