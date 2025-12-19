import Task from "./task.js"

export default class Exam {
    /** 
     * @typedef {Object} ExamParams
     * @property {string} fullName
     * @property {string} qualification
     * @property {number} year
     * @property {number} month
     * @property {string} version
     * @property {Array<Task>} tasks
     */
    /** @param {ExamParams} params */
    constructor(params) {
        /** @type {string} */
        this.fullName = params.fullName;
        /** @type {string} */
        this.qualification = params.qualification
        /** @type {number} */
        this.year = params.year
        /** @type {number} */
        this.month = params.month
        /** @type {string} */
        this.version = params.version
        /** @type {Array<Task>} */
        this.tasks = params.tasks
    }
}