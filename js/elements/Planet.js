// Planet
function Planet(radius,stepSize,level,color){
  // Parameters
  // this.context = context;
  this.radius = radius || 10;
  this.color = color || "hsl(" + Math.floor(Math.random() * 100) + ",60%, 50%)";;
  this.level = level || 0;
  this.stepSize = stepSize;
  this.angle = Math.floor(Math.random() * 20);
  this.currRadius = 0;
  // Functions
  this.create = function(context){
    if(this.currRadius < this.radius){
      this.currRadius = this.currRadius + GROWTH_RATE;
    }
    context.beginPath();
    context.arc(0,0,this.currRadius,0,2*Math.PI);
    context.fillStyle = this.color
    context.fill();
  }
  this.orbit = function(context){
    context.rotate(this.angle);
    this.angle = this.stepSize*ORBIT_SPEED + this.angle;
  }
}
