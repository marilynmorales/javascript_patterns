function extend(extension, obj) {
    for(var key in extension) {
        obj[key] = extension[key];
    }
}