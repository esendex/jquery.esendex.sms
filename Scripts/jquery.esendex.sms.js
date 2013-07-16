(function($) {
    $.fn.esendexSms = function (options) {
        return this.each(function () {

            this.createEsendexLink = function (phoneNumber, displayHtml, message, accountReference, cssClass) {
                var messageValue = '';
                var accountValue = '';

                if(message != undefined && message != '') {
                    messageValue = '&message=' + message;
                }
                
                if (accountReference != undefined && accountReference != '') {
                    accountValue = '&accountReference=' + accountReference;
                }

                var link = $("<a title='Send SMS' target=\"_blank\" href=\"http://www.esendex.com/echo/integrations/send?recipient=" + phoneNumber + messageValue + accountValue + "\">" + displayHtml + "</a>");

                if (cssClass) {
                    link.addClass(cssClass);
                }
                
                return link;
            };

            var settings = $.extend({
                cssClass: null
            }, options);

            var recipient = $(this).data('esendex-phone-number');
            var htmlDisplayText = this.innerHTML;

            var numberToText;
            
            numberToText = recipient == undefined ? htmlDisplayText : recipient;

            $(this).html(this.createEsendexLink(numberToText.replace(/[^\d]/g, ''), htmlDisplayText, $(this).data('esendex-message'), $(this).data('esendex-account'), settings.cssClass));
        });
    };
}(jQuery));