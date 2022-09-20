import Cryptr from 'cryptr';
import { logger } from '../logger';

const cryptr = new Cryptr(process.env.SECRET || 'SECERT');

/**
 * Functionality used to encrypt user password
 * @param {*} password password
 * @returns {String} it returns encrypted password
 */
export const encrypt = async (password: string) => {
    try {
        return await cryptr.encrypt(password);
    } catch (err) {
        logger.error(`Error while encrypting password ${err}`);
        throw err;
    }
};

/**
 * Functionality used to decrypt user password
 * @param {*} encryptedPassword encryptedPassword value
 * @returns {String} it returns decrypted password
 */
export const decrypt = async (encryptedPassword: string) => {
    try {
        return await cryptr.decrypt(encryptedPassword);
    } catch (err) {
        logger.error(`Error while decrypting password ${err}`);
        throw err;
    }
};

export const getRandomString = () => Math.random().toString(20).slice(-5);

module.exports = {
    encrypt,
    decrypt,
    getRandomString,
};