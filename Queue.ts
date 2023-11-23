class Queue {
    private items: Inhabitant[];

    constructor() {
        this.items = [];
    }

    enqueue(person: Inhabitant): void {
        this.items.push(person);
    }

    dequeue(): Inhabitant | undefined {
        return this.items.shift();
    }

    size(): number {
        return this.items.length;
    }

    getCurrentWaitTime(): number {
        return this.size() * 15; // Assuming 15 minutes per person
    }
}

export default Queue;