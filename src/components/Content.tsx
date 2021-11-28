import './Content.css'

export interface ContentProps{
    title: string,
    contentURL: string
    defaultWidth?: string
}

const Content = (props: ContentProps) => {
    return (
        <div className="content__outterDiv">
            <div className="content__title">{props.title}</div>
            <img src={props.contentURL} alt={props.title} width={props.defaultWidth ?? '200px'} />
        </div>
    )
}


export default Content;