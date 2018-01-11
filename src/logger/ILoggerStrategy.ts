import "jquery";

export interface ILoggerStrategy {
    getMessage(messageHtml: string, currentHtml?: string): string;
    getSingleMessage(message: any): string;
}
