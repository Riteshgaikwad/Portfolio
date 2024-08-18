var typeData = new Typed(".multiple-text", {
    strings: [
      "a Full Stack Developer",
      "a Web Developer",
      "a Programmer",
      "a Backend Developer",
      "a Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

// open the resume  
  let Btn_Resume=document.getElementById('resume');
  Btn_Resume.addEventListener("click",function(){
    const filePath="./assets/PROFILE.pdf";
    window.open(filePath);
  })


  //open contact me email 
  let Btn_contact=document.getElementById('cont');
  Btn_contact.addEventListener('click',function(){
    window.open("mailto:gaikwadritesh2003@gmail.com");
  })




function toggleFuntion(){
    var elememts=document.body;
    elememts.classList.toggle("dark-mode");
}



// Light and dark mode
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
  } else {
    icon.src =
      "https://cdn.iconscout.com/icon/free/png-256/free-night-mode-2-475098.png";
  }
};

// image change
document.getElementById("icon").addEventListener("click", function () {
  var currentImage = document.getElementById("icon").src;
  var currentText = document.getElementById("icon").innerHTML;

  if (
    currentImage.endsWith(
      "https://cdn.iconscout.com/icon/free/png-256/free-night-mode-2-475098.png"
    )
  ) {
    document.getElementById("icon").src = "sun.png";
    document.getElementById("icon").innerHTML = "Dark Mode";
  } else {
    document.getElementById("icon").src =
      "https://cdn.iconscout.com/icon/free/png-256/free-night-mode-2-475098.png";
    document.getElementById("icon").innerHTML = "Light Mode";
  }
});

// button click sound

const clickSoundUrl = "./click.mp3"; // Adjust this to your sound file location
function playClickSound() {
  const audio = new Audio(clickSoundUrl);
  audio.play();
}
