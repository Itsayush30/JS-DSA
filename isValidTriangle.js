// Ques . Given 3 integers  a , b , c . Check if we can form a triangle with the sides of the triangle having length a, b , c.

let a = 10,
  b = 20,
  c = 30;

// Logic -> for every side -> sum of the other 2 side should be greater than resp side.
if (a + b > c && a + c > b && b + c > a) {
  console.log("valid triangle");
} else {
  console.log("No");
}