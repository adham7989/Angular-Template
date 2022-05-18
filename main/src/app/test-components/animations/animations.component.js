"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationsComponent = void 0;
const core_1 = require("@angular/core");
const animations_1 = require("@angular/animations");
let AnimationsComponent = class AnimationsComponent {
    constructor() {
        this.roomState = 'on';
    }
    toogleLight() {
        this.roomState = (this.roomState === "off") ? "on" : "off";
        // if(this.roomState === 'off') this.roomState='on'
        // else this.roomState='off';
    }
    ;
};
AnimationsComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-animations',
        templateUrl: './animations.component.html',
        styleUrls: ['./animations.component.css'],
        animations: [
            (0, animations_1.trigger)('lightOnOff', [
                (0, animations_1.state)('off', (0, animations_1.style)({
                    backgroundColor: 'red',
                    border: '10px solid yellow',
                })),
                (0, animations_1.state)('on', (0, animations_1.style)({
                    backgroundColor: 'yellow',
                    border: '10px solid red',
                })),
                (0, animations_1.transition)('off => on', [(0, animations_1.animate)('3s  ease-in')]),
                (0, animations_1.transition)('on => off', [(0, animations_1.animate)('3s  ease-out')]),
            ])
        ]
    })
], AnimationsComponent);
exports.AnimationsComponent = AnimationsComponent;
