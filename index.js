function theBeatlesPlay(musicians, instruments) {
  var theyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    theyPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  return theyPlay
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}
