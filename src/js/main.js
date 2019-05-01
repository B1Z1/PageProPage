window.addEventListener('load', ()=>{
    const mobilemenu = new ClickManipulation({
        target: 'c-burger',
        closeTarget: 'l-mobile-sidebar', //If We need a close target, add close for this 
        animated: 'l-mobile-sidebar',
        active: 'l-mobile-sidebar--active',
    });

    const newsSwiper = new Swiper('#more-news', {
        speed: 400,
        spaceBetween: 0,
        touchRatio: 0,
        effect: 'fade',
        navigation: {
            nextEl: '.c-button__swiper--next',
            prevEl: '.c-button__swiper--prev',
        },
    });

    const trendingSwiper = new Swiper('#trending', {
        speed: 400,
        spaceBetween: 0,
        touchRatio: 0,
        effect: 'fade',
        navigation: {
            nextEl: '.c-button__swiper--next',
            prevEl: '.c-button__swiper--prev',
        },
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