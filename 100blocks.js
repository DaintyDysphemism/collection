/*Program idea: a version of Tim Urban's "100 boxes a day" that shows you how many boxes you have left/used by a) showing a line where the day is currently at and/or b) greying out the boxes that have already been used.
When to start the day? Either change the variable from the code or have user input.
    If I put day start at 8'o'clock, then the day will finish 1000 minutes (16.66... hours) later.*/
    
//Options for showing time elapsed
//A. Grey out all used full boxes
//B. Continual greying out
//C. Used full boxes "disappear"
//D. Boxes "shrink" (get painted over by smaller box)

//Draws a 10x10 grid using a loop, where the x and y positions of each rectangle are linked to the size of each rectangle for easy resizing.

var boxSize = 35;
var gridstart = {
    x: 23,
    y: 29
};

for (var boxX = 0; boxX < 10; boxX++) {
    for (var boxY = 0; boxY < 10; boxY++) {
            fill(252, 252, 252);
            stroke(0, 0, 0);
            rect(boxX*boxSize+gridstart.x, boxY*boxSize+gridstart.y, boxSize, boxSize);
    }
}

var wakeupTime = (8*60)+(30); //defines start time in minutes (hour + minutes)
var currentMinuteTotal = minute() + (60*hour()); //calculates minutes since midnight
var minsinwup = abs(currentMinuteTotal-wakeupTime);
//println(minsinwup);
//var placeholder = (minsinwup%boxSize)*10;

//10 pixels = 10 minutes
//thing a: minute to "pixel" (percentage of rectangle)
    // aa: increase by (0.10*boxSize)*minsinwup
        //aaa: ??how to make increase in rows?
//thing b: stop and return to initialxPos
//println(minsinwup);

var i = 0;
draw = function() {
    fill(181, 181, 181);
    noStroke();
    rect(gridstart.x, gridstart.y, boxSize*10, boxSize*i); //full rect
    if (minsinwup > 100) {
        if (minsinwup < 200) {
            i = 1;
        }
        if (minsinwup > 200 && minsinwup < 300) {
            i = 2;
        }
        if (minsinwup > 300 && minsinwup < 400) {
            i = 3;
        }
        if (minsinwup > 400 && minsinwup < 500) {
            i = 4;
        }
        if (minsinwup > 500 && minsinwup < 600) {
            i = 5;
        }
        if (minsinwup > 600 && minsinwup < 700) {
            i = 6;
        }
        if (minsinwup > 700 && minsinwup < 800) {
            i = 7;
        }
        if (minsinwup > 800 && minsinwup < 900) {
            i = 8;
        }
        //leave the bottom row to the counter, with a max
    }
    var boxWidth = (0.10*boxSize)*minsinwup-(100*i);
    fill(219, 120, 120);
    rect(gridstart.x, gridstart.y+boxSize*i, boxWidth, boxSize); //counter rect (missing calculations)
};

/*draw = function() {
    fill(181, 181, 181);
    noStroke();
    if (minsinwup > 100) {
        boxWidth = (10*boxSize);} //only creates one big box...
        //array through boxWidths or create separate variable to store minsinwup numbers for width?
    rect(gridstart.x, gridstart.y, boxWidth, boxSize);
    rect(gridstart.x, gridstart.y+boxSize, boxWidth, boxSize);
};*/
// For every 10th minute since wakeupTime, add another fill(grey) box.
/*draw = function() {
    fill(181, 181, 181);
    noStroke();
    rect(23, 29, boxWidth, boxSize);
    rect(23, 29, boxSize, boxHeight);
};*/

/*
//junk for reference
var i = 0;
while(i < 10) {
     fill(181, 181, 181);
     noStroke();
     rect(i*boxSize+23, 29, boxSize, boxSize);
     i++;
} */

