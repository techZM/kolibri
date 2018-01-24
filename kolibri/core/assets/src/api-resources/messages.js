import rest from 'rest';

export default class MessageResource extends Resource {
    static resourceName() {
        return 'message';
    }

    static create(thread_id, msg, file) {
    }
}
