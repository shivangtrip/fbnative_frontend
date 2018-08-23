import Ember from 'ember';

export default Ember.Component.extend({
    names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
    store: Ember.inject.service('store'),
    actions: {
        linkAccount() {
            this.set('facebookConnected', true);
            document.getElementsByClassName('sync-discon')[0].style.display="inline";
            //this.controllerFor('application').set('facebookConnected', true);    
        },
        subscribePage(pageId, pageToken) {
            console.log("Subscribe : ",pageId, pageToken);
            var arr = {"pageToken" : pageToken,"reqType" : "subscribe"};
            $.ajax({
                url: 'http://localhost:8080/app/subUnsubPages',
                type: 'POST',
                data: JSON.stringify(arr),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
                success: function(msg) {
                    alert(msg);
                }
            });
            this.get('store').findRecord('page', pageId).then(function(tyrion) {
                // ...after the record has loaded
                tyrion.set('isSubscribed', true);
              });
        },
        unsubscribePage(pageId, pageToken) {
            console.log("Unsubscribe : ",pageId);
            var arr = {"pageToken" : pageToken,"reqType" : "unsubscribe"};
            $.ajax({
                url: 'http://localhost:8080/app/subUnsubPages',
                type: 'POST',
                data: JSON.stringify(arr),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
                success: function(msg) {
                    alert(msg);
                }
            });
            this.get('store').findRecord('page', pageId).then(function(tyrion) {
                // ...after the record has loaded
                tyrion.set('isSubscribed', false);
              });
        }
    },
});
