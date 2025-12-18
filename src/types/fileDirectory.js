export default class FileDirectory {
    /**
     * @param {string} name 
     */
    constructor(name) {
        /** @type {string} */
        this.name = name;
        /** @type {Array<FileDirectory>} */
        this.subDirs = new Array();
        /** @type {Array<File>} */
        this.files = new Array();
    }

    /** @param {File} file */
    addFile(file) {
        this.files.push(file);
    }
    /** @param {FileDirectory} file */
    addSubDir(subDir) {
        this.subDirs.push(subDir);
    }
    /** @param {string} name */
    findFile(name) {
        return this.files.find(file => file.name == name);
    }
    /** @param {string} name */
    findSubDir(name) {
        return this.subDirs.find(subDir => subDir.name == name);
    }

    /** @param {FileList} source */
    static from(source) {
        const files = Array.from(source)
        const rootDirName = files[0].webkitRelativePath.split("/")[0];
        const tree = new FileDirectory(rootDirName);
        files.forEach((file) => {
            const parts = file.webkitRelativePath.split("/");
            let currentTree = tree;
            for (let i = 1; i < parts.length - 1; i++) {
                const dirName = parts[i];
                const foundTree = currentTree.subDirs.find((value) => value.name == dirName);
                if (foundTree) {
                    currentTree = foundTree;
                }
                else {
                    const newSubdir = new FileDirectory(dirName);
                    currentTree.addSubDir(newSubdir);
                    currentTree = newSubdir;
                }
            }
            currentTree.addFile(file);
        });

        return tree;
    }
}