import { ILoggerFormatter } from "./ILoggerFormatter";
export declare class LoggerFormatter implements ILoggerFormatter {
    enableLineNumber: boolean;
    private lineCounter;
    constructor(enableLineNumber?: boolean);
    formatMessage(message: any): string;
    getStringRepresentationOfMessage(message: any): string;
    private trimRight(text);
}
