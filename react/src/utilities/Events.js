class Events {
 
    constructor(){ 
        this.eventList = { }; 
    }
    
    on(name, callback) {

        if(!this.eventList[name]) {
            this.eventList[name] = [];
        }
        this.eventList[name].push({callback:callback});
    }
    off(name){
        if(this.eventList[name]) {
            delete this.eventList[name];
        }
    }   
    broadcast(name){
        for(let i in this.eventList){
            if(i === name) {
                let args = Array.prototype.slice.call(arguments);
                args.splice(0, 1);
                for (const event of this.eventList[name]) {
                    event.callback.apply(this, args);
                }
            }
        }        
    }    
    getEventList(){
        return this.eventList
    }
}

export default new Events();