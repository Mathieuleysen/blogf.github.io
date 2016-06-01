function main() {
  var leesmeerknopindex = document.getElementById("leesmeerknopindex");
  var bodytop = document.body.scrollTop;

leesmeerknopindex.onclick= function(){
    test('S1');
    return false;
}


function scrollTo(to, duration) {
if (document.body.scrollTop == to) return;
var diff = to - document.body.scrollTop;
var scrollStep = Math.PI / (duration / 10);
var count = 0, currPos;
start = document.body.scrollTop;
scrollInterval = setInterval(function(){
    if (document.body.scrollTop != to) {
        count = count + 1;
        currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
        document.body.scrollTop = currPos;
    }
    else { clearInterval(scrollInterval); }
},10);
}

function test(elID){
var dest = document.getElementById(elID);
scrollTo(dest.offsetTop -100, 500);
}
}



window.onload = function() {
       main();
}
