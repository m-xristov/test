/// <reference types="jquery" />
import { ILoggerFormatter } from "./ILoggerFormatter";
import { ILoggerStrategy } from "./ILoggerStrategy";
import { LoggerRenderer } from "./loggerRenderer";
export declare const NEW_LINE: string;
export declare abstract class AbstractLoggerStrategy implements ILoggerStrategy {
    renderer: LoggerRenderer;
    formatter: ILoggerFormatter;
    constructor(renderer?: LoggerRenderer, formatter?: ILoggerFormatter);
    abstract write(message: any, $logElement: JQuery): void;
}
