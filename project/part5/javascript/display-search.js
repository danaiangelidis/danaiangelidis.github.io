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
    let postsSection = document.getElementById("found-posts");
  
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            if(tag.includes("winter")) {
                postsSection.append(getPostInfo(post));
            }
        });
    });
};
  
  const getPostInfo = (post) => {
    let sect = document.createElement("section");
    sect.classList.add("posts");

    let a = document.createElement("a");
    a.href = "../html/view-post.html";
    sect.append(a)

    let h3 = document.createElement("h3");
    h3.innerText = post.username;
    a.append(h3);

    let image = document.createElement("img");
    image.src = `${post.image}`;
    a.append(image);
  
    let p = document.createElement("p");
    p.innerHTML = post.desc;
    a.append(p);
    
    post.tags.forEach((tag) => {
        p.innerHTML += " " + tag;
    });
  
    return sect;
};
  
  
window.onload = () => showPosts();