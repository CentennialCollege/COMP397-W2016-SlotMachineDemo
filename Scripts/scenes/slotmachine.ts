// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _slotMachineLabel:objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {    
            
            // add the SLOT MACHINE Label to the MENU scene
            this._slotMachineLabel = new objects.Label(
                "GAME GOES HERE", 
                "60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X, 
                config.Screen.CENTER_Y);
            this.addChild(this._slotMachineLabel);          
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // SLOT_MACHINE Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}