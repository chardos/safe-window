function windowGet(path, defaultValue = null) {
    const splitPaths = path.split('.');
    if (typeof window !== 'undefined') {
        let value = window;
        splitPaths.forEach(section => {
            value = value[section]
        });
        return value;
    } else {
        return defaultValue;
    }
}

module.exports = windowGet;