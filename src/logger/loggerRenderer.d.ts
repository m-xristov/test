/// <reference types="jquery" />
export declare class LoggerRenderer {
    private id;
    renderMainElement(): void;
    getLogElement(): JQuery;
    renderSingleMessage(message: string): void;
}
