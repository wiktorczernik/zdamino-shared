import { LangCode } from "../enums/langCode.js"
import { TaskType } from "../enums/taskType.js"

export default class Task {
    /** 
     * @typedef {Object} TaskParams
     * @property {string} title
     * @property {TaskType} type
     * @property {{ [key: LangCode]: boolean }} solveStatus
     */
    /** @param {TaskParams} params */
    constructor(params) {
        /** @type {string} */
        this.title = params.title;
        /** @type {TaskType} */
        this.type = params.type;
        /** @type {{ [key: LangCode]: boolean }} */
        this.solveStatus = params.solveStatus;
    }
}