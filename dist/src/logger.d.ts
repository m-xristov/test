/// <reference types="jquery" />
import { LoggerRenderer } from "./loggerRenderer";
export declare class Logger {
    private renderer;
    constructor(renderer?: LoggerRenderer);
    write(message: any): void;
    getLogElement(): JQuery;
}
