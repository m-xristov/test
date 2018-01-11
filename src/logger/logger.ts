import { LoggerRenderer } from "./loggerRenderer";

export class Logger {
    constructor(private renderer: LoggerRenderer = new LoggerRenderer()) {}
    public write(message: any): void {
        this.renderer.render(message);
    }
    public getLogElement(): JQuery {
        return this.renderer.getLogElement();
    }
}
