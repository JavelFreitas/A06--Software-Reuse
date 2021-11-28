import { useState } from "react";
import Arrow from "./Arrow";
import BulletPoint from "./BulletPoint";
import './Carousel.css'
import Content, {ContentProps} from "./Content";

const Carousel = () => {

    const [itemList, setItemList] = useState<ContentProps[]>(
        [{title: 'Bulbasaur', contentURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
         {title: 'Bulbasaur shinny', contentURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'},
         {title: 'Carro Azul', contentURL: 'https://www.angelsflypantufas.com.br/wp-content/uploads/2020/09/carro-azul.jpg'},
         {title: 'Boneca de Costas', contentURL: 'https://cdn.awsli.com.br/1000x1000/1421/1421406/produto/59820596e0fc7251c1.jpg'},
        ]
    )

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