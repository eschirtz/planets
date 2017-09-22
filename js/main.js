function main(){
  // Setup canvas
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  canvas.style.backgroundColor = BACKGROUND_COLOR;
  // Set origin at the center
  context.translate(canvas.width/2, canvas.height/2);
  var ui = new UI(context);
  // Set up
  ui.showStart();
  var planets = [];

  // The main simulation
  function app(){
    var numPlanets = planets.length;
    var date = new Date();
    clearScreen();
    planets.forEach(function(planet){
      context.save();
      if(planet.level != 0){
        planet.orbit(context);
        context.translate(0, - planet.radius*5 - TRANSLATE_FACTOR);
      }
      planet.create(context);
    });
    planets.forEach(function(planet){
      context.restore();
    });
    ui.showManual();
    ui.showStats(planets.length);
    window.requestAnimationFrame(app);
  }
  // Keydown Event Handling //
  var appHasStarted = false;
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    var keyPressed = event.key;
    if(!appHasStarted){
      appHasStarted = true;
      app();
    }
    else{
      if(keyPressed === 'ArrowRight'){
        addPlanet();
      }
      if(keyPressed === 'ArrowLeft'){
        destroyPlanet();
      }
      if(keyPressed === 'ArrowUp'){
        ORBIT_SPEED = ORBIT_SPEED + .25;
      }
      if(keyPressed === 'ArrowDown'){
        ORBIT_SPEED = ORBIT_SPEED - .25;
      }
    }
  }, false);
  //// FUNCTIONS ////
  // Clears the screen
  function clearScreen(){
    // Store the current transformation matrix
    context.save();
    // Use the identity matrix while clearing the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Restore the transform
    context.restore();
  }
  function addPlanet(){
    planets.push(new Planet(BASE_RADIUS/(planets.length+1), Math.random()*.01, planets.length));
  }
  function destroyPlanet(){
    planets.pop();
  }
}
window.onload = main();
