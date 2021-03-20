

function ProgressBar(props) {
    var container = {
        marginTop: props.marginTop + "px"
    }

    var title = {
        width: "100%",
        height: "30px"
    }

    var barContainer = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    var bar = {
        backgroundColor: "black",
        width: "675px",
        height: "30px"
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
        <div style={bar}></div>
        <div style={percentage}>40%</div>
      </div>




    </div>
  );
}

export default ProgressBar;