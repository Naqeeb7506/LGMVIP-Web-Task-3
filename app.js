let username = document.getElementById("name");
let email = document.getElementById("email");
let website = document.getElementById("website");
let image = document.getElementById("image");
let genderlist = document.querySelectorAll(".genderlist");
let skillslist = document.querySelectorAll(".skillslist");
let cancel = document.getElementById("cancel");
let submit = document.getElementById("submit");
let gender = "";
let skills = [];
let tablebody = document.getElementById("tablebody");
let users = [];

//
genderlist.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.checked) {
      gender = e.target.value;
    }
  });
});

//
skillslist.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.checked) {
      skills.push(item.value);
    } else {
      let filtered = skills.filter((item2) => {
        return item2 !== item.value;
      });
      skills = filtered;
    }
  });
});

//
let enroll = (event) => {
  event.preventDefault();
  //
  let user = {
    name: username.value,
    email: email.value,
    website: website.value,
    image: image.value,
    gender: gender,
    skills: skills,
  };
  //
  users.push(user);
  username.value = "";
  email.value = "";
  website.value = "";
  image.value = "";
  gender = "";
  skills = [];

  genderlist.forEach((item) => {
    item.checked = false;
  });

  skillslist.forEach((item) => {
    item.checked = false;
  });
  generateUser();
  //
};

//
function deleteUser(id) {
  let filtered = users.filter((item, index) => {
    return index !== id;
  });
  users = filtered;
  generateUser();
}

//
function generateUser() {
  tablebody.innerHTML = users
    .map((item, index) => {
      return `
      <tr>
              <td>
                <h2>${item.name}</h2>
                <p>${item.email}</p>
                <p>${item.website}</p>
                <p>${item.gender}</p>
                <p>${item.skills.join(",")}</p>
              </td>
              <td>
              <div class="img_box">
              <i class="fa-solid fa-xmark cancel" onclick="deleteUser(${index})"></i>
              <img src="${item.image}" alt="image" />
            </div>
              </td>
            </tr>
      `;
    })
    .join("");
}

//
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });

  let radio_btns = document.querySelectorAll("input[type='radio']");
  radio_btns.forEach((radio_btn) => {
    if (radio_btn.checked === true) {
      radio_btn.checked = false;
    }
  });

  let checkboxs = document.querySelectorAll("input[type='checkbox']");
  checkboxs.forEach((checkbox) => {
    if (checkbox.checked === true) {
      checkbox.checked = false;
    }
  });
});
