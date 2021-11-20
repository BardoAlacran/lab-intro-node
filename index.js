class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    //Cuál es el single value y porqué no lo inserta? misterios de la vida. Help.
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a - b;
    })
  }

  get(pos) {
    for (let i = 0; i < this.items.length; i++){
      if (i === pos) {
        return this.items[i];
      } 
      else if (this.items[pos] === undefined) {
        throw new Error('OutOfBounds')
      }
    }
  }

  max() {
    let max;
    for (let i = 0; i < this.items.length; i++) {
      max = this.items[i];
      if (this.items[i] < this.items[i+1]){
        max = this.items[i+1]
        return max;
      }
      //no sé cómo hacer que salga el error. Help 2.
      else if (this.length === 0){
        throw new Error('EmptySortedList')
      }
    }
  }

  min() {
    let min;
    for (let i = 0; i < this.items.length; i++) {
      min = this.items[i];
      if (this.items[i] < this.items[i+1]){
        min = this.items[i]
        return min;
      }
      //no sé cómo hacer que salga el error. Help 3.
      else if (this.items[i] !== 0){
        throw new Error('EmptySortedList')
      }
    }
  }

  sum() {
    let result = 0;
    
    this.items.reduce(function(acc, act){
      return result = acc + act;
    },0);
    return result;
  }

  avg() {
    let result = this.items.reduce(function(acc, act){
      return acc + act;
    });
    let average = result / this.items.length;
    return average;
  }
}

module.exports = SortedList;
