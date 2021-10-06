// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   name: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = 'A';             // Labels every entry with version: "A".

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
  mousedown: true,
  keydown: true,
  log: true,
  ctrlF: true,
  openBridge: true,
  openPreBridge: true,
  openPreSelect: true,
  openMaterial: true,
  createNewTab: true,
  openInNewTab: true,
  openTab: true,
  createBookmark: true,
  createBridge: true
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
  which: true,
  pageX: true,
  pageY: true,
  detail: true
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function() {
  return {
  };
};

(function() {

// A persistent unique id for the user.
var uid = getUniqueId();

// Hooks up all the event listeners.
function hookEventsToLog() {
  // Set up low-level event capturing.  This intercepts all
  // native events before they bubble, so we log the state
  // *before* normal event processing.
  for (var event_type in EVENT_TYPES_TO_LOG) {
    document.addEventListener(event_type, logEvent, true);
  }

  // Once the page is loaded, show our own unique id.
  // Util.events(document, {
	// // Final initalization entry point: the Javascript code inside this block
	// // runs at the end of start-up when the DOM is ready
	// "DOMContentLoaded": function() {
  //   console.log('Your unique id is', uid);
  //   Util.one('#bottomtext').innerHTML = 'Logging to the network as <nobr>' + uid + '</nobr>';
  //   },
  //   "log": function(evt){
  //     var detail = evt.detail;
  //     logEvent(null, detail.name, detail.info);
  //   }
  // });
  // Listen to 'log' events which are triggered anywhere in the document.
}

// Returns a CSS selector that is descriptive of
// the element, for example, "td.left div" for
// a class-less div within a td of class "left".
function elementDesc(elt) {
  if (elt == document) {
    return 'document';
  } else if (elt == window) {
    return 'window';
  }
  function descArray(elt) {
    var desc = [elt.tagName.toLowerCase()];
    if (elt.id) {
      desc.push('#' + elt.id);
    }
    for (var j = 0; j < elt.classList.length; j++) {
      desc.push('.' + elt.classList[j]);
    }
    return desc;
  }
  var desc = [];
  while (elt && desc.length <= 1) {
    var desc2 = descArray(elt);
    if (desc.length == 0) {
      desc = desc2;
    } else if (desc2.length > 1) {
      desc2.push(' ', desc[0]);
      desc = desc2;
    }
    elt = elt.parentElement;
  }
  return desc.join('');
}

// Parse user agent string by looking for recognized substring.
function findFirstString(str, choices) {
  for (var j = 0; j < choices.length; j++) {
    if (str.indexOf(choices[j]) >= 0) {
      return choices[j];
    }
  }
  return '?';
}

// Genrates or remembers a somewhat-unique ID with distilled user-agent info.
function getUniqueId() {
  if (!('uid' in localStorage)) {
    var browser = findFirstString(navigator.userAgent, [
      'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
      'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
    var os = findFirstString(navigator.userAgent, [
      'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
      'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
    var unique = ('' + Math.random()).substr(2);
    localStorage['uid'] = os + '-' + browser + '-' + unique;
  }
  return localStorage['uid'];
}

// Log the given event.
function logEvent(event, customName, customInfo) {
  var time = (new Date).getTime();
  var name = customName || event.type;
  // By default, monitor some global state on every event.
  var infoObj = GLOBAL_STATE_TO_LOG();
  // And monitor a few interesting fields from the event, if present.
  for (var key in EVENT_PROPERTIES_TO_LOG) {
    if (key in event) {
      infoObj[key] = event[key];
    }
  }
  // Let a custom event add fields to the info.
  if (customInfo) {
    infoObj = Object.assign(infoObj, customInfo);
  }
  var info = JSON.stringify(infoObj);
  var target = document;
  if (event) {target = elementDesc(event.target);}
  var state = getUrlParameter('user') || "";

  if (ENABLE_CONSOLE_LOGGING) {
    console.log(uid, time, name, target, info, state, LOG_VERSION);
  }
  if (ENABLE_NETWORK_LOGGING) {
    sendOceanLoggingTiltchairBanana(uid, time, name, target, info, state, LOG_VERSION);
  }
}

// OK, go.
if (ENABLE_NETWORK_LOGGING) {
  hookEventsToLog();
}

})();

// Ocean logging - TiltChair banana submission function
// submits to the google form at this URL:
// docs.google.com/forms/d/e/1FAIpQLSelwNv5YhxbuA6gApW_CQIAw0nsEFof_R1-MM4jNBZ7y6B9-A/viewform?usp=sf_link
function sendOceanLoggingTiltchairBanana(
  uid,
  time,
  name,
  target,
  info,
  state,
  version) {
var formid = "e/1FAIpQLSelwNv5YhxbuA6gApW_CQIAw0nsEFof_R1-MM4jNBZ7y6B9-A";
var data = {
  "entry.1261546890": uid,
  "entry.1427842020": time,
  "entry.603545566": name,
  "entry.1287257736": target,
  "entry.1037887429": info,
  "entry.583050068": state,
  "entry.1466186473": version
};
var params = [];
for (key in data) {
  params.push(key + "=" + encodeURIComponent(data[key]));
}
// Submit the form using an image to avoid CORS warnings.
(new Image).src = "https://docs.google.com/forms/d/" + formid +
   "/formResponse?" + params.join("&");
}