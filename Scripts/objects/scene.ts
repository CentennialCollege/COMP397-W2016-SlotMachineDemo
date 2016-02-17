module objects {
    // Scene Class
    export class Scene extends createjs.Container {
        // PROTECTED INSTANCE VARIABLES
        protected _blackBackground: createjs.Bitmap;
         
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();            
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start(): void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update(): void {

        }
        
        // Setup Background
        protected _setupBackground(): void {
            this._blackBackground = new createjs.Bitmap(assets.getResult("BlackBackground"));
            this.addChild(this._blackBackground);
        }
        
        
        // FadeIn method
        protected _fadeIn(): void {
            createjs.Tween.get(this._blackBackground).to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2));
        }
        
        // FadeIn method
        protected _fadeOut(callback:any): void {
            this._blackBackground.alpha = 0;
            createjs.Tween.get(this._blackBackground).to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(2)).call(callback);
        }
    }
}