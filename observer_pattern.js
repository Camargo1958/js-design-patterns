// Observer pattern - Notify objects about something happening - one (subject) to many (observers) dependency realtionship

function Subject() {
    this.observers = [] // array of observers functions
    // this.attach = observer => this.observers.push(observer)
    // this.detach = observer => this.observers = this.observers.filter(obs => obs !== observer)
    // this.notify = () => this.observers.forEach(observer => observer.update(this))
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter( fn => {
            if(fn !== fnToRemove) return fn
        })
    },
    notify: function() {
        //this.observers.forEach(observer => observer.update(this))
        this.observers.forEach( fn => {
            fn.call()})
    }
}

const subject = new Subject()

function Observer1() {
    //this.update = () => console.log("Observer 1 updated!") // didn't work
    console.log("Observer 1 updated!")
}
function Observer2() {
    //this.update = () => console.log("Observer 2 updated") // didn't work
    console.log("Observer 2 firing!")
}

function Observer3() {
    console.log("Observer 3 firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.subscribe(Observer3)
subject.notify()

subject.unsubscribe(Observer2)
subject.notify()
