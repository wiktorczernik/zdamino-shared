import Task from "./task.js"

export default class Exam {
    /** 
     * @typedef {Object} ExamParams
     * @property {string} qualification
     * @property {number} year
     * @property {number} month
     * @property {string} version
     * @property {Array<Task>} tasks
     */
    /** @param {ExamParams} params */
    constructor(params) {
        this.qualification = params.qualification
        this.year = params.year
        this.month = params.month
        this.version = params.version
        this.tasks = params.tasks
    }
}