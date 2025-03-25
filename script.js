// Rectangle class
class Rectangle {
    // Constructor to initialize width and height
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers");
        }
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate area of the rectangle
    getArea() {
        return this._width * this._height;
    }
}

// Square class inheriting from Rectangle
class Square extends Rectangle {
    // Constructor to initialize side length
    constructor(side) {
        if (side <= 0) {
            throw new Error("Side must be a positive integer");
        }
        // Call the parent constructor with both width and height set to side
        super(side, side);
    }

    // Method to calculate perimeter of the square
    getPerimeter() {
        return this.width * 4;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
