import mongoose from 'mongoose'
import { logger } from '../logger';

(async () => {
    const URL = process.env.DATABASE_URL || 'localhost'
    await mongoose.connect(URL, err => {
        if (err) {
            logger.error(`💔Connection to DB failed💔 ${URL}`);
        } else {
            logger.info(`🔥Connection to DB was successful🔥 ${URL}`);
        }
    });
    mongoose.connection.once('open', () => console.log(`Connected to mongo at ${URL}`));
})();
