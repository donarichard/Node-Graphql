import * as jwt from 'jsonwebtoken';
import { logger } from '../logger';
import { Users } from '../models/User'
/**
 * Functionality used to generate a token on successful login
 * @argument {user} user object
 * @returns {String} Token
 */
export const generate = async (user:any) => {
    try {
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        };
        return await jwt.sign(payload, process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY');
    } catch (err) {
        logger.error(`Error while generating token for user ${user.email} ${err}`);
        throw err;
    }
};

/**
 * Functionality used to verify/decode a token
 * @argument {token} token, Token
 * @argument {id} id User id
 * @returns {Boolean} True or false
 */
export const verifyUser = async (token:string) => {
    try {
        const verify:any =  await jwt.verify(token, process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY');
        const userData = await Users.findById(verify.id)
        if (!userData) return;
        // eslint-disable-next-line consistent-return
        return userData
    } catch (err) {
        logger.error(`Error while verifying token for user ${err}`);
        throw err;
    }
};

module.exports = {
    generate,
    verifyUser
};
