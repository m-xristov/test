import "jquery";
import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";
export declare class SingleMessageLoggerStrategy extends AbstractLoggerStrategy {
    getMessage(messageHtml: string): string;
}
