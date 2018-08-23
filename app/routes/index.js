import Ember from 'ember';

export default Ember.Route.extend({
    fbc : false,
    actions : {
        disconnectFb() {
            this.set('fbc', false);
        }
    }
    
    
    
});
