var pubsub = {};
(function(q){
    var topics = {},
        subUid = -1;
    // publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    q.publish = function(topic, args) {
        if(!topics[topic]) return false;

        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0
        while(len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    }

    q.subscribe = function(topic,func) {
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

    // Unsubscribe from a specific 
    // topic, based on a tokenized reference
    // to the subscription
    q.unsubscribe = function(token) {
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
}(pubsub))

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

pubsub.unsubscribe("inbox/newMessage", "Hello are you still here?")
