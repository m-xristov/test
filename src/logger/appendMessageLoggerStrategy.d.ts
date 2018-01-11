/// <reference types="jquery" />
import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";
export declare class AppendMessageLoggerStrategy extends AbstractLoggerStrategy {
    write(message: any, $logElement: JQuery): void;
}
