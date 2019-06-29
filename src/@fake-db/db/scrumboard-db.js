import mock from './../mock';
import _ from '@lodash';

const scrumboardDB = {
    boards: [
    ]
};

mock.onGet('/api/scrumboard-app/boards').reply(() => {
    const response = _.map(scrumboardDB.boards, (board) => _.pick(board, ['id', 'name', 'uri']));
    return [200, response];
});

mock.onPost('/api/scrumboard-app/board/new').reply((request) => {
    const {board} = JSON.parse(request.data);
    scrumboardDB.boards = [...scrumboardDB.boards, board];
    return [200, _.pick(board, ['id', 'name', 'uri'])];
});

mock.onPost('/api/scrumboard-app/board/rename').reply((request) => {
    const {boardId, boardTitle} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    _.set(board, 'name', boardTitle);

    return [200, boardTitle];
});

mock.onGet('/api/scrumboard-app/board').reply((config) => {
    const {boardId} = config.params;
    const response = _.find(scrumboardDB.boards, {id: boardId});
    if ( response )
    {
        return [200, response];
    }
    else
    {
        return [404, 'Requested board do not exist.'];
    }
});

mock.onPost('/api/scrumboard-app/board/settings/update').reply((request) => {
    const {boardId, settings} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    _.set(board, 'settings', settings);

    return [200, settings];
});

mock.onPost('/api/scrumboard-app/board/delete').reply((request) => {
    const {boardId} = JSON.parse(request.data);
    scrumboardDB.boards = _.reject(scrumboardDB.boards, {id: boardId});
    return [200, true];
});

mock.onPost('/api/scrumboard-app/card/new').reply((request) => {
    const {boardId, listId, data} = JSON.parse(request.data);
    let board = _.find(scrumboardDB.boards, {id: boardId});

    _.assign(board,
        {
            cards: [...board.cards, data],
            lists: _.map(board.lists, _list => {
                if ( _list.id === listId )
                {
                    _.assign(_list, {idCards: [..._list.idCards, data.id]});
                }
                return _list
            })
        }
    );

    return [200, board];
});

mock.onPost('/api/scrumboard-app/list/new').reply((request) => {
    const {boardId, data} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    const lists = [...board.lists, data];

    _.assign(board, {lists});

    return [200, lists];
});

mock.onPost('/api/scrumboard-app/list/rename').reply((request) => {
    const {boardId, listId, listTitle} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    const list = _.find(board.lists, {id: listId});
    _.assign(list, {name: listTitle});

    return [200, listTitle];
});

mock.onPost('/api/scrumboard-app/list/remove').reply((request) => {
    const {boardId, listId} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    _.set(board, 'lists', _.reject(board.lists, {id: listId}));
    return [200, true];
});

mock.onPost('/api/scrumboard-app/card/update').reply((request) => {
    const {boardId, card} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    const selectedCard = _.find(board.cards, {id: card.id});
    _.assign(selectedCard, card);
    // console.info('updated');
    return [200, card];
});

mock.onPost('/api/scrumboard-app/card/remove').reply((request) => {
    const {boardId, cardId} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    _.assign(board, {
            cards: _.reject(board.cards, {id: cardId}),
            lists: board.lists.map(list => {
                _.set(list, 'idCards', _.reject(list.idCards, (id) => id === cardId));
                return list;
            })
        }
    );
    return [200, cardId];
});

mock.onPost('/api/scrumboard-app/card/order').reply((request) => {
    const {boardId, lists} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    _.assign(board, {lists});
    return [200, lists];
});


mock.onPost('/api/scrumboard-app/list/order').reply((request) => {
    const {boardId, lists} = JSON.parse(request.data);
    const board = _.find(scrumboardDB.boards, {id: boardId});
    _.assign(board, {lists});
    return [200, lists];
});
