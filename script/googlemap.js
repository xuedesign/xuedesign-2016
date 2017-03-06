// JavaScript Document
// 2017/03/06 更新 Google Api v3

function initMap() {
        var myLatLng = {lat: 25.091855, lng: 121.508938};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('contact-map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 16,
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: '開始設計工作室'
        });
      }
