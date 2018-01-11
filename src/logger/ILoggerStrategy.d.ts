/// <reference types="jquery" />
import "jquery";
export interface ILoggerStrategy {
    write(message: any, $logElement: JQuery): void;
}
