const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  }

//to put in a random order the array
const Shuffle=(a)=>{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  export {
      capitalize,
      Shuffle
  }