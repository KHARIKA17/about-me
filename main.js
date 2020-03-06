function calc() {


  window.localStorage.setItem('fname', 'Harika');
  window.localStorage.getItem('fname');
  let m = parseFloat(document.getElementById("marks").value);
  console.log(typeof totalIn);

  let p = parseFloat(document.getElementById("tot_marks").value);
  if (marks == "" || tot_marks == "") {
      alert("Enter the marks");
  }
  document.getElementById("Percentage").innerHTML = (m/100) * p;
  return false;
  

  
}

