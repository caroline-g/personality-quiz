//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var day6Score = 0;
var strayKidsScore = 0;
var twiceScore = 0;
var mamamooScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var result = document.getElementById("result");
var resultDetails = document.getElementById("result-details");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", day6);
q1a2.addEventListener("click", strayKids);
q1a3.addEventListener("click", twice);
q1a4.addEventListener("click", mamamoo);

q2a1.addEventListener("click", day6);
q2a2.addEventListener("click", strayKids);
q2a3.addEventListener("click", twice);
q2a4.addEventListener("click", mamamoo);

q3a1.addEventListener("click", day6);
q3a2.addEventListener("click", strayKids);
q3a3.addEventListener("click", twice);
q3a4.addEventListener("click", mamamoo);

q4a1.addEventListener("click", day6);
q4a2.addEventListener("click", strayKids);
q4a3.addEventListener("click", twice);
q4a4.addEventListener("click", mamamoo);

q5a1.addEventListener("click", day6);
q5a2.addEventListener("click", strayKids);
q5a3.addEventListener("click", twice);
q5a4.addEventListener("click", mamamoo);

function strayKids() {
  strayKidsScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function day6() {
  day6Score += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function twice() {
  twiceScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function mamamoo() {
  mamamooScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (twiceScore >= 3) {
    result.innerHTML = "Twice!";
    resultDetails.innerHTML =
      "Twice's songs are sweet, fun, and adorable — just like you! To sample some of their cute and uplifting pop tunes, we recommend starting with Likey, Yes or Yes, Fancy, or Knock Knock.";
  } else if (day6Score >= 3) {
    result.innerHTML = "Day6!";
    resultDetails.innerHTML =
      "If you're feeling a little down, lost, or wistful, Day6 is the band for you. This instrumental pop-rock band is known for the passion and emotion they put into their music. Their excellent selection of sad songs includes Afraid, Hurt Road, I Need Somebody, and All Alone; more energetic choices include Shoot Me, Blood, Better Better, and I Just.";
  } else if (strayKidsScore >= 3) {
    result.innerHTML = "Stray Kids!";
    resultDetails.innerHTML =
      "Like you, Stray Kids are full of energy and vigor. Their intense, rave/dance-ready songs are sure to pump you up; God's Menu, Hellevator, Levanter, and My Pace are great places to start.";
  } else if (mamamooScore >= 3) {
    result.innerHTML = "Mamamoo!";
    resultDetails.innerHTML =
      "Your smooth, sophisticated, boss energy matches Mamamoo's empowering and unique R&B style. Check out Gogobebe, Egotistic, Hip, or member Hwasa's Twit and ";
  } else if ((day6Score = 2)) {
    result.innerHTML = "Day6!";
    resultDetails.innerHTML =
      "Day6, one of Korea's most successful instrumental bands, is known for the passion and emotion they put into their music. Their excellent selection of sad songs includes Afraid, Hurt Road, I Need Somebody, and All Alone; more energetic choices include Shoot Me, Blood, Better Better, and I Just.";
  } else if ((twiceScore = 2)) {
    result.innerHTML = "Twice!";
    resultDetails.innerHTML =
      "Twice's songs are sweet, fun, and adorable — just like you! To sample some of their cute and uplifting tunes, we recommend starting with Likey, Yes or Yes, Fancy, or Knock Knock.";
  } else if ((strayKidsScore = 2)) {
    result.innerHTML = "Stray Kids!";
    resultDetails.innerHTML =
      "Like you, Stray Kids are full of energy and vigor. Their intense, rave/dance-ready songs are sure to pump you up; God's Menu, Hellevator, Levanter, and My Pace are great places to start.";
  } else if ((mamamooScore = 2)) {
    result.innerHTML = "Mamamoo!";
    resultDetails.innerHTML =
      "Your smooth, sophisticated, boss energy matches Mamamoo's empowering and unique style. Check out Gogobebe, Egotistic, Hip, or member Hwasa's Twit and ";
  }
}
