import { Utils } from "./../utils";
import { ILoggerRenderer } from "./ILoggerRenderer";
import { ILoggerStrategy } from "./ILoggerStrategy";
import { PrependMessageLoggerStrategy} from "./prependMessageLoggerStrategy";

const COUNT_CHARS_LOG_ELEMENT = 20;
export class LoggerRenderer implements ILoggerRenderer {
    private id: string;
    constructor(private strategy: ILoggerStrategy = new PrependMessageLoggerStrategy()) {}
    public getLogElement(): JQuery {
        return $(`#${this.id}`);
    }
    public isRenderedLogElement(): boolean {
        return this.getLogElement().length > 0;
    }
    public getLogMessagesElement(): JQuery {
        return this.getLogElement()
                .find(">[data-messages]");
    }
    public getCurrentHtml(): string {
        return this.getLogMessagesElement()
                    .html();
    }
    public render(message) {
        if (!this.isRenderedLogElement()) {
            this.renderMainElement();
        }
        let html = this.getCurrentHtml();
        html = this.strategy.getMessage(this.getHtmlForSingleMessage(message),
                                        html);
        this.getLogMessagesElement()
            .html(html);
    }
    public getHtmlForSingleMessage(message: any): string {
        message = this.strategy.getSingleMessage(message);
        return `<li class="list-group-item">${message}</li>
        `;
    }
    /* Private */
    private renderMainElement(): void {
        this.id = Utils.generateId(COUNT_CHARS_LOG_ELEMENT);
        $(`<div class="container-fluid" id="${this.id}">
                <ul class="list-group" data-messages>
                </ul>
            </div>`)
                    .appendTo(document.body);
    }
}
