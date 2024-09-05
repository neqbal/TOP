/*  gameBoardfunctions:
        placeShip(): places ship given the coordinates
        validCoordinates(): check for validity of coordinates
        generateRandomPosition()
*/
import { gameBoard } from "../src/gameBoard";
import { Ship } from "../src/ship";

describe("validCoordinates()", function() {
    it("checks coordinates out of bounds", () => {
        const game = new gameBoard();
        const tail1 = [3,2];
    
        const tail2=[-2,-4];
        expect(game.validCoordinates(tail1)).toBe(true);
        expect(game.validCoordinates(tail2)).toBe(false);
    })
}); 

describe("placeShip()", function() {
    it("place ship at empty space", () => {
        const board = new gameBoard();
        const ship = new Ship(4);
        const head = [7,5];
        const tail = [7, 3];

        const newBoard = [];
        for(var i=0; i<10; i++) newBoard[i] = new Array(10);
        newBoard[7][5] = ship;
        newBoard[7][4] = ship;
        newBoard[7][3] = ship;
        expect(board.placeShips(head, tail, 4)).toBe(true);
    }); 

    it("doesnt place ship at occupied place", () => {
        const board = new gameBoard();
        const head = [7,5];
        const tail = [4,5];

        board.placeShips([4,5], [4,5], 1);
        
        expect(board.placeShips(head, tail)).toBe(false);
    }); 

    it("generates random positions", () => {
        const board = new gameBoard();
        expect(board.randomPlacement()).toBe(true);
    });
});

describe("recieveAttack()", function() {

    const board = new gameBoard();
    const ship = new Ship(4);
    board.board[7][5] = ship;
    board.board[7][4] = ship;
    board.board[7][3] = ship;
    board.board[7][2] = ship;

    it("attacks a ship", () => {
        expect(board.recieveAttack(7,4)).toBe(true);
        expect(ship.hits).toBe(1);
    });

    it("attack is missed", ()=> {

    });
});