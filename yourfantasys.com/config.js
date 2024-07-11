var searchString = new URLSearchParams(window.location.search);
var get_campId = searchString.get("camp_id");
var get_banId = searchString.get("ban_id");
var get_sourceId = searchString.get("source_id");
var get_catId = searchString.get("cat_id");
var get_keyId = searchString.get("key_id");
var get_mr1Id = searchString.get("mr1");

var campId = get_campId;
var banId = get_banId;
var sourceId = get_sourceId;
var catId = get_catId;
var keyId = get_keyId;
var mr1Id = get_mr1Id;

var link1 = "https://www.dates4sexx.com/click";

var secondLink = "https://local2dates.com/c/5db8ef7e7a2fec22?";
var link2 = secondLink
  .split("?")[0]
  .concat(
    `?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&mr1=${mr1Id}`
  );

var langlink = "https://local2dates.com/c/14fe1f6e3c56346a?";
var link3 = langlink
  .split("?")[0]
  .concat(
    `?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&mr1=${mr1Id}`
  );

var langlink = "https://local2dates.com/c/eb9246f63aa7da77?";
var link4 = langlink
  .split("?")[0]
  .concat(
    `?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&mr1=${mr1Id}`
  );

/*if (!document.cookie.includes("unique_user")) {
    document.cookie =
        "unique_user=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    secondLink = 'https://local2dates.com/c/5db8ef7e7a2fec22?';
} else {
    secondLink = 'https://local2dates.com/c/00069bbd24486707?';
}
var link2 = secondLink.split('?')[0].concat(`?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&mr1=${mr1Id}`);

if (link2.includes('https://local2dates.com/c/5db8ef7e7a2fec22?')) {
    link2 = link2 + '&token6=cook'; // Add const params if user is unique
}*/

////////////////////////back link////////
var secondLink_btnBack = "https://looks4dates.com/c/88bf72324c3b30e9?";
var link2_btnBack = secondLink_btnBack
  .split("?")[0]
  .concat(
    `?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&mr1=${mr1Id}`
  );

let prevent = false;
let ok = false;

function openInNewTab(link1, link2) {
  ok = true;
  // window.open(link1, '_blank').focus();
  window.open(link2, "_self");
}

function openlinks() {
  redirectOnClikLink1();
  openInNewTab(link1, link2);
  return false;
}

/*function redirectOnClikLink1() {
    window.open(decodeURIComponent(window.location.href.substr(window.location.href.lastIndexOf("aref=") + 5)), "_blank").focus();
}*/

function redirectOnClikLink1() {
  var arefParam = new URLSearchParams(window.location.search).get("aref");
  var language = navigator.language || navigator.userLanguage;
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var isSamsungBrowser = userAgent.includes("SamsungBrowser");

  // Перевірка, що це Android WebView
  var isAndroidAppWebview = /Android.*(wv|\.0\.0\.0\.0)/.test(userAgent);

  // Перевірка на Facebook App WebView

  var isFacebookApp = /\bFB[\w_]+\/[\d.]+;\s?FBAV\/[\d.]+;?\s?/.test(userAgent);

  // Перевірка на Google Search App
  var isGoogleSearchApp =
    /GSA|; wv/.test(userAgent) && /Google/.test(userAgent);

  // Перевірка на Chrome desktop
  var isChromeDesktop = /Chrome/.test(userAgent) && !/Mobile/.test(userAgent);

  if (arefParam) {
    if (language.startsWith("es") || language.startsWith("fa")) {
      window.open(link3, "_blank").focus();
    } else if (
      isSamsungBrowser ||
      isAndroidAppWebview ||
      isFacebookApp ||
      isGoogleSearchApp ||
      isChromeDesktop
    ) {
      window.open(link4, "_blank").focus();
    } else {
      window.open(decodeURIComponent(arefParam), "_blank").focus();
    }
  }
}

window.addEventListener("beforeunload", function (e) {
  if (prevent === false && ok === false) {
    setTimeout(function () {
      prevent = true;
      window.location.href = link2_btnBack;
    }, 20);
    e.preventDefault();
    e.returnValue = "Ok";
    return "Ok";
  }
});
