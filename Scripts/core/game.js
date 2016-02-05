/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var leftCave;
var rightCave;
var assetData = [
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "IntroCave", src: "../../Assets/images/IntroCave.png" },
    { id: "LeftCave", src: "../../Assets/images/LeftCave.png" },
    { id: "LeftCaveButton", src: "../../Assets/images/LeftCaveButton.png" },
    { id: "Nextbutton", src: "../../Assets/images/Nextbutton.png" },
    { id: "RightCave", src: "../../Assets/images/RightCave.png" },
    { id: "RightCaveButton", src: "../../Assets/images/RightCaveButton.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "StartOverButton", src: "../../Assets/images/StartOverButton.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.LEFT_CAVE:
            // show the PLAY scene
            stage.removeAllChildren();
            leftCave = new scenes.LeftCave();
            currentScene = leftCave;
            console.log("Starting LEFT_CAVE Scene");
            break;
        case config.Scene.RIGHT_CAVE:
            // show the game OVER scene
            stage.removeAllChildren();
            rightCave = new scenes.RightCave();
            currentScene = rightCave;
            console.log("Starting RIGHT_CAVE Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map