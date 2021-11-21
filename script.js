let choice = "";

const colors = ["#bb0000", "#ffffff"];

Array.from(document.querySelectorAll(".option")).forEach(option => {
  option.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".option")).forEach((e) =>
    e.classList.remove("selected"));


    option.classList.add("selected");

    document.querySelector("#submit").disabled = false;
    choice = option.getAttribute("data-choice");
  });
});

let index = 0;

const stepUpTo = newIndex => {
  const oldIndex = index;
  index = newIndex;

  const oldCard = document.querySelector(`[data-tab-index="${oldIndex}"]`);

  const card = document.querySelector(`[data-tab-index="${index}"]`);

  oldCard.classList.add("goUp");
  card.classList.remove("hidden");

  setTimeout(() => card.classList.remove("goDown"), 1);

  setTimeout(() => oldCard.classList.add("hidden"), 175);

  if (index == 2) {
    setTimeout(() => {
      document.
      querySelector("section.finish").
      classList.add("fadeUp", choice == "7.5" ? "success" : "fail");

      setTimeout(() => {
        const end = Date.now() + 2 * 1000;

        (function frame() {
          confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 } });

          confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1 } });


          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
      }, 1700);
    }, 175);

    if (choice == "7.5") {
      document.querySelector("#iq").innerHTML = "∞";
      document.querySelector("#p").innerHTML = "100%";
      document.querySelector("#t").innerHTML = "Perfect Nerd";
    }
  }
};