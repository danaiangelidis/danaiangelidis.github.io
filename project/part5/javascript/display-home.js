const getPosts = async () => {
    const url = "https://danaiangelidis.github.io/project/part5/json/home.json";
  
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
 };
  
const showPosts = async () => {
    let posts = await getPosts();
    let postsSection = document.getElementById("all-posts");
  
    posts.forEach((post) => {
        postsSection.append(getPostInfo(post));
    });
};
  
  const getPostInfo = (post) => {
    let sect = document.createElement("section");
    sect.classList.add("posts");

    let image = document.createElement("img");
    image.src = `${post.image}`;
    sect.append(image);
  
    let h3 = document.createElement("h3");
    h3.innerText = post.username;
    sect.append(h3);
  
    let p = document.createElement("p");
    p.innerHTML = post.desc;
    sect.append(p);
  
    return sect;
};
  
  
window.onload = () => showPosts();