import { ILoggerFormatter } from "./ILoggerFormatter";
import { ILoggerStrategy } from "./ILoggerStrategy";
export declare const NEW_LINE: string;
export declare abstract class AbstractLoggerStrategy implements ILoggerStrategy {
    formatter: ILoggerFormatter;
    constructor(formatter?: ILoggerFormatter);
    abstract getMessage(messageHtml: string, currentHtml?: string): string;
    getSingleMessage(message: any): string;
}
