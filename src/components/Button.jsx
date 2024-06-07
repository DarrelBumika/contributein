 function Button(props) {
    return (
        <>
            <button className={'h-14 rounded-full hover:bg-primary-hover '+props.className}>
                <div className={'font-poppins text-m'}>{props.text}</div>
            </button>
        </>
    )
}

export default Button