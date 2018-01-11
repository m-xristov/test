/// <reference types="jquery" />
import { ILoggerRenderer } from "./ILoggerRenderer";
import { ILoggerStrategy } from "./ILoggerStrategy";
export declare class LoggerRenderer implements ILoggerRenderer {
    private strategy;
    private id;
    constructor(strategy?: ILoggerStrategy);
    getLogElement(): JQuery;
    isRenderedLogElement(): boolean;
    getLogMessagesElement(): JQuery;
    getCurrentHtml(): string;
    render(message: any): void;
    getHtmlForSingleMessage(message: any): string;
    private renderMainElement();
}
