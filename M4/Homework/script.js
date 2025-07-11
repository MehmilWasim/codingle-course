function showData() {
  
  var student = {
    name: "Ali",
    age: 20,
    course: "Web Development"
  };

  document.getElementById("objectOutput").innerHTML =
    "Student Name: " + student.name + "<br>" +
    "Age: " + student["age"] + "<br>" + 
    "Course: " + student.course;

  var fruits = ["Apple", "Banana", "Mango", "Orange"];

  document.getElementById("arrayOutput").innerHTML =
    "First fruit: " + fruits[0] + "<br>" +
    "Second fruit: " + fruits[1];

  document.getElementById("joinOutput").innerHTML =
    "All fruits: " + fruits.join(", ");

  var lastFruit = fruits.pop();
  document.getElementById("popOutput").innerHTML =
    "Removed last fruit: " + lastFruit + "<br>" +
    "Remaining fruits: " + fruits.join(", ");
}