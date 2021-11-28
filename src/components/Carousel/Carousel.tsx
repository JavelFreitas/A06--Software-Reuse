import { useState } from "react";
import Arrow from "./Arrow";
import BulletPoint from "./BulletPoint";
import './Carousel.css'
import Content, {ContentProps} from "./Content";

interface CarouselProps{
    itemList: ContentProps[]
}
const Carousel = (props: CarouselProps) => {

    const [itemList, setItemList] = useState(props.itemList)

    const [renderedItem, setRenderedItem] = useState(0);

    function previousBanner(){
        let pageChange = 0;
        if((renderedItem - 1) < 0){
            pageChange = itemList.length - 1
        }else{
            pageChange = renderedItem - 1
        }
        setRenderedItem(pageChange)
    }

    function nextBanner(){
        let pageChange = 0;
        if((renderedItem + 1) > itemList.length - 1){
            pageChange = 0
        }else{
            pageChange = renderedItem + 1
        }
        setRenderedItem(pageChange)
    }
    
    return (<div className="carousel">
            <div className="carousel__outterDiv">
                <Arrow arrowDirection={'left'} actionClick={previousBanner}/>
                <div>
                    <Content 
                        title={itemList[renderedItem].title} 
                        contentURL={itemList[renderedItem].contentURL} 
                        defaultWidth={'100px'}/>
                </div>
                <Arrow arrowDirection={'right'} actionClick={nextBanner}/>
            </div>
            <div className="carousel__pagination">
                {itemList.map((item, index) => {
                    return (
                        <BulletPoint
                            key={item.title} 
                            actionClick={() => setRenderedItem(index)}
                            active={index === renderedItem ? true : false}
                        />
                    )
                })}
            </div>
        </div>
    )
}


export default Carousel;