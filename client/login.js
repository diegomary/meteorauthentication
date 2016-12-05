import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'
import './login.html';

Template.login.onCreated(function helloOnCreated() {
    this.loginVisible = new ReactiveVar(true);
});

Template.login.helpers({
  isloginVisible() {
    return Template.instance().loginVisible.get();
  },
});

Template.login.events({
  'click .jq-link-register'(event, instance) {
    event.preventDefault();
    instance.loginVisible.set(false);
  },
  'click .jq-link-login'(event, instance) {
    event.preventDefault();
    instance.loginVisible.set(true);
  },
  'submit .js-register-form'(event, instance) {
  event.preventDefault();
  var user = {
          username: event.target.userNameReg.value,
          password: event.target.pwdReg.value,
          email: event.target.emailReg.value,
          profile: {
            firstName: "PlaceHolder",
            lastName: "Secondplaceholder",
            role: "Administrator"
          }
        };
  Accounts.createUser(user, function (error) {
      if (error) {
        console.log(error);
      }
      else { }
    });
  },

  'submit .js-login-form'(event, instance) {
    event.preventDefault();
    var username = event.target.userNameReg.value;
    var password = event.target.pwdReg.value;
    Meteor.loginWithPassword(username, password, function(error) {
      if(error){
          console.log(error.reason);
      } else {}
      });
  },

  'change .js-remember-me'(event, instance) {
    Session.set("remember_me", event.currentTarget.checked);
  },


});
