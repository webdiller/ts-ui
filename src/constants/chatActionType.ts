export enum ChatActionType {

    ADD_CHAT_ROOM_MESSAGES = 'ADD_CHAT_ROOM_MESSAGES',
    ADD_PLAIN_CHAT_ROOM_MESSAGES = 'ADD_PLAIN_CHAT_ROOM_MESSAGES',
    DB_CREATE_CHAT_MESSAGE = 'DB_CREATE_CHAT_MESSAGE',
    DB_CREATE_CHAT_ROOM = 'DB_CREATE_CHAT_ROOM',
    DB_FETCH_CHAT_ROOMS = 'DB_FETCH_CHAT_ROOMS',
    DB_FETCH_PEER_CHAT_ROOMS = 'DB_FETCH_PEER_CHAT_ROOMS',
    DB_SUBSCRIBE_CHAT_MESSAGE = 'DB_SUBSCRIBE_CHAT_MESSAGE',
    DB_FETCH_CHAT_MESSAGE_ONCE = 'DB_FETCH_CHAT_MESSAGE_ONCE',
    DB_SET_CHAT_LANGUAGE = 'DB_SET_CHAT_LANGUAGE',
    SET_CURRENT_CHAT = 'SET_CURRENT_CHAT',
    ACTIVE_PEER_CHAT_ROOM = 'ACTIVE_PEER_CHAT_ROOM',

    WS_CONNECT = 'WS_CONNECT',
    ASYNC_CREATE_CHAT_REQUEST = 'ASYNC_CREATE_CHAT_REQUEST',
    ASYNC_CANCEL_CHAT_REQUEST = 'ASYNC_CANCEL_CHAT_REQUEST',
    ASYNC_IGNORE_CHAT_REQUEST = 'ASYNC_IGNORE_CHAT_REQUEST',
    ASYNC_ACCEPT_CHAT_REQUEST = 'ASYNC_ACCEPT_CHAT_REQUEST',
    ASYNC_JOIN_CHAT_ROOM = 'ASYNC_JOIN_CHAT_ROOM',

    CLEAR_ALL_CHAT_MESSAGE = 'CLEAR_ALL_CHAT_MESSAGE',
    CLOSE_CHAT = 'CLOSE_CHAT',
    REMOVE_CHAT_HISTORY = 'REMOVE_CHAT_HISTORY',
    DB_REMOVE_CHAT_HISTORY = 'DB_REMOVE_CHAT_HISTORY',
    OPEN_CHAT = 'OPEN_CHAT',
    CLOSE_RECENT_CHAT = 'CLOSE_RECENT_CHAT',
    UPDATE_CHAT_ROOM = 'UPDATE_CHAT_ROOM',
    OPEN_RECENT_CHAT = 'OPEN_RECENT_CHAT',

    ADD_CHAT_REQUEST = 'ADD_CHAT_REQUEST',
    REMOVE_CHAT_REQUEST = 'REMOVE_CHAT_REQUEST',
    ADD_CHAT_CONNECT = 'ADD_CHAT_CONNECT',
    REMOVE_CHAT_CONNECT = 'REMOVE_CHAT_CONNECT',
    ADD_CHAT_CALLING = 'ADD_CHAT_CALLING',
    REMOVE_CHAT_CALLING = 'REMOVE_CHAT_CALLING',

    SET_USER_OFFLINE = 'SET_USER_OFFLINE',
}