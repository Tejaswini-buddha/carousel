let image = document.querySelector(".image");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let images = [
"https://th.bing.com/th/id/R.0f1f4c3e3905a2655a2a29594fd8a7f8?rik=4CMf4dT3VqfIEA&riu=http%3a%2f%2fwww.tnex.co.in%2fwp-content%2fuploads%2f2020%2f10%2fimage-2-1500x1015.png&ehk=j81jR7zLgzyFSbrQ1pSNrL%2f75dsMYkPQFIZIkmqz2XE%3d&risl=&pid=ImgRaw&r=0",
 "https://blogs.nvidia.com/wp-content/uploads/2016/07/Deep_Learning_Icons_R5_PNG.jpg.png",
 "https://kpshopy.com/storage/app/blog/nK3Ibqpw5WFzWaFTYmz5xjb6ZrA3dDy5ySr81NPX.jpeg",
 "https://i1.wp.com/securenetworkers.com/wp-content/uploads/2019/12/AdobeStock_199796751-scaled.jpeg?fit=2560%2C1491&ssl=1"]

let index = 0
let last = images.length - 1;
image.setAttribute("src", images[index]);

function next(){
    if (index == last) {
        index = 0;
    }
    else {
        index = index+1;
    }     
    image.setAttribute("src",images[index]);
}

function previous() {
    if (index == 0) {
        index = last;
    } else {
        index = index -1;
    }
    image.setAttribute("src",images[index]);
}
left.addEventListener("click",previous);
right.addEventListener("click",next);

setInterval(() => {
    next();
}, 1500);
setTimeout (() => {
    clearInterval(id)
}, 750);

let randomnum = 0;
images.setAttribute("src",images[randomnum]);

let random = Math.floor((Math.random() * 10) % 3);

image.setAttribute("src",images[random]);    