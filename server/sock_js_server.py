import vertx
from core.sock_js import SockJSServer

sock_server = vertx.create_http_server()

app_config = vertx.config()
#PUBLIC WEB SOCKET ADDRESSES
SockJSServer(sock_server).bridge({"prefix": "/eventbus"}, [{
            'address': 'vertx.basicauthmanager.login'
        },
        {
            'address': 'vertx.basicauthmanager.authorise'
        },
        {
            'address': 'vertx.basicauthmanager.logout'
        },
        {
            'address': 'simple_search'
        },
        {
            'address': 'registration'
        },
        {
            'address': 'read_dir'
        },
        {
            'address': 'mkdir_path'
        },
        {
            'address': 'get_auth_user'
        },
        {
            'address': 'update_user'
        },
        {
            'address': 'get_hostname'
        },
        {
            'address': 'exist_in_db'
        },
        {
            'address': 'get_locale_messages'
        },
        {
            'address': 'get_version'
        }], [{}])

sock_server.listen(app_config['port_bridge'])