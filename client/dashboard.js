import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './dashboard.html';

Template.dashboard.onCreated(function () {
  window.onbeforeunload = function (e) {
    Meteor.logout();
  };

});

Template.dashboard.onDestroyed(function () {


});


Template.dashboard.helpers({
  TODO() {

  },
});

Template.dashboard.events({
  'click .jq-link-logout'(event, instance) {
    event.preventDefault();
    Meteor.logout();
  },

});
