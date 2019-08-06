import CSV from '../entry';
import { testFormatter } from '../utils';
import Factory from '../Test';

const factory = new Factory();

suite('Configurations');

before(async () => {
    await factory.cleanTmpFolder();
    await factory.setTmpFolder();
});

test('Positive: default configuration', async function () {
    const formatter = CSV([ 'user', 'action' ]);
    const data = [
        { user: 'e3c0b365-26fd-54fc-afd7-d844c1d47a95', action: 'CREATE_POST' },
        { user: '', action: 'UPDATE_POST' },
        { user: 'e3c0b365-26fd-54fc-afd7-d844c1d47a95' },
        { },
        { user: 'e3c0b365-26fd-54fc-afd7-d844c1d47a95', time: '2019-08-06T11:46:46.434Z' },
        { action: 'DELETE_POST', user: 'e595b156-f526-5b94-ab76-c9fb610e286b' }
    ];

    const expected = `e3c0b365-26fd-54fc-afd7-d844c1d47a95;CREATE_POST
;UPDATE_POST
e3c0b365-26fd-54fc-afd7-d844c1d47a95;
;
e3c0b365-26fd-54fc-afd7-d844c1d47a95;
e595b156-f526-5b94-ab76-c9fb610e286b;DELETE_POST
`;

    await testFormatter(formatter, data, expected);
});


after(async () => {
    await factory.cleanTmpFolder();
});
