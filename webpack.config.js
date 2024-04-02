const path = require('path');

module.exports = {
    // konfigurasi lainnya
    resolve: {
        fallback: {
            "http": require.resolve("stream-http")
        }
    },
    // konfigurasi lainnya
};
