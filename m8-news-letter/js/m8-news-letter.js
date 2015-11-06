/* ========= INFORMATION ============================

- document:  Slick Modals - HTML5 and CSS3 powered modal popups
- author:    Capelle @ Codecanyon
- profile:   http://codecanyon.net/user/Capelle
- version:   2.1

==================================================== */

(function($) {
    $.fn.slickModals = function(options) {

        // Settings
        var settings = $.extend({
            setDelay   : false,
            delayTime  : null,
            setCookie  : false,
            cookieDays : null,
            blurBg     : false
        }, options);

        return this.each(function() {

            var self = this;

            // Timeout
            if(settings.setDelay === true) {
                var delaying = setTimeout(function() {
                    $(self).prop('checked', settings.setDelay);
                }, settings.delayTime);
            }

            function SlickCookie() {
                days = settings.cookieDays;
                CookieDate = new Date();
                CookieDate.setTime(CookieDate.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = 'SlickCookie=true; expires=' + CookieDate.toGMTString();
            }

            // Set a cookie
            if(settings.setCookie === true) {
                console.log("setting cookie...");
                var cookie = document.cookie.split(';').map(function(x) {
                    return x.trim().split('=');
                }).filter(function(x) {
                    return x[0] === 'SlickCookie';
                }).pop();
                $('.setCookie').on('click', function() {
                    SlickCookie();
                });
                $('.showAgain').on('click', function() {
                    $('#slickModals').show();
                });

                // Hide modal and clear timeouts if cookie exists
                if (cookie && cookie[1] === 'true') {
                    $('#slickModals').hide();
                  //  clearTimeout(delaying);
                  //  clearTimeout(blurring);
                }
            }

            // Blur background
            if(settings.blurBg === true) {

                var blurring = setTimeout(function() {
                    $('#blurred').addClass("on");
                }, settings.delayTime);

                $('.addBlur').on('click', function(){
                    $('#blurred').addClass("on");
                });

                $('.removeBlur').on('click', function(){
                    $('#blurred').removeClass("on");
                });
            }
        });
    };

    // Plugin invoke
    $(document).ready(function() {

      console.log("news letter plugin loaded successfully!");

    	$('#m8-news-letter').slickModals({
    		setDelay   : true,
    		delayTime  : 2000,
    		setCookie  : true,
    		cookieDays : 2,
    		blurBg     : true
    	});
    });


    function validate_signup(frm) {

    	var emailAddress = frm.Email.value;
    	var errorString = '';

    	if (emailAddress === '' || emailAddress.indexOf('@') === -1) {
    		errorString = 'Please enter your email address';
    	}

      var els = frm.getElementsByTagName('input');

      for (var i = 0; i < els.length; i++) {

          if (els[i].className === 'text' || els[i].className === 'date' || els[i].className === 'number') {
              if (els[i].value === '') {
                errorString = 'Please complete all required fields.';
              }

          } else if (els[i].className === 'radio') {

              var toCheck = document.getElementsByName(els[i].name);
              var radioChecked = false;

              for (var j = 0; j < toCheck.length; j++) {

                  if (toCheck[j].name === els[i].name && toCheck[j].checked) {
                      radioChecked = true;
                  }
              }
              if (!radioChecked) {
                errorString = 'Please complete all required fields.';
              }

          }
      }

    	var isError = false;

      if (errorString.length > 0) {
        isError = true;
      }

      if (isError) {
        alert(errorString);
      }

    	return !isError;
    }

}(jQuery));
