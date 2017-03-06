// JavaScript Document
//<![CDATA[

var map = new GMap(document.getElementById("contact-map"));

//設定要顯示的控制項
//決定你 Google 地圖的中心點位置和縮放大小
//map.setCenter(new GLatLng(25.0626261256243, 121.58074736595154), 16);
  map.setCenter(new GLatLng(25.091855, 121.508938), 16);

//標記在 Google 地圖上的經緯度
//var point = new GLatLng(25.0626261256243, 121.58074736595154);
  var point = new GLatLng(25.091855, 121.508938);
  var marker = new GMarker(point);
  map.addOverlay(marker);

//在地圖上放置標點說明
  var html = "【開始設計工作室】<br>一個友善的設計工作室<br>專職 網頁設計/平面設計。";
  map.openInfoWindowHtml (map.getCenter(), html);
  map.addControl(new GLargeMapControl());
  map.addControl(new GMapTypeControl()); 
 //]]>
