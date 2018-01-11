import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";
export declare class AppendMessageLoggerStrategy extends AbstractLoggerStrategy {
    getMessage(messageHtml: string, currentHtml: string): string;
}
