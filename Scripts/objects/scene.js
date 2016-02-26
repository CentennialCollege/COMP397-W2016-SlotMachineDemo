var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Scene Class
    var Scene = (function (_super) {
        __extends(Scene, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        function Scene() {
            _super.call(this);
            this.start();
        }
        // Add game objects to my scene in this method
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        // update game objects in my scene
        Scene.prototype.update = function () {
        };
        // Setup Background
        Scene.prototype._setupBackground = function (background) {
            this._blackBackground = new createjs.Bitmap(assets.getResult(background));
            this.addChild(this._blackBackground);
        };
        // FadeIn method
        Scene.prototype._fadeIn = function (transitionTime) {
            createjs.Tween.get(this._blackBackground).to({ alpha: 0 }, transitionTime, createjs.Ease.getPowInOut(2));
        };
        // FadeIn method
        Scene.prototype._fadeOut = function (transitionTime, callback) {
            this._blackBackground.alpha = 0;
            createjs.Tween.get(this._blackBackground).to({ alpha: 1 }, transitionTime, createjs.Ease.getPowInOut(2)).call(callback);
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map