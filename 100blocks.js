/*Program idea: a version of Tim Urban's "100 boxes a day" that shows you how many boxes you have left/used.
    If I put day start at 8'o'clock, then the day will finish 1000 minutes (16.66... hours) later.*/

//Options for showing time elapsed
//A. Grey out all used full boxes
//B. Continual greying out
//C. Used full boxes "disappear"
//D. Boxes "shrink" (get painted over by smaller box)
//E. Line to show current minute

/*<!--Rubber duck pseudo-code

    What I want the program to do:
    
    *. Calculate the amount of time (minutes) since the user's wake-up time, then display the results as "used" and "unused" boxes on a 10x10 grid.
    
    1. Draw
        a. canvas across the screen
        b. "10x10 grid"
            i.  loop 10 times
            ii. draw rect (same size)
        c. progress bar
            current solution ("time elapsed"-options A. and B. in combination):
            i. finished bar
                1. get value from amount of time progressed
                2. if more than rect-size times 10 (a row), paint full row and stop.
            ii. counting bar
                - incomplete
            
    2. Figure out
        a. Amount of time progressed since wake-up.
            i.  value from user input wake-up-time
            ii. get device time
            iii. calc difference
            iv. output (return?)
        
    3. Interactive options
        a. input wake-up-time
            
    -->*/

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

