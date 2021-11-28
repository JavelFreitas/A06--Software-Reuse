import './BulletPoint.css'

interface BulletPointProps{
    actionClick: () => void
    active: boolean
}

const BulletPoint = (props: BulletPointProps) => {

    return(
        <div className={`bulletPoint__outterDiv ${props.active && 'bulletPoint__outterDiv-active'}`} onClick={props.actionClick}>

        </div>
    )

} 

export default BulletPoint;