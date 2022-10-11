import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(firstPoint, secondPoint, thirdPoint);
    constructor(firstPoint, secondPoint, thirdPoint, color?: string, filled?: boolean) {
        super([firstPoint, secondPoint, thirdPoint], color, filled)

        /*
            If Shape class has constructor like `constructor(points: Point[])` as required by the task,
            so here is will be an error due to 1 argument is expected but gor 3.
            Therefore, I added optional arguments to the first Shape constructor.
         */
    }

    toString(): string {
        return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`
    }

    getType(): string {
        const aLength = this.points[0].distance(this.points[1]).toFixed(2)
        const bLength = this.points[1].distance(this.points[2]).toFixed(2)
        const cLength = this.points[2].distance(this.points[0]).toFixed(2)

        if (aLength === bLength && aLength === cLength) {
            return 'equilateral triangle'
        }
        if (aLength === bLength || aLength === cLength || cLength === bLength) {
            return 'isosceles triangle'
        }

        return 'scalene triangle'
    }
}
