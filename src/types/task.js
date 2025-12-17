import { LanguageCode } from "../enums/languageCode"
import { TaskType } from "../enums/taskType"

export default class Task {
    /** 
     * @typedef {Object} TaskParams
     * @property {string} title
     * @property {TaskType} type
     * @property {Map<LanguageCode, boolean>} solveStatus
     */
    /** @param {TaskParams} params */
    constructor(params) {
        /** @type {string} */
        this.title = params.title;
        /** @type {TaskType} */
        this.type = params.type;
        /** @type {Map<LanguageCode, boolean>} */
        this.solveStatus = params.solveStatus;
    }
}