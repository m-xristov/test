/// <reference types="jquery" />
export interface ILoggerRenderer {
    render(html: string): void;
    getLogElement(): JQuery;
    isRenderedLogElement(): boolean;
    getHtmlForSingleMessage(message: string): string;
    getCurrentHtml(): string;
}
