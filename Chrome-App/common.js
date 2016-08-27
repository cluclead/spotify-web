'use strict';

chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  let screenWidth = screen.availWidth;
  let screenHeight = screen.availHeight;
  let width = 700;
  let height = 500;

  chrome.app.window.create('data/window/index.html', {
    id: 'iswplayer',
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width) / 2),
      top: Math.round((screenHeight-height) / 2)
    }
  });
});

chrome.runtime.onMessage.addListener(function (message) {
  if (message.method === 'open') {
    chrome.browser.openTab({
      url: message.data
    });
  }
});
