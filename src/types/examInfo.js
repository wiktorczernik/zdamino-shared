import TaskInfo from "./taskInfo.js"

export default class ExamInfo {
    /** 
     * @typedef {Object} ExamParams
     * @property {string} fullName
     * @property {string} qualification
     * @property {number} year
     * @property {number} month
     * @property {string} version
     * @property {Array<TaskInfo>} tasks
     */
    /** @param {ExamParams} params */
    constructor(params = {}) {
        /** @type {string} */
        this.fullName = params?.fullName ?? ""
        /** @type {string} */
        this.qualification = params?.qualification ?? ""
        /** @type {number} */
        this.year = params?.year ?? -1
        /** @type {number} */
        this.month = params?.month ?? -1
        /** @type {string} */
        this.version = params?.version ?? ""
        /** @type {Array<TaskInfo>} */
        this.tasks = params?.tasks ?? []
    }
}