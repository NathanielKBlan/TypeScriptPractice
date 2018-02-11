"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(pressed, likes) {
        this.pressed = pressed;
        this.likes = likes;
    }
    LikeButton.prototype.isLiked = function () {
        if (this.pressed) {
            this.likes++;
            console.log("This post has been liked. Number of likes is " + this.likes);
        }
        else {
            console.log("This post has only " + this.likes + " likes.");
        }
    };
    Object.defineProperty(LikeButton.prototype, "isPressed", {
        get: function () {
            return this.pressed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "likesNum", {
        get: function () {
            return this.likes;
        },
        enumerable: true,
        configurable: true
    });
    return LikeButton;
}());
exports.LikeButton = LikeButton;
