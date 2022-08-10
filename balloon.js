class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

// Write function below
const balloonAttack = (p1, p2) => {
  let hits1 = p1.hitsPerMinute * 10
  let hits2 = p2.hitsPerMinute * 10
  if (hits1 > hits2) {
    return `${p1.name}`
  } else if (hits1 < hits2) {
    return `${p2.name}`
  } else if (hits1 = hits2) {
    return `Tie`
  }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
const p3 = new Player('p3', 9)
 
balloonAttack(p1, p2);