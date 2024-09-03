import { Ship } from "../src/ship";

describe("hit()", function() {
    it("hits the ship", () => {
        const ship = new Ship(5);
        ship.hit();
        ship.hit();
        expect(ship.hits).toBe(2);
    })
});

describe("check sink", function() {
    it("doesnt sink", () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    })

    it("sinks", () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })
});

