import path from 'path';
import { v4 as uuid } from 'uuid';
import fse from 'fs-extra';
import { assert } from 'chai';
import { createLogger, transports } from 'winston';
import { tmpFolder } from './constants';

export const pause = time => new Promise(resolve => setTimeout(resolve, time));

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
