/// <reference types="jquery" />
import { ILoggerStrategy } from "./ILoggerStrategy";
import { LoggerRenderer } from "./loggerRenderer";
export declare class Logger {
    private renderer;
    private loggerWriterStrategy;
    private idOfLogElement;
    private countCharsOfLogElementId;
    constructor(renderer?: LoggerRenderer, loggerWriterStrategy?: ILoggerStrategy);
    write(message: any): void;
    getLogElement(): JQuery;
    private createLogElement();
}
