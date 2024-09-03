class Ship {
    #hit;
    constructor(length) {
        this.length = length;
        this.#hit=0;
    }

    get hits() {
        return this.#hit;
    }

    hit() {
        this.#hit++;
    }
    isSunk() {
        return this.#hit===this.length;
    }
}

export {Ship};

