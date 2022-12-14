
class ScrollBg {
    constructor() {
        this.bgImgEl = null;

        this.start = function (elId) {
            var that = this;
            var elId = document.querySelector('#' + elId);
            this.bgImgEl = elId.querySelector('#bgImg');

            window.addEventListener('scroll', () => {
                that.bgImgEl.style.opacity = 1 - window.pageYOffset / 800;
                console.log(window.pageYOffset, 1 - window.pageYOffset / 800);
                that.bgImgEl.style.backgroundSize = 230 - (window.pageYOffset / window.innerHeight * 30) + 'vh';
                console.log(that.bgImgEl.style.backgroundSize);
            });
        };
    }
}
