let images = ['./img/img1.png', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg', './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg', './img/img13.jpg', './img/img14.jpg', './img/img15.jpg', './img/img16.jpg', './img/img17.jpg', './img/img18.jpg', './img/img19.jpg', './img/img20.jpg', './img/img21.jpg', './img/img22.jpg', './img/img23.jpg', './img/img24.jpg', './img/img25.jpg', './img/img26.jpg', './img/img27.jpg', './img/img28.jpg'];

function loadImages() {
    let content = document.getElementById('pictureList');
    content.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        content.innerHTML += /*html*/ `
        <div class="imgbox">
          <span class="check"><img src="./img/img1.png"></span>
          <img src="${images[i]}" onclick="openImage(${i})">
        </div>`;
    }
}

function openImage(i) {
    let bigImages = images[i];
    document.getElementById("overlay").style.display = "block";
    document.getElementById('bigImg').setAttribute('src', `${bigImages}`);

    if (i == 0) {
        document.getElementById('left').setAttribute('onclick', `openImage(${images.length - 1})`);
    } else {
        document.getElementById('left').setAttribute('onclick', `openImage(${i - 1})`);
    }

    if (i >= images.length - 1) {
        document.getElementById('right').setAttribute('onclick', `openImage(0)`);
    } else {
        document.getElementById('right').setAttribute('onclick',`openImage(${i + 1})`);
    }
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}