jQuery.Esendex.Sms
==================

You can easily integrate with Esendex's Echo application using our jQuery plugin. Here's how:

  Add jQuery to you page (jquery-1.8 or later is supported)
  Include the jquery.esendex.sms.js file
  Apply the esendexSms function to an element or class

You will need to sign up for an account at www.esendex.com to send SMS or voice messages.


Customize the plugin for your needs
-----------------------------------

You can use the following attributes to preset data when the Echo application loads:

* *data-esendex-phone-number* - This is the phone number you want to send a message to.
* *data-esendex-message* - Allows you to specify a default message to be typed when Echo loads.
* *data-esendex-account* - If you have multiple accounts you can control which account you want to send the message from.


The plugin converts the element it is applied on to a hyperlink pointing to Echo. You can alter the CSS class used to display the link by setting the cssClass option when attaching the plugin e.g.

*$(".sms").esendexSms({ cssClass: 'myHyperlinkStyle' });*
