window.addEventListener('load', ()=>{
    const mobilemenu = new ClickManipulation({
        target: 'c-burger',
        closeTarget: 'notthis', //If We need a close target, add close for this 
        animated: 'l-mobile-sidebar',
        active: 'l-mobile-sidebar--active',
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
        window.addEventListener('click', (ev)=>{
            let target = ev.target;
            if ( this.closeTarget !== null && this.getClosest(target, this.classes.closeTarget) )
                this.deactivate();             
            else if ( this.getClosest( target, this.classes.target ) )
                this.activate();
            else if ( this.getClosest(target, this.classes.animated, 'not' ) ) 
                this.deactivate();   
        });
    }

    getClosest(target, classel, type = ''){
        return type === 'not' ? !target.closest(classel):target.closest(classel);
    }

    deactivate(){
        this.animated.classList.remove(this.active);
    }
    activate(){
        this.animated.classList.add(this.active);
    }

}