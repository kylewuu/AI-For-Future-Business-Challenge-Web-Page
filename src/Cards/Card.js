import "./Cards.css"
import refreshLogo from "../resources/refresh.png"
import ProgressBar from "./ProgressBar";

function refreshOnClick () {
  console.log("Click");
}

function Card(props) {
  return (
    <div class="card">
      <div class="title-container">
        <div>{props.title} {props.emoji}</div>
        <div class="title-update-container">
          <div class="last-updated-text">{props.lastUpdated}</div>
          <div class="refresh-button" onClick={refreshOnClick}><img class="refresh-icon" src={refreshLogo} alt="refresh"></img></div>
        </div>
      </div>

      <ProgressBar 
        title={"Overall score"}
        marginTop={15}
        ></ProgressBar>
      
      <ProgressBar 
        title={"Defects"}
        marginTop={35}
        ></ProgressBar>
      
      <ProgressBar 
        title={"Ripeness"}
        marginTop={20}
        ></ProgressBar>


    </div>
  );
}

export default Card;