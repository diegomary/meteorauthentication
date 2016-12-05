import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',

  loginExpirationInDays: 1
  //passwordSignupFields: 'USERNAME_ONLY',
      // "USERNAME_AND_EMAIL",
      // "USERNAME_AND_OPTIONAL_EMAIL",
      // "USERNAME_ONLY",
      // "EMAIL_ONLY"
});
