class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime() {
    let userTotalDeduct = this.users * 5
    let remain = this.data - userTotalDeduct 
    if (remain >= 10) {
      return true
    } else {
      return false
    }
  }
}

const library = new Network(50, 9) 
library.movieTime()