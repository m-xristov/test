export interface IHelloProps { compiler: string; framework: string; }
import {Logger} from "./logger/logger";
import "./static/css/main.css";

export const hello = (props: IHelloProps) => {
    return `
    <h1>Hello from ${props.compiler} and ${props.framework}!</h1>`;
};

const logger = new Logger();
logger.write("First log!");
logger.write("Second log");
logger.write([1, 2, 3, {a: "Test", array: [{stringRepresentation: "String"}]}]);
