import Card from "./Cards/Card";
import './App.css';

function App() {
  var container = {
    display: 'flex', 
    alignItems:'center', 
    flexDirection:'column', 
    height:'100vh', 
    width:'100vw'
  }

  // var apple_date = new Date();
  var apple_date = "asdfasdf";
  var banana_date = new Date();

  return (
    
    <div 
      style={container}
    >
      <div id="background"></div>
      <div id="cards-container">
        <Card 
          title = {"Apples"}
          emoji = {"🍎"}
          lastUpdated = {apple_date.toString()}
          ></Card>
        <Card 
          title={"Bananas"}
          emoji = {"🍌"}
          lastUpdated = {banana_date.toString()}
          ></Card>

      </div>

    </div>
  );
}

export default App;
