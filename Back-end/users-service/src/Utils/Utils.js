class Utils {
    async base64Encrypt(value) {
        return await Buffer.from(value).toString('base64');
    }

    async base64Decrypt(value) {
        return await Buffer.from(value, 'base64').toString();
    }
}

module.exports = Utils