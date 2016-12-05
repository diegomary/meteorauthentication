import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'
import './dashboard.html';

Template.dashboard.onCreated(function () {
  let is_ToRemember = Session.get("remember_me");
  if(!is_ToRemember) window.onbeforeunload = function (e) {Meteor.logout();};

});


Template.dashboard.helpers({
  TODO() { },
  
});

Template.dashboard.events({
  'click .jq-link-logout'(event, instance) {
    event.preventDefault();
    Session.set("remember_me", false);
    Meteor.logout();
  },

});
