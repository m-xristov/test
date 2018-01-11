import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";
export declare class PrependMessageLoggerStrategy extends AbstractLoggerStrategy {
    getMessage(messageHtml: string, currentHtml?: string): string;
}
