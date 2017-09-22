// Holds all the ui elements to display to user
function UI(context){
  this.context = context;

  this.showStart = function(){
    this.context.font = "30px Courier New";
    this.context.fillStyle = PRIMARY_TEXT_COLOR;
    this.context.textAlign = "center";
    context.fillText(START_TEXT,0,0);
  }
  this.hideStart = function(){
    this.context.font = "bold 30px Courier New";
    this.context.fillStyle = BACKGROUND_COLOR;
    context.clearRect(0, 0, 1, 1);
  }
  this.showManual = function(){
    this.context.font = "18px Courier New";
    this.context.fillStyle = PRIMARY_TEXT_COLOR;
    this.context.textAlign = "center";
    context.fillText(MANUAL,0, (window.innerHeight/2) - 30);
  }
  this.showStats = function(numPlanets){
    this.context.font = "18px Courier New";
    this.context.fillStyle = PRIMARY_TEXT_COLOR;
    this.context.textAlign = "center";
    var statText = "Planets: " + numPlanets + " | Orbit Speed: " + ORBIT_SPEED.toFixed(2);
    context.fillText(statText,0, -(window.innerHeight/2) + 30);
  }
}
