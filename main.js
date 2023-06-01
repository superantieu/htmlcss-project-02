const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const dots = $$(".dotdot");
const lists = $$(".list-left");
console.log(dots);
console.log(lists);
dots.forEach((dot, index) => {
    const list = lists[index];
    dot.onclick = function () {
        $(".dotdot.active").classList.remove("active");
        $(".list-left.active").classList.remove("active");
        this.classList.add("active");
        list.classList.add("active");
    };
});
