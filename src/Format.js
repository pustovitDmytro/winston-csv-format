import { format } from 'winston';

export default function CSVFormatter(fields, options = {}) {
    const delim = options.delimiter || ';';


    return format.printf(logObject => {
        const data = fields.map(key => {
            const value = logObject[key];

            return value === undefined ? '' : value;
        });

        return data.join(delim);
    });
}
