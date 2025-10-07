$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(650, 500, 200, 20, "blue");
createPlatform(350, 599, 200, 20, "black");
createPlatform(350, 450, 200, 20, "white");
createPlatform(700, 300, 200, 20, "gold");
createPlatform(1050, 500, 200, 20, "gray");



    // TODO 3 - Create Collectables
createCollectable("diamond", 700, 450, 0.5, 0.7);
createCollectable("diamond", 1050, 150, 0.5, 0.7);
createCollectable("diamond", 350, 500, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("left", 50, 2000);
createCannon("bottom", 341, 2000);
createCannon("right", 500, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
