import upArrowSVG from './up-arrow-svgrepo-com.svg'
import './Arrow.css'

interface ArrowProps{
    arrowDirection: 'left' | 'right'
    actionClick: () => void
}

const Arrow = (props: ArrowProps) => {

    function arrowDirectionClass(direction: string) {
        return {
            'left': 'leftArrow',
            'right': 'rightArrow'
        }[direction] ?? 'leftArrow'
    }

    return (
        <div onClick={() => props.actionClick()}>
            <img className={arrowDirectionClass(props.arrowDirection)} src={upArrowSVG} width={'19.4px'} height={'30px'}/>
        </div >
    )
}

export default Arrow;