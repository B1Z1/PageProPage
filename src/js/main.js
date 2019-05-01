window.addEventListener('load', ()=>{
    const mobilemenu = new ClickManipulation({
        target: 'c-burger',
        closeTarget: 'l-mobile-sidebar', //If We need a close target, add close for this 
        animated: 'l-mobile-sidebar',
        active: 'l-mobile-sidebar--active',
    });

    const newsSwiper = new Swiper('#more-news', {
        speed: 400,
        spaceBetween: 40,
        touchRatio: 0,
        slidesPerView: 1,
        slidesPerColumn: 2,
        navigation: {
            nextEl: '#more-news--next',
            prevEl: '#more-news--prev',
        },
    });

    const trendingSwiper = new Swiper('#trending', {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 40,
        touchRatio: 0,
        navigation: {
            nextEl: '#trending--next',
            prevEl: '#trending--prev',
        },
        breakpoints: {
            1024: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
              slidesPerColumn: 2,
            }
          }
    });

});

/**
 * 
 * Mobile Menu Class
 * 
 */
class ClickManipulation{
    constructor(object){
        this.classes = {
            target: `.${object.target}`,
            closeTarget: `.${object.closeTarget}`,
            animated: `.${object.animated}`,
            active: object.active
        };
        this.target = document.querySelector(`.${object.target}`);
        this.closeTarget = object.closeTarget === 'notthis' ?  null:document.querySelector(`.${object.closeTarget}`);
        this.animated = document.querySelector(`.${object.animated}`);
        this.active = object.active;
        if ( this.animated )
            this.init();
    }

    init(){
        this.target.addEventListener('click',()=>{
            this.activate();
        })
        this.closeTarget.addEventListener('click',(ev)=>{
            if ( ev.target === this.animated )
                this.deactivate();
        })
    }

    deactivate(){
        this.animated.classList.remove(this.active);
    }
    activate(){
        this.animated.classList.add(this.active);
    }

}