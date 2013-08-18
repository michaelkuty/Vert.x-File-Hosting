import vertx
from core.event_bus import EventBus

logger = vertx.logger()
# Delete albums
def album_delete_handler(reply):

    users = [ {
            'firstname': 'Michael',
            'lastname': 'Kuty',
            'email': 'kuty.michael@uhk.cz',
            'username': 'admin',
            'password': 'admin'
        },{
            'firstname': 'Jakub',
            'lastname': 'Josef',
            'email': 'jakub.josef@uhk.cz',
            'username': 'kuba',
            'password': 'kuba'
        }
    ]

    # Insert albums - in real life 'price' would probably be stored in a different collection, but, hey, this is a demo.
    for i in range(0, len(users)):
        def save_handler(res):
            logger.info(res.body)
        EventBus.send('vertx.mongopersistor', {
            'action': 'save',
            'collection': 'users',
            'document': users[i]
        }, reply_handler=save_handler)
        logger.info(users[i]['document']['email'])
    logger.info("add %s users to mongo"% str(len(users)))
EventBus.send('vertx.mongopersistor', {'action': 'delete', 'collection': 'users', 'matcher': {}}, album_delete_handler)
