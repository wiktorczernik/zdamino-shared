import RawTaskInfo from "./rawTaskInfo.js"

export default class RawExamInfo {
    /** 
     * @typedef {Object} RawExamParams
     * @property {Array<RawTaskInfo>} tasks
     */
    /** @param {RawExamParams} params */
    constructor(params = {}) {
        /** @type {Array<RawTaskInfo>} */
        this.tasks = params?.tasks ?? []
    }
}