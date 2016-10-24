/**
 * Constants for HTTP headers.
 *
 * Includes all Standard HTTP headers from http://www.iana.org/assignments/message-headers/message-headers.xhtml
 */

'use strict';

module.exports = {
    ACCEPT: 'Accept',
    ACCEPT_CHARSET: 'Accept-Charset',
    ACCEPT_ENCODING: 'Accept-Encoding',
    ACCEPT_LANGUAGE: 'Accept-Language',
    ACCEPT_RANGES: 'Accept-Ranges',
    AGE: 'Age',
    ALPN: 'ALPN',
    ALT_SVC: 'Alt-Svc',
    ALT_USED: 'Alt-Used',
    AUTHENTICATION_INFO: 'Authentication-Info',
    AUTHORIZATION: 'Authorization',

    CACHE_CONTROL: 'Cache-Control',
    CALDAV_TIMEZONES: 'CalDAV-Timezones',
    CONNECTION: 'Connection',
    CONTENT_DISPOSTION: 'Content-Disposition',
    CONTENT_ENCODING: 'Content-Encoding',
    CONTENT_LANGUAGE: 'Content-Language',
    CONTENT_LENGTH: 'Content-Length',
    CONTENT_LOCATION: 'Content-Location',
    CONTENT_RANGE: 'Content-Range',
    CONTENT_TYPE: 'Content-Type',
    COOKIE: 'Cookie',

    DASL: 'DASL',
    DAV: 'DAV',
    DATE: 'Date',
    DESTINATION: 'Destination',

    ETAG: 'ETag',
    EXPECT: 'Expect',
    EXPIRES: 'Expires',

    FORWARDED: 'Forwarded',
    FROM: 'From',

    HOST: 'Host',
    HTTP2_SETTINGS: 'HTTP2-Settings',

    IF: 'If',
    IF_MATCH: 'If-Match',
    IF_MODIFIED_SINCE: 'If-Modified-Since',
    IF_NONE_MATCH: 'If-None-Match',
    IF_RANGE: 'If-Range',
    IF_SCHEDULE_TAG_MATCH: 'If-Schedule-Tag-Match',
    IF_UNMODIFIED_SINCE: 'If-Unmodified-Since',

    LAST_MODIFIED: 'Last-Modified',
    LOCATION: 'Location',
    LOCK_TOKEN: 'Lock-Token',

    MAX_FORWARDS: 'Max-Forwards',
    MIME_VERSION: 'MIME-Version',

    ORDERING_TYPE: 'Ordering-Type',
    ORIGIN: 'Origin',
    OVERWRITE: 'Overwrite',

    POSITION: 'Position',
    PRAGMA: 'Pragma',
    PREFER: 'Prefer',
    PREFERENCE_APPLIED: 'Preference-Applied',
    PROXY_AUTHENTICATE: 'Proxy-Authenticate',
    PROXY_AUTHENTICATE_INFO: 'Proxy-Authentication-Info',
    PROXY_AUTHORIZATION: 'Proxy-Authorization',
    PUBLIC_KEY_PINS: 'Public-Key-Pins',
    PUBLIC_KEY_PINS_REPORT_ONLY: 'Public-Key-Pins-Report-Only',

    RANGE: 'Range',
    REFERER: 'Referer',
    RETRY_AFTER: 'Retry-After',

    SCHEDULE_REPLY: 'Schedule-Reply',
    SCHEDULE_TAG: 'Schedule-Tag',
    SEC_WEBSOCKET_ACCEPT: 'Sec-WebSocket-Accept',
    SEC_WEBSOCKET_EXTENSIONS: 'Sec-WebSocket-Extensions',
    SEC_WEBSOCKET_KEY: 'Sec-WebSocket-Key',
    SEC_WEBSOCKET_PROTOCOL: 'Sec-WebSocket-Protocol',
    SEC_WEBSOCKET_VERSION: 'Sec-WebSocket-Version',
    SERVER: 'Server',
    SET_COOKIE: 'Set-Cookie',
    SLUG: 'SLUG',
    STRICT_TRANSPORT_SECURITY: 'Strict-Transport-Security',

    TE: 'TE',
    TIMEOUT: 'Timeout',
    TRAILER: 'Trailer',
    TRANSFER_ENCODING: 'Transfer-Encoding',

    UPGRADE: 'Upgrade',
    USER_AGENT: 'User-Agent',

    VARY: 'Vary',
    VIA: 'Via',

    WARNING: 'Warning',
    WWW_AUTHENTICATE: 'WWW-Authenticate'
};