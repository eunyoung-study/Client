export default class PostSerivce {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }

    async getPosts(userid) {}

    async createPost(text) {
        return this.http.fetch(`/post`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ text, userid: "ey-study", name: "은영" }),
        });
    }

    async deletePost(postId) {}

    async updatePost(postId, text) {}

    getHeaders() {
        const token = this.tokenStorage.getToken();
        return {
            Authorization: `Bearer ${token}`,
        };
    }
}
