import { ILoggerFormatter } from "./ILoggerFormatter";
import { ILoggerStrategy } from "./ILoggerStrategy";
import { LoggerFormatter } from "./loggerFormatter";

export abstract class AbstractLoggerStrategy implements ILoggerStrategy {
    constructor(public formatter: ILoggerFormatter = new LoggerFormatter()) {}
    public abstract getMessage(messageHtml: string, currentHtml?: string): string;
    public getSingleMessage(message: any): string {
        return this.formatter.formatMessage(message);
    }
}
