/// <reference types="jquery" />
import "jquery";
import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";
export declare class SingleMessageLoggerStrategy extends AbstractLoggerStrategy {
    write(message: any, $logElement: JQuery): void;
}
