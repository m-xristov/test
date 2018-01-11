import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";

export class PrependMessageLoggerStrategy extends AbstractLoggerStrategy {
    public getMessage(messageHtml: string, currentHtml?: string): string {
        return `${messageHtml}
                ${currentHtml}`;
    }
}
