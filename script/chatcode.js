//網站多重聯絡方式  WhatsHelp.io widget 
 (function () {
        var options = {
            facebook: "973910065972990", // Facebook page ID
            line: "//line.me/R/ti/p/%40shv5946p", // Line QR code URL
            email: "hello@xuedesign.tw", // Email
            call: "+886-987-152-534", // Call phone number
            company_logo_url: "//www.xuedesign.tw/logo-01.png", // URL of company logo (png, jpg, gif)
            greeting_message: "你好! 歡迎來到開始設計工作室\n需要協助嗎? 發訊息給我們吧", // Text of greeting message
            button_color: "#C510CE", // Color of button #129BF4 #12D1C7
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,line,call,email" // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();