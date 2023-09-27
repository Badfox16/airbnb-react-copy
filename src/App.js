import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Data from './components/Data';

function App() {
  const cardElement = Data.map(dados => {
    return <Card 
    img={dados.img}
    star={dados.star}
    rating={dados.stats.rating}
    reviewCount={dados.stats.reviewCount}
    country={dados.country}
    title={dados.title}
    price={dados.price}
  />
  }) 
  return (
    <div className="container">
        <Navbar/>
        <Hero/>
        {cardElement}
    </div>
  );
}

export default App;
