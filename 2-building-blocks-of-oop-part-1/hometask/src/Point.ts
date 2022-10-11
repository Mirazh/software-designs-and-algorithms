export class Point {
    private readonly x: number;
    private readonly y: number;

    // Why not x: number = 0, y: number = 0 ?
    constructor();
    constructor(x?: number, y?: number) {
        this.x = x || 0
        this.y = y || 0
    }

    public getX(): number {
        return this.x
    }

    public getY(): number {
        return this.y
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`
    }

    public distance(): number;
    public distance(other?: Point): number;
    public distance(x?: number | Point, y?: number): number {
        let x1 = this.x
        let x2 = 0
        let y1 = this.y
        let y2 = 0

        if (x || x === 0) {
            if (x instanceof Point) {
                x2 = x.getX()
                y2 = x.getY()
            } else {
                x2 = x
                y2 = y || 0
            }
        }

        return Math.hypot(x2-x1, y2-y1)
    }
}
