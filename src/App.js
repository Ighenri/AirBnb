import Header from './Header';
import Hero from './Hero'
import Card from './Card'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card 
        img = "image1.png"
        rating = "5.0"
        reviewCount = {6}
        country = "Nigeria"
        title = "Life lesson eith katie zaferes"
        price = {136}
      />
    </div>
  );
}

export default App;
