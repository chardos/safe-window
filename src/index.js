function windowGet(path, defaultValue = null) {
    const splitPaths = path.split('.');
    if (typeof window !== 'undefined') {
        let value = window;

        for(let i = 0; i < splitPaths.length; i++) {
            const section = splitPaths[i];
            value = value[section]

            if (!value) {
                return defaultValue;
            }
        }
        return value;
    } else {
        return defaultValue;
    }
}

module.exports = windowGet;