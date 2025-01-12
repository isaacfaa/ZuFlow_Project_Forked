class Comment {
    constructor(comment, owner, taskid) {
        this.comment = comment;
        this.owner = owner;
        this.taskid = taskid;
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        this.id = `${timestamp}-${random.toString().padStart(3, '0')}`;
    }
}

module.exports = { Comment };