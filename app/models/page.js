import DS from 'ember-data';

export default DS.Model.extend({
  access_token: DS.attr(),
  name: DS.attr(),
  isSubscribed: DS.attr('boolean', { defaultValue: false }),
});
