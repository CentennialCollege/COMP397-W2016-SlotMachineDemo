﻿module objects {
    export class Button extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        public width: number;
        public height: number; 
        //CONSTRUCTOR
        constructor(pathString: string, x: number, y: number, public isCentered: boolean) {
            super(assets.getResult(pathString));
            this.x = x;
            this.y = y;

            this.width = 150;
            this.height = 50;

            if (this.isCentered) {
                this.regX = this.width * 0.5;
                this.regY = this.height * 0.5;
            }

            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }

        // PRIVATE METHODS
        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.7;
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }


    }
} 