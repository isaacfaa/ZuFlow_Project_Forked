class Task {
    constructor(name, location, description, owner) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.owner = owner;

        // Generate a unique ID by combining a timestamp and a random number
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        this.id = `${timestamp}-${random.toString().padStart(3, '0')}`;
    }
}

module.exports = { Task };
