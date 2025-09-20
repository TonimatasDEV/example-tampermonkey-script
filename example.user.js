// ==UserScript==
// @name            Example Tampermonkey Script
// @description     Example
// @version         1.0.0
// @author          TonimatasDEV
// @homepageURL     https://github.com/TonimatasDEV/example-tampermonkey-script
// @supportURL      https://github.com/TonimatasDEV/example-tampermonkey-script/issues
// @match           https://*.example.com/*
// @license         MIT
// @namespace       https://github.com/TonimatasDEV/example-tampermonkey-script
// @icon            https://cdn-icons-png.flaticon.com/512/5129/5129538.png
// @downloadURL     https://raw.githubusercontent.com/TonimatasDEV/example-tampermonkey-script/master/example.user.js
// @contributionURL https://ko-fi.com/tonimatasdev
// @grant           none
// @attribution     Original project (https://github.com/TonimatasDEV/example-tampermonkey-script)
// ==/UserScript==

(function () {
    'use strict';

    const primaryContent = document.querySelector("div");
    primaryContent.innerHTML = primaryContent.innerHTML + "<p style='color: green'>Your example script is here and working correctly!<p/>"

    console.log('¡Hello from your script!');
})();