const { produce } = require('immer');

const baseState = [
    {
        todo: 'Learn ES6',
        done: true,
    },
    {
        todo: 'Try immer',
        done: false,
    },
];

const newState = produce(baseState, (draft) => {
    draft[1]['done'] = true;
    draft.push({
        todo: 'Tweet about it',
    });
});

const cloneObj = (obj) => JSON.parse(JSON.stringify(baseState));
const newState2 = cloneObj(baseState);
newState2[1]['done'] = true;
newState2.push({
    todo: 'Tweet about it',
});

const newState3 = [
    ...baseState.map((tweet, index) =>
        index === 1 ? { ...tweet, done: true } : tweet,
    ),
    {
        todo: 'Tweet about it',
    },
];
console.log(baseState);
console.log(newState);
console.log(newState2);
console.log(newState3);
