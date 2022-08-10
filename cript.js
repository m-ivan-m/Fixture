// Write class below
class ShiftCipher {
  constructor(n) {
    this.n = n;
  }
  encrypt(str) {
    let upper = str.toUpperCase()
    let arr = upper.split('')
    let charArr = []
    for (let i = 0; i < arr.length; i++) {
      let l = arr[i].charCodeAt()
      if (l < 65 || l > 91) {
        charArr.push(l)
      } else if (l >= 65 || l <= 90) {
        let sum = l + this.n
        if (sum > 90) {
         let subt = sum - 26
         charArr.push(subt) 
        } else {
          charArr.push(sum)
        }        
      }
    }
    let newArr = charArr.map(n => {
      return String.fromCharCode(n)
    })
    return newArr.join('')
  }

  decrypt(str) {
    let upper = str.toUpperCase()
    let arr = upper.split('')
    let charArr = []
    for (let i = 0; i < arr.length; i++) {
      let l = arr[i].charCodeAt()
      if (l < 65 || l > 91) {
        charArr.push(l)
      } else if (l >= 65 || l <= 90) {
        let subt = l - this.n
        if (subt < 65) {
         let sum = subt + 26
         charArr.push(sum) 
        } else {
          charArr.push(subt)
        }        
      }
    }
    let newArr = charArr.map(n => {
      return String.fromCharCode(n)
    })
    return newArr.join('').toLowerCase()
  }
}

const cipher = new ShiftCipher(10)
cipher.encrypt('hola <3 como va')
console.log(cipher.encrypt('hola <3 como va'))
cipher.decrypt('RYVK <3 MYWY FK')
console.log(cipher.decrypt('RYVK <3 MYWY FK'))