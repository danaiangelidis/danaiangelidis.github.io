class Toy {
    constructor(name, price, age, rating, pic) {
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("toy");
        
        section.append(this.picture(this.pic));

        const middle = document.createElement("section");
        middle.classList.add("middle");
        section.append(middle);

        const text = document.createElement("section");
        text.classList.add("text");
        middle.append(text);

        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        text.append(h3);

        const ul = document.createElement("ul");
        text.append(ul);
        ul.append(this.listItem("Price: " + this.price));
        ul.append(this.listItem("Age Range" + this.age));
        ul.append(this.listItem("Rating: " + this.rating));
        
        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        pic.classList.add("image")
        return pic;
    }

    listItem(info) {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
};

const showToys = () => {
    const toyList = document.getElementById("toy-list");
    const toys = [];
    toys.push(new Toy("Nerf Dinosquad Terrodak", "$21.99", "8 years and above", 5.0, "nerf.jpg"));
    toys.push(new Toy("P' Lushes Lin Lebleu Plush", "$12.99", "3 years and above", 4.9, "plush.jpg"));
    toys.push(new Toy("DC THE FLASH MOVIE 7IN - FLASH", "$22.99", "8 years and above", 4.0, "flash.jpg"));
    toys.push(new Toy("Three Cheers For Girls Let's Sparkle Cosmetic Case", "$29.99", "8 years and above", 4.2, "makeup.jpg"));
    toys.push(new Toy("XGO3 Kids' Smartwatch Cell Phone with GPS", "$129.99", "4 to 11", 2.7, "watch.jpg"));
    toys.push(new Toy("Star Wars Wild Ridin' Grogu", "$19.93", "3 and above", 4.8, "baby-yoda.jpg"));

    toys.forEach(toy => {
        toyList.append(toy.item);
    });
};

window.onload = () => {
    showToys();
}