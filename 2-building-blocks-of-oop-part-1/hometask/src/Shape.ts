import { Point } from './Point'

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points: Point[], color?: string, filled?: boolean);
    constructor(points: Point[], color: string, filled: boolean) {
        if (points.length < 3) {
            throw Error('Array of `points` should contain at least 3 points')
        }

        this.points = points
        this.color = color || 'green'
        this.filled = filled === undefined ? true : filled
    }

    public toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.join(', ')}.`
    }

    public getPerimeter(): number {
        return this.points.reduce((acc, point, index, points) => {
            if (index === points.length - 1) {
                return acc + point.distance(points[0])
            } else {
                return acc + point.distance(points[index + 1])
            }
        }, 0)
    }

    abstract getType(): string;
}
