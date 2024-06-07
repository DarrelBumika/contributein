import ArrowIcon from '../assets/arrow.svg'

function ArrowButton(props) {
    return (
        <>
            <button className={props.className}>
                <img src={ArrowIcon} />
            </button>
        </>
    )
}

export default ArrowButton