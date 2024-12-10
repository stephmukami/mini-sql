import pc from "picocolors"
/**
 * @module logger
 * @description logs message to console
 */
const LOG_LEVELS = {
  DEBUG: "[DEBUG]",
  ERROR: "[ERROR]",
  INFO: "[INFO]",
  SUCCESS: "[SUCCESS]",
};

function formatDate(date){
    return Intl.DateTimeFormat( "en-GB",{
        year:"numeric",
        month:"short",
        day:"2-digit",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        fractionalSecondDigits:3,
        hour12:false



    }

    ).format(date);
}

export function logger(level,colorFn,logMethod,message, ... args){
    const timestamp = `[${formatDate(new Date())}]`;
    const coloredLevel = colorFn(level);
    logMethod(`${pc.dim(timestamp)} ${coloredLevel}${message}`, ...args);
}
export function logError(message,...args){
    logger(LOG_LEVELS.ERROR,pc.red,console.error,message,...args)
}
export function logInfo(message,...args){
    logger(LOG_LEVELS.INFO,pc.cyan,console.info,message,...args)
}
export function logSuccess(message,...args){
    logger(LOG_LEVELS.SUCCESS,pc.green,console.log,message,...args)
}
export function logDebug(message,...args){
    logger(LOG_LEVELS.DEBUG,pc.yellow,console.debug,message,...args)
}