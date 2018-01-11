import "jquery";
import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";

export class SingleMessageLoggerStrategy extends AbstractLoggerStrategy {
    public getMessage(messageHtml: string): string {
        return messageHtml;
    }
}
