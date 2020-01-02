function ObserveList() {
	this.observeList = [];
}

ObserveList.prototype.Add = function(obj) {
	return this.observeList.push(obj);
}

ObserveList.prototype.Empty = function() {
	this.observeList = [];
}

ObserveList.prototype.Count = function() {
	return this.observeList.length;
}

ObserveList.prototype.get = function(index) {
	if(index > -1 && index < this.observeList.length) {
		return this.observeList[index];
	}
}

ObserveList.prototype.Insert = function(obj, index) {
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
