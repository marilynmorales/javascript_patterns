class PubSub {
    constructor() {
        this.topics = {};
        this.subUid = -1;
    }    
    publish(topic, args) {
        let { topics } = this;
        if(!topics[topic]) return false;

        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0
        while(len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    }
    subscribe(topic,func) {
        let { topics, subUid } = this
        if(!topics[topic]) {
            topics[topic] = []
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token,
            func
        })
        return token;
    }
    unsubscribe(token) {
        let { topics } = this;
        for(var m in topics) {
            if(topics[m]) {
                for(var i = 0, j = topics[m].length; i < j; i++) {
                    if(topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token
                    } 
                }
            }
        }
        return this;
    }
    getAllTopics() {
        console.log(this.topics)
        return this.topics;
    }
}

let pubsub = new PubSub()
var messageLogger = function(topics, data) {
    console.log("Logging " + topics + ": " + data);
}

var subscription = pubsub.subscribe("inbox/newMessage", messageLogger)

pubsub.publish("inbox/newMessage", "Hello World!");
pubsub.publish("inbox/newMessage", ["test", "a", "b", "c"]);
pubsub.publish("inbox/newMessage", {
    sender: "hi@marilynmorales.com",
    body: "Hey again!"
})
pubsub.getAllTopics()
pubsub.unsubscribe(subscription)
pubsub.getAllTopics()
