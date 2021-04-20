
var count = 0;
var countx = 0;
var counto = 0;
var countd = 0;
var player = 0;
var x = '<span class="las la-times text-primary"></span>';
var o = '<span class="lar la-circle text-warning"></span>';

function cellclick(cell) {
    var element = document.getElementById(cell);
    if(element.innerHTML != "") return;
    if(player == 1) {
        element.innerHTML = o;
        player -= 1;
        count++;
        win();
    } else {
        element.innerHTML = x;
        player += 1;
        count++;
        win();
    }
};

function win() {
    if(
        // row one x
        document.getElementById("cell-1").innerHTML == x && document.getElementById("cell-2").innerHTML == x && document.getElementById("cell-3").innerHTML == x ||
        // row two x
        document.getElementById("cell-4").innerHTML == x && document.getElementById("cell-5").innerHTML == x && document.getElementById("cell-6").innerHTML == x ||
        // row three x
        document.getElementById("cell-7").innerHTML == x && document.getElementById("cell-8").innerHTML == x && document.getElementById("cell-9").innerHTML == x ||
        // column one x
        document.getElementById("cell-1").innerHTML == x && document.getElementById("cell-4").innerHTML == x && document.getElementById("cell-7").innerHTML == x ||
        // column two x
        document.getElementById("cell-2").innerHTML == x && document.getElementById("cell-5").innerHTML == x && document.getElementById("cell-8").innerHTML == x ||
        // column three x
        document.getElementById("cell-3").innerHTML == x && document.getElementById("cell-6").innerHTML == x && document.getElementById("cell-9").innerHTML == x ||
        // digonal one x
        document.getElementById("cell-1").innerHTML == x && document.getElementById("cell-5").innerHTML == x && document.getElementById("cell-9").innerHTML == x ||
        // digonal two x
        document.getElementById("cell-3").innerHTML == x && document.getElementById("cell-5").innerHTML == x && document.getElementById("cell-7").innerHTML == x 
    ) {
        countx++;
        count = 0;
        document.getElementById("xwin").innerHTML = countx + " Wins";
        reset();
        check();
    } else if(
        // row one o
        document.getElementById("cell-1").innerHTML == o && document.getElementById("cell-2").innerHTML == o && document.getElementById("cell-3").innerHTML == o ||
        // row two o
        document.getElementById("cell-4").innerHTML == o && document.getElementById("cell-5").innerHTML == o && document.getElementById("cell-6").innerHTML == o ||
        // row three o
        document.getElementById("cell-7").innerHTML == o && document.getElementById("cell-8").innerHTML == o && document.getElementById("cell-9").innerHTML == o ||
        // column one o
        document.getElementById("cell-1").innerHTML == o && document.getElementById("cell-4").innerHTML == o && document.getElementById("cell-7").innerHTML == o ||
        // column two o
        document.getElementById("cell-2").innerHTML == o && document.getElementById("cell-5").innerHTML == o && document.getElementById("cell-8").innerHTML == o ||
        // column three o
        document.getElementById("cell-3").innerHTML == o && document.getElementById("cell-6").innerHTML == o && document.getElementById("cell-9").innerHTML == o ||
        // digonal one o
        document.getElementById("cell-1").innerHTML == o && document.getElementById("cell-5").innerHTML == o && document.getElementById("cell-9").innerHTML == o ||
        // digonal two o
        document.getElementById("cell-3").innerHTML == o && document.getElementById("cell-5").innerHTML == o && document.getElementById("cell-7").innerHTML == o
    ) {
        counto++;
        count = 0;
        document.getElementById("owin").innerHTML = counto + " Wins";
        reset();
        check();
    } else if(count == 9) {
        ++countd;
        count = 0;
        document.getElementById("draw").innerHTML = countd + " Draws";
        reset();
    }
};

function check() {
    if(countx == 5) {
        reset();
        countx = 0;
        counto = 0;
        countd = 0;
        document.getElementById("xwin").innerHTML = countx + " Wins";
        document.getElementById("owin").innerHTML = counto + " Wins";
        document.getElementById("draw").innerHTML = countd + " Draws";
        document.getElementById("modal").innerHTML = "PLAYER X WIN";
        $('#myModal').modal('toggle');
    } else if(counto == 5) {
        reset();
        countx = 0;
        counto = 0;
        countd = 0;
        document.getElementById("xwin").innerHTML = countx + " Wins";
        document.getElementById("owin").innerHTML = counto + " Wins";
        document.getElementById("draw").innerHTML = countd + " Draws";
        document.getElementById("modal").innerHTML = "PLAYER O WIN";
        $('#myModal').modal('toggle');
    }
};


function reset() {
    document.getElementById("cell-1").innerHTML = "";
    document.getElementById("cell-2").innerHTML = "";
    document.getElementById("cell-3").innerHTML = "";
    document.getElementById("cell-4").innerHTML = "";
    document.getElementById("cell-5").innerHTML = "";
    document.getElementById("cell-6").innerHTML = "";
    document.getElementById("cell-7").innerHTML = "";
    document.getElementById("cell-8").innerHTML = "";
    document.getElementById("cell-9").innerHTML = "";
};

function resetg() {
    reset();
    countx = 0;
    counto = 0;
    countd = 0;
    document.getElementById("xwin").innerHTML = countx + " Wins";
    document.getElementById("owin").innerHTML = counto + " Wins";
    document.getElementById("draw").innerHTML = countd + " Draws";
    document.getElementById("modal").innerHTML = "PLAYER O WIN";
}