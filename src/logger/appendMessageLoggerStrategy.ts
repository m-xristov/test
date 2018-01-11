import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";

export class AppendMessageLoggerStrategy extends AbstractLoggerStrategy {
    public getMessage(messageHtml: string, currentHtml: string): string {
        return `${currentHtml}
                ${messageHtml}`;
    }
}
