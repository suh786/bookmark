export class BookmarkLogger{
    private _logger:any;

    constructor() {
        this._logger = require('logger').createLogger('bookmark.log')

        this._logger.format = (level:string, date:Date, message:string)=>{
            return `${date.toLocaleTimeString()} [${level}] ${message}`

        }
    }

    public log(obj:any){
        this._logger.info(JSON.stringify(obj));
    }
}