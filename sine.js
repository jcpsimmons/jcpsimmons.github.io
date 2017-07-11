void setup() {
  size(300, 200);
}
int h=0;
void draw() {
  background(#FFFFFF);
  float w = width/270.0f;
  stroke(1, 200);
  for (int i=0; i<270; i+=8) {
    float l = 100*sin(radians(i-h));
    float r =  4*sin(radians(i+h));
    float p =  4*sin(PI/4+radians(i-h));
    line(i*w, 0, i*w, height/2+l);
    ellipse(i*w, height/2+l, r, r);
    line(i*w+5, height, i*w+5, height/2-l);
    ellipse(i*w+5, height/2-l, p, p);
  }
  h++;
}
