import { TaskType } from "../enums/taskType.js"

export default class RawTaskInfo {
    /** 
     * @typedef {Object} RawTaskParams
     * @property {string} title
     * @property {TaskType} type
     */
    /** @param {RawTaskParams} params */
    constructor(params = {}) {
        /** @type {string} */
        this.title = params?.title ?? "";
        /** @type {TaskType} */
        this.type = params?.type ?? "";
    }
}