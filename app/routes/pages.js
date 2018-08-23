import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('page');
        // return $.get('http://localhost:8080/app/getPages');
        
        
      },
    fbc : true
});
