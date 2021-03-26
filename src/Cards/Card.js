import "./Cards.css"
import refreshLogo from "../resources/refresh.png"
import ProgressBar from "./ProgressBar";
import React from "react";


class Card extends React.Component {
  
  isApple = this.props.title == "Apples" ? true:false;

  constructor(props) {
    super(props);

    if (this.isApple) {
      this.state = {
        overallRating: 0,
        defectRating: 0,
        ripenessRating: 50,
        date: new Date(),
        notes: "N/A",
        count: 5
      }
    } else {
      this.state = {
        overallRating: 98,
        defectRating: 0,
        ripenessRating: 4,
        date: new Date(),
        notes: "Your bananas are not ready yet. Feel free to leave them for a bit longer before consuming them!",
        count: 6
      }
    }
      
    this.calculateOverallScore();
    this.refreshOnClick();
    this.refreshOnClick = this.refreshOnClick.bind(this);

    setInterval(this.refreshOnClick, 5000);
  }

  async refreshOnClick () {
    if (this.isApple) {
      const newStatus = await this.getStatus();
      const data = await newStatus.json();

      var progressNew = 100 * (data.damaged_apples_count)/(data.total_apples_count==0?1:data.total_apples_count);
      var newState = {...this.state};
      newState.defectRating = Math.floor(progressNew);
      newState.date = new Date();
      newState.count = data.total_apples_count;
      this.setState(state => ({...newState}));
      this.calculateOverallScore();
      this.setState(state => ({...state}));
    }

    else {
      var newState = {...this.state};
      newState.date = new Date();
      this.setState(state => ({...newState}));
    }
  }

  getDate() {
    var date = this.state.date.toString();
    var dateArray = date.split(" ");
    var dateString = "";
    for (var i = 0;i < 5; i++) {
      dateString = dateString.concat(dateArray[i]);
      dateString = dateString.concat(" ");
      console.log(dateString);
    }

    console.log(dateString);
    return dateString;
  }

  render() {
    return (
      <div class="card">
        <div class="title-container">
          <div class="title-text-container"><span class="title-text">{this.props.title}</span> <span class="title-emoji">{this.props.emoji}</span></div>
          
          <div class="title-update-container">
            <div class="last-updated-text">Last updated: {this.getDate()}</div>
            <div class="refresh-button" onClick={this.refreshOnClick}><img class="refresh-icon" src={refreshLogo} alt="refresh"></img></div>
          </div>
        </div>
        <div class="count-text">Count: <span class="count-number">{this.state.count.toString()}</span></div>
  
        <ProgressBar 
          title={"Overall score"}
          marginTop={15}
          percentageValue={this.state.count==0?0:this.state.overallRating.toString()}
          fontSize={20}
          fontWeight={700}
          opacity={1}
          ></ProgressBar>
        
        <ProgressBar 
          title={"Defects"}
          marginTop={35}
          percentageValue={this.state.count==0?0:this.state.defectRating.toString()}
          fontSize={14}
          fontWeight={"normal"}
          opacity={0.4}
          ></ProgressBar>
        
        <ProgressBar 
          title={"Ripeness"}
          marginTop={20}
          percentageValue={this.state.count==0?0:this.state.ripenessRating.toString()}
          fontSize={14}
          fontWeight={"normal"}
          opacity={0.4}
          ></ProgressBar>

        <div class="notes">
          {this.state.count==0?"No " + this.props.title.toLowerCase():this.state.notes}
        </div>
  
  
      </div>
    );
  }

  getStatus() {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      return fetch('https://image-detection-docker.azurewebsites.net/status', requestOptions);
  }

  calculateOverallScore() {
    var defects = 100 - this.state.defectRating;
    var ripeness = 100 - this.state.ripenessRating;
    var overallRating = (defects + ripeness) / 2;
    this.state.overallRating = Math.floor(overallRating);

    if (this.isApple) {
      if (this.state.overallRating > 75) {
        this.state.notes = "Your apples are fairly ripe with minimal defects. Overall rating is high, try to eat your apples while they're still good!";
      }
  
      else if (this.state.defectRating > 50) {
        this.state.notes = "Your apples have a lot of defects. Try to eat or use your apples before they get any worse.";
      }
  
      else {
        this.state.notes = "Your apples are doing fine. Try to keep an eye on the overall rating and consume them before they go bad.";
      }
    }
  }

  
}


export default Card;