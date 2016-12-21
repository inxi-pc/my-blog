export default class Pagination {
    constructor(offset, limit) {
        this.setOffset(offset);
        this.setLimit(limit);
    }

    setOffset(offset) {
        this.offset = offset < 0 ? 0 : offset;
    }

    setLimit(limit) {
        this.limit = limit <= 0 ? 10 : limit;
    }
}
