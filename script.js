const showEx1 = () => {
    document.getElementById("assignments").classList.remove("hide");
    document.getElementById("assign-tab").classList.add("underline");
    document.getElementById("project").classList.add("hide");
    document.getElementById("proj-tab").classList.remove("underline");

};

const showEx2 = () => {
    document.getElementById("assignments").classList.add("hide");
    document.getElementById("assign-tab").classList.remove("underline");
    document.getElementById("project").classList.remove("hide");
    document.getElementById("proj-tab").classList.add("underline");
};

const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
      result.innerHTML = "Email sent successfully!";
    } else {
      result.innerHTML = "Error " + response.status + ". Email not sent.";
    }
};
  
const getEmailResult = async (e) => {
    const form = document.getElementById("contact");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("result").innerHTML =
        "Email not sent!";
    }
};

window.onload = () => {
    document.getElementById("assign-tab").onclick = showEx1;
    document.getElementById("proj-tab").onclick = showEx2;
    document.getElementById("contact").onsubmit = showEmailResult;
};