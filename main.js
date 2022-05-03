const imgs = document.querySelector(".carrossel");
const img = document.querySelectorAll(".lancamentos");
const cores = document.querySelector('#cores')
const container = document.querySelector(".white");



let width = container.clientWidth
console.log(width)
let idx = 0;
const carrossel = () => {
    idx++;

    if(idx > img.length / idx){
        idx = 0;
    };
    img.style.transform = `translateX(${-idx * 150}px)`;
	img.style.transition = `1s`;
}
//setInterval(carrossel, 1000);
