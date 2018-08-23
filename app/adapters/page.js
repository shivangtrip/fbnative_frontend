import DS from 'ember-data';
import $ from 'jquery';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  findAll(store) {
    return new Promise(function(resolve, reject) {
      Ember.$.get('http://localhost:8080/app/getPages').then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});


