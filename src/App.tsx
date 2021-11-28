import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  const itemList = [
    {title: 'Bulbasaur', contentURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {title: 'Bulbasaur shinny', contentURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'},
    {title: 'Carro Azul', contentURL: 'https://www.angelsflypantufas.com.br/wp-content/uploads/2020/09/carro-azul.jpg'},
    {title: 'Boneca de Costas', contentURL: 'https://cdn.awsli.com.br/1000x1000/1421/1421406/produto/59820596e0fc7251c1.jpg'},
    {title: 'Boneca de Frente', contentURL: 'https://cdn.awsli.com.br/1000x1000/1421/1421406/produto/598205965c70a39b60.jpg'},
  ]

  const [userList, setUserList] = useState<any[]>([{title: '', contentURL: ''}])

  useEffect(() => { //requisição para resgatar seguidores
    const ENDPOINT = 'https://api.github.com/users/javelfreitas/followers';
    const SEARCH_URL = `${ENDPOINT}?per_page=10&page=${1}&order=DESC`;
    fetch(SEARCH_URL)
        .then(response => response.json())
        .then((newFollowers) => newFollowers.map( (follower: any) => {
          let newList = userList
          newList.push({title: follower.login, contentURL: follower.avatar_url});
          console.log(newList);
          
          setUserList([...newList])}
        ))    
  }, [])

  return (
    <div className="App">
        <Carousel itemList={itemList} />
        <Carousel itemList={userList} />
    </div>
  );
}

export default App;
