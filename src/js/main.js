window.addEventListener('load', ()=>{
    const mobilemenu = new MobileMenu({
        burger: 'c-burger',
        aside: 'l-mobile-sidebar',
        active: 'l-mobile-sidebar--active',
    });

});

class MobileMenu{
    constructor(object){
        this.classes = {
            burger: `.${object.burger}`,
            aside: `.${object.aside}`
        };
        this.aside = document.querySelector(`.${object.aside}`);
        this.active = object.active;
        if ( this.aside )
            this.init();
    }

    init(){
        window.addEventListener('click', (ev)=>{
            let target = ev.target;
            if ( target.closest(this.classes.burger) ){
                this.aside.classList.add(this.active);
            }
            else if ( !target.closest(this.classes.aside) ){
                this.aside.classList.remove(this.active);
            }
        });
    }

}