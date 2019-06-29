export interface ILogger{
    info(message: string);
    error(error: Error);
    warn(message: string);
}

class Logger implements ILogger{
     public info(message: string){
        console.info(message);
    }
     public error(error: Error){
        console.error("\x1b[31m%s\x1b[0m", error.message);
        console.error("\x1b[2m\x1b[31m%s\x1b[0m", error.stack);
    }
     public warn(message: string){
        console.warn(message);
    }
}

export const logger: ILogger = new Logger();
