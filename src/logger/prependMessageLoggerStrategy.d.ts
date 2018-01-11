/// <reference types="jquery" />
import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";
export declare class PrependMessageLoggerStrategy extends AbstractLoggerStrategy {
    write(message: any, $logElement: JQuery): void;
}
