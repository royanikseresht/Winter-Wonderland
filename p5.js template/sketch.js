// Winter Wonderland

var base_x;
var base_y;
var stem_h;
var snowflakes = [];

function setup() {
    createCanvas(1024, 576);
    base_x = width / 2;
    base_y = height - 50;
    stem_h = 300;
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: random(0, width),
            y: random(0, height),
            size: random(2, 8),
            speed: random(1, 3)
        });
    }
}

function draw() {
    background(50, 50, 50);
    drawHouse();
    drawGround();
    drawMoon();
    drawTree(base_x - 400, base_y - stem_h, 50, stem_h);
    drawTree(900, base_y - stem_h, 50, stem_h);
    drawSnow();
    addAtmosphericEffects();
}

function drawHouse() {
    // Draw the house
    fill(210, 180, 140); // House color
    rect(256, 220, 500, 400); // House body

    // Draw the roof
    fill(120, 50, 50); // Roof color
    triangle(756, 220, 256, 220, 506, 120);

    // Draw the door
    fill(150, 75, 0); // Door color
    rect(450, 420, 100, 200);

    // Draw the windows
    drawWindows();
}

function drawGround() {
    // Draw the snowy ground
    fill(255, 255, 255); // White color for the snow
    rect(0, height - 50, width, 50);
}

function drawTree(x, y, width, height) {
    push();
    translate(x, y);

    // Draw the trunk
    fill(34, 22, 11); // Darker brown color
    rect(0, 0, width, height);

    // Draw the branches
    fill(0, 50, 0); // Green color
    drawBranch(0, 0, width, height * 0.9, PI / 6);
    drawBranch(0, 0, width, height * 0.95, PI / 6);
    drawBranch(0, 0, width, height * 0.85, PI / 6);
    drawBranch(0, 0, width, height * 0.8, -PI / 6);

    pop();
}

function drawBranch(x, y, len, angle) {
    push();
    translate(x, y);
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -len);

    // Recursive branching
    if (len > 10) {
        drawBranch(0, -len, len * 0.9, angle + PI / 6);
        drawBranch(0, -len, len * 0.8, angle - PI / 6);
    }

    pop();
}

function drawWindows() {
    // Draw the windows
    if (mouseX >= 300 && mouseX <= 400 && mouseY >= 270 && mouseY <= 340) {
        fill(255, 255, 0); // Yellow color when mouse is over the window
    } else {
        fill(0, 0, 0); // Black color for the windows
    }
    rect(300, 270, 100, 70);

    if (mouseX >= 475 && mouseX <= 525 && mouseY >= 270 && mouseY <= 340) {
        fill(255, 255, 0); // Yellow color when mouse is over the window
    } else {
        fill(0, 0, 0); // Black color for the windows
    }
    rect(475, 270, 50, 70);

    if (mouseX >= 600 && mouseX <= 700 && mouseY >= 270 && mouseY <= 340) {
        fill(255, 255, 0); // Yellow color when mouse is over the window
    } else {
        fill(0, 0, 0); // Black color for the windows
    }
    rect(600, 270, 100, 70);

    if (mouseX >= 300 && mouseX <= 400 && mouseY >= 410 && mouseY <= 480) {
        fill(255, 255, 0); // Yellow color when mouse is over the window
    } else {
        fill(0, 0, 0); // Black color for the windows
    }
    rect(300, 410, 100, 70);

    if (mouseX >= 600 && mouseX <= 700 && mouseY >= 410 && mouseY <= 480) {
        fill(255, 255, 0); // Yellow color when mouse is over the window
    } else {
        fill(0, 0, 0); // Black color for the windows
    }
    rect(600, 410, 100, 70);
}

function drawMoon() {
    fill(255, 255, 255);
    ellipse(850, 100, 80, 80);
}

function drawSnow() {
    fill(255, 255, 255);
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
        ellipse(snowflake.x, snowflake.y, snowflake.size, snowflake.size);
        snowflake.x += random(-1, 1);
        snowflake.y += snowflake.speed;
        if (snowflake.y > height) {
            snowflake.y = -10;
            snowflake.x = random(0, width);
        }
    }
}

function addAtmosphericEffects() {
    // Add fog or haze effect
    fill(50, 50, 50, 100);
    rect(0, 0, width, height);
}