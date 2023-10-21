const submitPost = (e) => {
    e.preventDefault();

    const res = document.getElementById("image-preview");

    const form = document.getElementById("make-post");
    const description = form.elements["desc"].value;

    document.getElementById("results").classList.remove("hide");
    document.getElementById("results").innerHTML += '<p>'+description+'</p>';
};

/* Snippet starts here */
/* Used to display the image file input in results div */
/* Source: https://khalidabuhakmeh.com/client-side-image-previews-with-javascript */
function updatePreview(input, target) {
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
        let img = document.getElementById(target);
        img.src = reader.result;
    }
};
/* Snippet ends here */

window.onload = () => {
    document.getElementById("make-post").onsubmit = submitPost;
};