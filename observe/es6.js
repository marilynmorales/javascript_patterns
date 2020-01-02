class ObserveList {
    constructor() {
        this.observeList = [];
    }
    add(obj) {
        return this.observeList.push(obj);
    }
    empty() {
        this.observeList = [];
    }
    count() {
        return this.observeList.length;
    }
    get(index) {
        if(index > -1 && index < this.observeList.length) {
            return this.observeList[index];
        }
    }
    insert(obj, index) {
        let pointer = -1;
    
        if(index === 0) {
            this.observeList.unshift(obj);
            pointer = index;
        } else if(index === this.observeList.length) {
            this.observeList.push(obj);
            pointer = index;
        } else if(index > 0 && index < this.observerList.length) {
            this.observeList.splice(index, 0, obj);
            pointer = index
        }
        
        return pointer;
    }
    
    indexOf(startIndex) {
        let i = startIndex;
    
        while(i<this.observeList.length) {
            if(this.observeList[i] === obj) return i;
            i++;
        }
        return -1;
    }
}




// subject
class Subject {
    constructor() {
        this.observers = new ObserveList();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    }
    
    notify(context) {
        console.log(this.observers)
        let observeCount = this.observers.count();
        for(var i = 0; i < observeCount; i++) {
            this.observers.get(i).update(context)
        }
    }
}


class Observer {
    constructor() {}
    update() {}
}

class ConcreteSubject extends Subject {
    constructor(element) {
        super()
        this.element = element;

        this.element.addEventListener("click", () => {
            this.notify(this.element.checked)
        })
    }
}
class ConcreteObserver extends Observer {
    constructor(element) {
        super();
        this.element = element;
    }
    update(value) {
        this.element.checked = value;
    }
}


const addBtn = document.getElementById("addNewObserver"),
    container = document.getElementById("observersContainer"),
    controlCheckbox = new ConcreteSubject(
        document.getElementById("mainCheckbox")
    );
const addNewObserver = () => {
    const check = document.createElement("input");
    check.type = "checkbox";
    const checkObserver = new ConcreteObserver(check);

    controlCheckbox.addObserver(checkObserver);
    container.appendChild(check);
}

addBtn.addEventListener("click", addNewObserver)