document.addEventListener("DOMContentLoaded", function (event) {
  var modal = document.getElementById("myModal");
  var contactBtn = document.querySelector("#contact-btn");
  var contactLink = document.querySelector("#contact-link");
  var closeBtn = document.querySelector(".close");

  var aboutSide = document.querySelector("#about-side");
  var projectSide = document.querySelector("#project-side");

  var foxHead = document.querySelector("#fox-head1");
  var foxBody = document.querySelector("#projects");

  var mapleProject = document.querySelector("#project-1");
  var mapleDesktop = document.querySelector("#project-1-desktop");
  var mapleGif = document.querySelector("#project-1-gif");

  var topButton = document.querySelector("#backToTopButton");

  window.onscroll = function () {
    moveFox();
    moveFoxBody();

    if (window.pageYOffset > 300) {
      topButton.classList.add("show");
    } else {
      topButton.classList.remove("show");
    }

    if (contactBtn.getBoundingClientRect().top <= 0) {
      expandBox();
      moveAboutSide();
      moveProjectSide();
    }
  };

  var frontBox = document.querySelector(".front-box");
  var backBox = document.querySelector(".back-box");
  var dataBox = document.querySelector(".database-box");
  var devBox = document.querySelector(".devops-box");
  var otherBox = document.querySelector(".other-box");

  var frontLabel = document.querySelector("#front-label");
  var backLabel = document.querySelector("#back-label");
  var dataLabel = document.querySelector("#databases-label");
  var devLabel = document.querySelector("#devops-label");
  var otherLabel = document.querySelector("#other-label");

  var frontTools = document.querySelector("#front-tools");
  var backTools = document.querySelector("#back-tools");
  var dataTools = document.querySelector("#data-tools");
  var devTools = document.querySelector("#dev-tools");
  var otherTools = document.querySelector("#other-tools");

  if (frontBox) {
    frontBox.addEventListener("click", focusFront);
    backBox.addEventListener("click", focusBack);
    dataBox.addEventListener("click", focusData);
    devBox.addEventListener("click", focusDev);
    otherBox.addEventListener("click", focusOther);
    frontLabel.addEventListener("click", focusFront);
    backLabel.addEventListener("click", focusBack);
    dataLabel.addEventListener("click", focusData);
    devLabel.addEventListener("click", focusDev);
    otherLabel.addEventListener("click", focusOther);
    frontTools.addEventListener("click", focusFront);
    backTools.addEventListener("click", focusBack);
    dataTools.addEventListener("click", focusData);
    devTools.addEventListener("click", focusDev);
    otherTools.addEventListener("click", focusOther);
    mapleProject.addEventListener("click", animatePicture);
    mapleDesktop.addEventListener("click", animatePicture);
    mapleGif.addEventListener("click", animatePicture);
    contactBtn.addEventListener("click", openModal);
    contactLink.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    topButton.addEventListener("click", backToTop);
  }

  function expandBox() {
    var vw = window.innerWidth;
    console.log(vw);

    if (vw < 500) {
      frontBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateZ(15vh) translateY(0vh) translateX(0vh)";
      backBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(-5vh) translateX(-5vh)";
      dataBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(23vh) translateY(-2vh) translateX(-10vh)";
      devBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateZ(23vh) translateY(-5vh) translateX(-15vh)";
      otherBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(-20vh) translateX(-20vh)";

      frontLabel.style.transform = "translateX(-60vw) translateY(1vh)";
      backLabel.style.transform = "translateX(-60vw) translateY(-4vh)";
      dataLabel.style.transform = "translateX(-60vw) translateY(-9vh)";
      devLabel.style.transform = "translateX(-60vw) translateY(-14vh)";
      otherLabel.style.transform = "translateX(-60vw) translateY(-19vh)";
    } else if (vw >= 500 || vw < 768) {
      frontBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateZ(15vh) translateY(0vh) translateX(0vh)";
      backBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(-5vh) translateX(-5vh)";
      dataBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(23vh) translateY(-2vh) translateX(-10vh)";
      devBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateZ(23vh) translateY(-10vh) translateX(-20vh)";
      otherBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(-20vh) translateX(-20vh)";

      frontLabel.style.transform = "translateX(-60vw) translateY(1vh)";
      backLabel.style.transform = "translateX(-60vw) translateY(-4vh)";
      dataLabel.style.transform = "translateX(-60vw) translateY(-9vh)";
      devLabel.style.transform = "translateX(-60vw) translateY(-14vh)";
      otherLabel.style.transform = "translateX(-60vw) translateY(-19vh)";
    } else if (vw >= 768 || vw < 1000) {
      frontBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateZ(15vh) translateY(0vh) translateX(0vh)";
      backBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(15vh) translateX(15vh)";
      dataBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh)translateY(30vh) translateX(30vh)";
      devBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateY(50vh)  translateZ(15vh) translateX(40vh)";
      otherBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(50vh) translateX(50vh)";

      frontLabel.style.transform = "translateX(-33vw) translateY(0vh)";
      backLabel.style.transform = "translateX(-33vw) translateY(15vh)";
      dataLabel.style.transform = "translateX(-33vw) translateY(30vh)";
      devLabel.style.transform = "translateX(-33vw) translateY(40vh)";
      otherLabel.style.transform = "translateX(-33vw) translateY(52vh)";
    } else if (vw >= 1000) {
      frontBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateZ(15vh) translateY(0vh) translateX(0vh)";
      backBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(15vh) translateX(15vh)";
      dataBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh)translateY(30vh) translateX(30vh)";
      devBox.style.transform =
        "rotateX(45deg) rotate(45deg) translateY(50vh)  translateZ(15vh) translateX(40vh)";
      otherBox.style.transform =
        "rotateX(45deg) rotate(45deg)  translateZ(15vh) translateY(50vh) translateX(50vh)";

      frontLabel.style.transform = "translateX(-27vw) translateY(5vh)";
      backLabel.style.transform = "translateX(-27vw) translateY(20vh)";
      dataLabel.style.transform = "translateX(-27vw) translateY(35vh)";
      devLabel.style.transform = "translateX(-27vw) translateY(45vh)";
      otherLabel.style.transform = "translateX(-27vw) translateY(55vh)";
    }
  }

  function focusFront() {
    frontBox.style.zIndex = 10;
    backBox.style.zIndex = 4;
    dataBox.style.zIndex = 3;
    devBox.style.zIndex = 2;
    otherBox.style.zIndex = 1;
    frontTools.style.backgroundColor = "#424860";
    backTools.style.backgroundColor = "transparent";
    dataTools.style.backgroundColor = "transparent";
    devTools.style.backgroundColor = "transparent";
    otherTools.style.backgroundColor = "transparent";
  }

  function focusBack() {
    frontBox.style.zIndex = 5;
    backBox.style.zIndex = 10;
    dataBox.style.zIndex = 3;
    devBox.style.zIndex = 2;
    otherBox.style.zIndex = 1;
    frontTools.style.backgroundColor = "transparent";
    backTools.style.backgroundColor = "#424860";
    dataTools.style.backgroundColor = "transparent";
    devTools.style.backgroundColor = "transparent";
    otherTools.style.backgroundColor = "transparent";
  }

  function focusData() {
    frontBox.style.zIndex = 5;
    backBox.style.zIndex = 4;
    dataBox.style.zIndex = 10;
    devBox.style.zIndex = 2;
    otherBox.style.zIndex = 1;
    frontTools.style.backgroundColor = "transparent";
    backTools.style.backgroundColor = "transparent";
    dataTools.style.backgroundColor = "#424860";
    devTools.style.backgroundColor = "transparent";
    otherTools.style.backgroundColor = "transparent";
  }

  function focusDev() {
    frontBox.style.zIndex = 5;
    backBox.style.zIndex = 4;
    dataBox.style.zIndex = 3;
    devBox.style.zIndex = 10;
    otherBox.style.zIndex = 1;
    frontTools.style.backgroundColor = "transparent";
    backTools.style.backgroundColor = "transparent";
    dataTools.style.backgroundColor = "transparent";
    devTools.style.backgroundColor = "#424860";
    otherTools.style.backgroundColor = "transparent";
  }

  function focusOther() {
    frontBox.style.zIndex = 5;
    backBox.style.zIndex = 4;
    dataBox.style.zIndex = 3;
    devBox.style.zIndex = 2;
    otherBox.style.zIndex = 10;
    frontTools.style.backgroundColor = "transparent";
    backTools.style.backgroundColor = "transparent";
    dataTools.style.backgroundColor = "transparent";
    devTools.style.backgroundColor = "transparent";
    otherTools.style.backgroundColor = "#424860";
  }

  function moveAboutSide() {
    var vw = window.innerWidth;
    var windowTop = window.pageYOffset;
    var topPosition = windowTop - 500;

    if (vw <= 436) {
      if (topPosition > 0 && topPosition < 1200) {
        var movePosition = topPosition + "px";
        // var leftPosition = windowTop - elementTop + "px";
        aboutSide.style.top = movePosition;
      }
    }
    if (vw > 436) {
      if (topPosition > 0 && topPosition < 900) {
        var movePosition = topPosition + "px";
        // var leftPosition = windowTop - elementTop + "px";
        aboutSide.style.top = movePosition;
      }
    }
  }

  function moveProjectSide() {
    var windowTop = window.pageYOffset;
    var topPosition = windowTop - 1500;

    if (topPosition > 0 && topPosition < 900) {
      var movePosition = topPosition + "px";
      // var leftPosition = windowTop - elementTop + "px";
      projectSide.style.top = movePosition;
    }
  }

  function moveFox() {
    var windowTop = window.pageYOffset;
    var elementTop = foxHead.getBoundingClientRect().top;
    var leftPosition = windowTop - elementTop;

    if (leftPosition > 100 && leftPosition < 350) {
      var movePosition = leftPosition + "px";
      // var leftPosition = windowTop - elementTop + "px";
      foxHead.style.left = movePosition;
    }
  }

  function moveFoxBody() {
    var windowTop = window.pageYOffset;
    var elementTop = foxBody.getBoundingClientRect().top;
    var rightPosition = windowTop - elementTop;

    if (rightPosition > 500 && rightPosition < 750) {
      var movePosition = rightPosition + "px";
      // var leftPosition = windowTop - elementTop + "px";
      foxBody.style.right = movePosition;
    }
  }

  function animatePicture() {
    if (this.id === "project-1") {
      mapleProject.style.display = "none";
      mapleDesktop.style.display = "block";
      mapleGif.style.display = "block";
    }
    if (this.id === "project-1-desktop" || this.id === "project-1-gif") {
      mapleProject.style.display = "block";
      mapleDesktop.style.display = "none";
      mapleGif.style.display = "none";
    }
  }

  function openModal() {
    modal.style.display = "block";
    if ((modal.style.display = "block")) {
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
