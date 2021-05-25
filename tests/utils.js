import path from 'path';
import { v4 as uuid } from 'uuid';
import fse from 'fs-extra';
import { assert } from 'chai';
import { createLogger, transports } from 'winston';
import { tmpFolder, entry } from './constants';

export const pause = time => new Promise(res => setTimeout(res, time));

export async function testFormatter(formatter, data, expected) {
    const fileId = uuid();
    const filePath = path.join(tmpFolder, `formatter-${fileId}.csv`);
    const logger = createLogger({
        level      : 'info',
        format     : formatter,
        transports : [
            new transports.Console(),
            new transports.File({
                filename : filePath
            })
        ]
    });

    data.forEach(item => {
        logger.log('info', item);
    });

    await pause(1000);

    const content = await fse.readFile(filePath);

    assert.equal(content.toString(), expected);
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
