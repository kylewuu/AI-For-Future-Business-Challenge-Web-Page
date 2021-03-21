import Progress from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState , useEffect} from 'react';

function ProgressBar(props) {


    var container = {
        marginTop: props.marginTop + "px",
        opacity: props.opacity
    }

    var title = {
        width: "100%",
        height: "30px",
        fontSize: props.fontSize + "px",
        fontWeight: props.fontWeight,
    }

    var barContainer = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    var bar = {
        backgroundColor: "#DBE7FF",
        width: "630px",
        height: "30px",
        borderRadius: "9px"
    }

    var percentage = {
        color: "black"
    }

    
  
    return (
    <div style={container}>
      <div style={title}>
          {props.title}
      </div>
      <div style={barContainer}>
        <Progress now={props.percentageValue} style={bar} />
        <div style={percentage}>{props.percentageValue}%</div>
      </div>
    </div>
  );
}


export default ProgressBar;