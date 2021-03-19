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
  return (
    
    <div 
      style={container}
    >
      <div id="background"></div>
      <div id="cards-container">
        <Card></Card>
        <Card></Card>

      </div>

    </div>
  );
}

export default App;
