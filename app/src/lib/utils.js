export const rng = (min, max) => (Math.random() * (max - min) + min) * 0.01;

export const toInt = val => parseInt(val*100);

export const durstenfeldShuffle = (array)  => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}