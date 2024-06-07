
function TextLink(props) {
    return (
        <>
            <span>
                <a className={'w-auto cursor-pointer '+props.className}>{props.text}</a>
            </span>
        </>
    )
}

export default TextLink