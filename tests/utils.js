import path from 'path';
import fse from 'fs-extra';
import { assert } from 'chai';
import { createLogger, transports } from 'winston';
import ArrayTransport from 'winston-array-transport';
import { entry } from './constants';

export const pause = time => new Promise(res => setTimeout(res, time));

export async function testFormatter(formatter, data, expected) {
    const logs = [];
    const logger = createLogger({
        level      : 'info',
        format     : formatter,
        transports : [
            new transports.Console(),
            new ArrayTransport({
                array : logs
            })
        ]
    });

    data.forEach(item => {
        logger.log('info', item);
    });
    for (const line of expected) {
        const logged = logs.shift();

        assert.equal(logged, line);
    }
}

export function load(relPath, clearCache) {
    const absPath = path.resolve(entry, relPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];
    // eslint-disable-next-line security/detect-non-literal-require
    const result =  require(absPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];

    return result;
}

export function resolve(relPath) {
    return require.resolve(path.join(entry, relPath));
}
