function ObserveList() {
	this.observeList = [];
}

ObserveList.prototype.add = function(obj) {
	return this.observeList.push(obj);
}

ObserveList.prototype.empty = function() {
	this.observeList = [];
}

ObserveList.prototype.count = function() {
	return this.observeList.length;
}

ObserveList.prototype.get = function(index) {
	if(index > -1 && index < this.observeList.length) {
		return this.observeList[index];
	}
}

ObserveList.prototype.insert = function(obj, index) {
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

ObserveList.prototype.indexOf = function(startIndex) {
	let i = startIndex;

	while(i<this.observeList.length) {
		if(this.observeList[i] === obj) return i;
		i++;
	}
	return -1;
}

// subject
function Subject() {
	this.observers = new ObserveList();
}

Subject.prototype.addObserver = function(observer) {
	this.observers.add(observer);
}
Subject.prototype.removeObserver = function(observer) {
	this.observers.removeAt(this.observers.indexOf(observer, 0));
}

Subject.prototype.notify = function(context) {
	console.log(this.observers)
	let observeCount = this.observers.count();
	for(var i = 0; i < observeCount; i++) {
		this.observers.get(i).update(context)
	}
}

function Observer() {}