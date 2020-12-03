//getbutton.io widget 
(function () {
    var options = {
    facebook: "973910065972990", // Facebook page ID
    line: "//lin.ee/mPK6XVf", // Line QR code URL
    call_to_action: "Hi!您好...", // Call to action
    button_color: "#FF1C45", // Color of button
    position: "right", // Position may be 'right' or 'left'
    order: "facebook,line", // Order of buttons
    };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();