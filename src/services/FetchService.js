import { POSTS_URL, USERS_URL } from "../shared/Constants";

class FetchService {
  fetchPosts() {
    return fetch(POSTS_URL).then(response => response.json());
  }

  fetchMyPosts() {
    return fetch("http://localhost:4000/posts").then(response =>
      response.json()
    );
  }

  fetchUsers() {
    return fetch(USERS_URL).then(response => response.json());
  }
}

export const fetchService = new FetchService();
