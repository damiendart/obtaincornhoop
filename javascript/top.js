// Some JavaScript for Obtain Corn Hoop's Tumblr theme.
//
// Copyright (C) 2013 Damien Dart, <damiendart@pobox.com>.
// This file is distributed under the MIT licence. For more information,
// please refer to the accompanying "LICENCE" file.

// HACK: Prevent "SelectNav.js"-related FOUC.
var date = new Date();
document.documentElement.className += "js js-background-" +
    date.getDay().toString();
try{Typekit.load();}catch(e){}
hljs.initHighlightingOnLoad();
