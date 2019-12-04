class Author {
  constructor(apiAuthor) {
    this.id = apiAuthor.id;
    this.name = apiAuthor.name;
    this.username = apiAuthor.username;
    this.email = apiAuthor.email;
    this.phone = apiAuthor.phone;
    this.address = apiAuthor.address;
    this.company = apiAuthor.company;
  }
}

export default Author;
