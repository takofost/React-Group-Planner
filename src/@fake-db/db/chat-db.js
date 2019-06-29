import mock from './../mock';
import {FuseUtils} from '@fuse';
import _ from '@lodash';

const chatDb = {
    contacts: [
        {
            'id'    : '5725a680b3249760ea21de52',
            'name'  : 'Victoria Nguyen',
            'avatar': 'assets/images/avatars/victoria.png',
            'status': 'online',
            'mood'  : 'So what are we going to do about socket.io ???'
        },
        {
            'id'    : '5725a680606588342058356d',
            'name'  : 'Ryan Halfpenny',
            'avatar': 'assets/images/avatars/ryan.png',
            'status': 'online',
            'mood'  : 'I finished all of the front-end stuff...'
        },
        {
            'id'    : '5725a68009e20d0a9e9acf2a',
            'name'  : 'Ken Tran',
            'avatar': 'assets/images/avatars/ken.png',
            'status': 'online',
            'mood'  : 'Back-end is working now, whats next ?'
        },
        {
            'id'    : '5725a6809fdd915739187ed5',
            'name'  : 'Brandon',
            'avatar': 'assets/images/avatars/brandon.png',
            'status': 'online',
            'mood'  : 'I need your help ASAP !'
        }
    ],
    chats   : [
        {
            'id'    : '1725a680b3249760ea21de52',
            'dialog': [

                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time'   : '2017-03-22T09:27:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:33:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:34:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-03-22T09:35:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time'   : '2017-03-22T09:45:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T10:00:28.299Z'
                }
            ]
        },
        {
            'id'    : '2725a680b8d240c011dd2243',
            'dialog': [
                {
                    'who'    : '5725a680606588342058356d',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time'   : '2017-04-22T01:00:00.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time'   : '2017-04-22T01:05:00.299Z'
                },
                {
                    'who'    : '5725a680606588342058356d',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-04-22T01:10:00.299Z'
                }
            ]
        },
        {
            'id'    : '3725a6809413bf8a0a5272b4',
            'dialog': [
                {
                    'who'    : '5725a68009e20d0a9e9acf2a',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time'   : '2017-04-22T02:10:00.299Z'
                }
            ]
        }
    ],
    user    : [
        {
            'id'      : '5725a6802d10e277a0f35724',
            'name'    : 'Brandon Otero',
            'avatar'  : 'assets/images/avatars/Brandon.png',
            'status'  : 'online',
            'mood'    : 'status',
            'chatList': [
                {
                    'chatId'         : '1725a680b3249760ea21de52',
                    'contactId'      : '5725a680b3249760ea21de52',
                    'lastMessageTime': '2017-06-12T02:10:18.931Z'
                },
                {
                    'chatId'         : '2725a680b8d240c011dd2243',
                    'contactId'      : '5725a680606588342058356d',
                    'lastMessageTime': '2017-02-18T10:30:18.931Z'
                },
                {
                    'chatId'         : '3725a6809413bf8a0a5272b4',
                    'contactId'      : '5725a68009e20d0a9e9acf2a',
                    'lastMessageTime': '2017-03-18T12:30:18.931Z'
                }
            ]
        }
    ]
};

mock.onGet('/api/chat/contacts').reply((config) => {
    return [200, chatDb.contacts];
});

mock.onGet('/api/chat/get-chat').reply((request) => {
    const {contactId, userId} = request.params;
    let response;
    const user = chatDb.user.find(_user => _user.id === userId);

    const chat = user.chatList.find((_chat) => _chat.contactId === contactId);
    const chatId = chat ? chat.chatId : createNewChat(contactId, userId);
    response = chatDb.chats.find((_chat) => _chat.id === chatId);
    return [
        200, {
            chat        : response,
            userChatData: user.chatList.find((_chat) => _chat.contactId === contactId)
        }
    ];
});

mock.onGet('/api/chat/user').reply((config) => {
    return [200, chatDb.user[0]];
});

mock.onPost('/api/chat/user/data').reply((request) => {
    const data = JSON.parse(request.data);
    chatDb.user[0] = _.merge({}, chatDb.user[0], data);
    return [200, chatDb.user[0]];
});

function createNewChat(contactId, userId)
{
    const user = chatDb.user.find(_user => _user.id === userId);
    let chatId = FuseUtils.generateGUID();
    user.chatList = [
        {
            'chatId'         : chatId,
            'contactId'      : contactId,
            'lastMessageTime': ''
        },
        ...chatDb.user[0].chatList
    ];
    chatDb.chats = [
        ...chatDb.chats,
        {
            'id'    : chatId,
            'dialog': []
        }
    ];
    return chatId;
}

mock.onPost('/api/chat/send-message').reply((request) => {
    const data = JSON.parse(request.data);
    const {chatId, message, contactId} = data;
    let chat = chatDb.chats.find(_chat => _chat.id === chatId);
    chat.dialog = [
        ...chat.dialog,
        message
    ];
    chatDb.user[0].chatList.find(_contact => _contact.id === contactId).lastMessageTime = message.time;
    return [
        200, {
            message,
            userChatData: chatDb.user[0].chatList.find(_contact => _contact.id === contactId)
        }
    ];
});

