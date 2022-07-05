const uniContainer = document.getElementById("uni-container");
const universityName = document.getElementById("university-name");
const uniCountry = document.getElementById("uni-country");
const uniDomain = document.getElementById("uni-domain");
const nextBtn = document.getElementById("next-button");

let apiUni = [];
function newUni() {
  const nextUniversity = apiUni[Math.floor(Math.random() * apiUni.length)]; // pick random uni from apiUni array
  console.log(nextUniversity);
  uniCountry.textContent = nextUniversity.country;
  uniDomain.textContent = nextUniversity.domains;
  if (!nextUniversity.name) {
    universityName.textContent = "unknown";
  } else {
    universityName.textContent = nextUniversity.name;
  }
}

//get api
async function getUni() {
  const uniUrl =
    "http://universities.hipolabs.com/search?country=United+Kingdom";

  try {
    const response = await fetch(uniUrl);
    apiUni = await response.json();
    console.log(apiUni);
    newUni();
  } catch (error) {}
}

nextBtn.addEventListener("click", newUni);

getUni();
