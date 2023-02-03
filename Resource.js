// resource.js

let resources;

if (typeof window !== 'undefined') {
// in browser environment, resources can be loaded from a remote URL
resources = {
'118n': 'https://example.com/118n-resources.json',
        '110n': 'https://example.com/110n-resources.json'
    };
} else {
    // in node environment, resources can be loaded from local file system
    resources = {
        '118n': './118n-resources.json',
        '110n': './110n-resources.json'
    };
}

const loadResource = (code) => {
    return new Promise((resolve, reject) => {
        if (!resources[code]) {
            reject(`Invalid resource code: ${code}`);
        }
        // fetch or require the resource, depending on the environment
        if (typeof window !== 'undefined') {
            fetch(resources[code])
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        } else {
            try {
                const data = require(resources[code]);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }
    });
};

export { loadResource };