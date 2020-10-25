export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg",
    },
    {
      id: 2,
      title: "Release It!",
      author: "Mivhael T. Nygart",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg",
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        // reject(new Error("Something wrong"));
        // }
        resolve(this.data);
      }, 700);
    });
  }
}
