import Header from './components/Header';
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

function App() {
  const newCard = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />

    )
    
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      {newCard}
    </div>
  );
}

export default App;
