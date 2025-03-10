/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const I = require("devtools/client/shared/vendor/immutable");
const {
  OPEN_SIDEBAR,
  WATERFALL_RESIZE,
} = require("../constants");

const UI = I.Record({
  sidebarOpen: false,
  waterfallWidth: 300,
});

function openSidebar(state, action) {
  return state.set("sidebarOpen", action.open);
}

// Safe bounds for waterfall width (px)
const REQUESTS_WATERFALL_SAFE_BOUNDS = 90;

function resizeWaterfall(state, action) {
  return state.set("waterfallWidth", action.width - REQUESTS_WATERFALL_SAFE_BOUNDS);
}

function ui(state = new UI(), action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return openSidebar(state, action);
    case WATERFALL_RESIZE:
      return resizeWaterfall(state, action);
    default:
      return state;
  }
}

module.exports = ui;
