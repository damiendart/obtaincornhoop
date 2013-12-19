// Some JavaScript for Obtain Corn Hoop's Tumblr theme.
//
// Copyright (C) 2013 Damien Dart, <damiendart@pobox.com>.
// This file is distributed under the MIT licence. For more information,
// please refer to the accompanying "LICENCE" file.

selectnav("selectnav", { autoselect: false,
    label: "&#x2605;&#x2605;&#x2605; NAVIGATION &#x2605;&#x2605;&#x2605;" });
if (navigator.appVersion.indexOf("Mac") == -1) {
  var site_title = document.getElementsByClassName("site-title");
  for (var i = 0; i < site_title.length; i++) {
    site_title[i].className += " js-site-title-windows-hack";
  }
}
if (!!navigator.userAgent.match(/Trident\/7.0; rv 11/)) {
  var post_metadata = document.getElementsByClassName("post-metadata");
  for (var i = 0; i < post_metadata.length; i++) {
    post_metadata[i].className += " js-metadata-ie11-hack";
  }
}
var relative_dates = document.getElementsByClassName("js-relative-date");
for (var i = 0; i < relative_dates.length; i++) {
  relative_dates[i].innerHTML =
      relative_dates[i].getAttribute("data-relative-date");
}
