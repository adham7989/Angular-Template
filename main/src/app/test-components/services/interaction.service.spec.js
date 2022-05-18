"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const interaction_service_1 = require("./interaction.service");
describe('InteractionService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(interaction_service_1.InteractionService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
