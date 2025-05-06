let al1;
let al2;
let ang1;
let ang2;

function setup() {
  createCanvas(500, 500);
  al1slider = createSlider(10, 128, 64);
  al1slider.position(10, 10);
  al2slider = createSlider(10, 128, 64);
  al2slider.position(10, 32);
  strokeWeight(2);
}

function draw() {
  background(255);
  al1 = al1slider.value();
  al2 = al2slider.value();
  
  translate(width/2, height/2);
  x = mouseX - width/2;
  y = mouseY - width/2;
  
  stroke(0);
  fill(200,240,255);
  circle(0, 0, (al1+al2)*2);
  fill(255);
  circle(0, 0, (al1-al2)*2);
  
  aa = armAngles(x, y, al1, al2);
  ang1 = aa[0];
  ang2 = aa[1];
  line(0, 0, al1*cos(ang1), al1*sin(ang1));
  line(al1*cos(ang1), 
       al1*sin(ang1), 
       al1*cos(ang1) + al2*cos(ang1+ang2), 
       al1*sin(ang1) + al2*sin(ang1+ang2));
  
  stroke(0, 0, 0, 80)
  aa = armAngles2(x, y, al1, al2);
  ang1 = aa[0];
  ang2 = aa[1];
  line(0, 0, al1*cos(ang1), al1*sin(ang1));
  line(al1*cos(ang1), 
       al1*sin(ang1), 
       al1*cos(ang1) + al2*cos(ang1+ang2), 
       al1*sin(ang1) + al2*sin(ang1+ang2));
}

function armAngles(x, y, a, b) {
  let r = sqrt(x*x + y*y);
  let q2 = acos((r*r - a*a - b*b) / (2*a*b));
  let q1 = atan2(y, x) - asin(b * sin(q2) / r);
      
  return [q1, q2];
}

function armAngles2(x, y, a, b) {
  let r = sqrt(x*x + y*y);
  let q2 = -acos((r*r - a*a - b*b) / (2*a*b));
  let q1 = atan2(y, x) - asin(b * sin(q2) / r);
      
  return [q1, q2];
}