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




