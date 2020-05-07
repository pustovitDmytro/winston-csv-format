import { format } from 'winston';

export default function CSVFormatter(fields, options = {}) {
    const delim = options.delimiter || ';';
    const missed = options.missed || ''

    return format.printf(logObject => {
        const data = fields.map(key => {
            const value = logObject[key];

            return value === undefined ? missed : value;
        });

        return data.join(delim);
    });
}
