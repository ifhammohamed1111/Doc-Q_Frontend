// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("bangaloreBtn");
var span = document.getElementsByClassName("close")[0];
const tc = document.getElementById('t&c')
tc.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default behavior of the link
  window.location.reload(); // Reload the page
});
btn.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="city"]');
  const bangaloreBtn = document.getElementById("bangaloreBtn");
  const showOthers = document.getElementById('show-others');
  // const othersContainer = document.getElementById('others-container');
  const othersInput = document.getElementById('other');
  const citiesCont = document.querySelector('.cities-cont');
  const othersContainer = document.getElementById('others-container');

  othersInput.addEventListener('click', function () {
    citiesCont.style.display = 'none'; // Hide the cities container
    othersContainer.style.display = 'block'; // Show the others container
  });

  showOthers.addEventListener('click', function () {
    othersContainer.style.display = 'block'; // Show the input field and submit button
  });
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (this.checked) {
        bangaloreBtn.innerText = this.value;
      }
    });
  });
  document.getElementById('others-submit').addEventListener('click', function () {
    console.log('clicked'); // Check if the click event is triggered
    const inputElement = document.getElementById('input-field');
    btn.innerText = inputElement.value;
    modal.style.display = "none";

  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('others-submit').addEventListener('click', function () {
//     const inputElement = document.getElementById('other-city-input');
//     const btn = document.getElementById('banglorebtn');
//     if (inputElement) {
//       btn.innerText = inputElement.value;
//     } else {
//       console.error("Input element not found!");
//     }
//   });
// });







// console.log(surgeres_data);
// document.querySelectorAll('.slide-images img').forEach(image => {
//     image.onclick = () => {
//         // console.log('clicked');
//         document.querySelector('.big-image img').src = image.getAttribute('src')
//     }
// })







// >>>>>>> 0952d53c839204b69d7554d861f429e7fb555861
