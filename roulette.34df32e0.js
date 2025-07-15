// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9ZvZc":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1235;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _localization = require("./localization");
var _roulette = require("./roulette");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
const roulette = new (0, _roulette.Roulette)();
// eslint-disable-next-line
window.roullete = roulette;
// eslint-disable-next-line
window.options = (0, _optionsDefault.default);

},{"./localization":"7e5dA","./roulette":"dWQgg","./options":"jebMA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7e5dA":[function(require,module,exports,__globalThis) {
var _languages = require("./data/languages");
const defaultLocale = 'en';
let locale;
function getBrowserLocale() {
    return navigator.language.split('-')[0];
}
function translateElement(element) {
    if (!(element instanceof HTMLElement) || !locale) return;
    const prop = element.getAttribute('data-trans');
    if (prop) {
        const key = (element.getAttribute(prop) || '').trim();
        if (key && key in (0, _languages.Translations)[locale]) element.setAttribute(prop, (0, _languages.Translations)[locale][key]);
    } else {
        const key = element.innerText.trim();
        if (key && key in (0, _languages.Translations)[locale]) element.innerText = (0, _languages.Translations)[locale][key];
    }
}
function translatePage() {
    document.querySelectorAll('[data-trans]').forEach(translateElement);
}
function setLocale(newLocale) {
    if (newLocale === locale) return;
    document.documentElement.lang = newLocale;
    const newLocaleLower = newLocale.toLocaleLowerCase();
    locale = newLocaleLower in (0, _languages.Translations) ? newLocaleLower : defaultLocale;
    translatePage();
}
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('localization loaded');
    const browserLocale = getBrowserLocale();
    console.log('detected locale: ', browserLocale);
    setLocale(browserLocale);
});
// eslint-disable-next-line
window.translateElement = translateElement;

},{"./data/languages":"6pmzJ"}],"6pmzJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Translations", ()=>Translations);
const Translations = {
    en: {
        'Enter names below': 'Enter names below',
        Shuffle: 'Shuffle',
        Start: 'Start',
        Map: 'Map',
        Recording: 'Recording',
        'The winner is': 'The winner is',
        'Using skills': 'Using skills',
        'Buy me a coffee': 'Buy me a coffee',
        First: 'First',
        Last: 'Last',
        'Wheel of fortune': 'Wheel of fortune',
        BubblePop: 'BubblePop',
        'Pot of greed': 'Pot of greed',
        'Yoru ni Kakeru': 'Into The Night (by item4)',
        'Shake!': 'Shake!',
        'Input names separated by commas or line feed here': 'Input names separated by commas or line feed here',
        'This program is freeware and may be used freely anywhere, including in broadcasts and videos.': 'This program is freeware and may be used freely anywhere, including in broadcasts and videos.',
        'Close': 'Close',
        'The result has been copied': 'The result has been copied'
    },
    ko: {
        'Enter names below': "\uC774\uB984\uB4E4\uC744 \uC785\uB825\uD558\uC138\uC694",
        Shuffle: "\uC11E\uAE30",
        Start: "\uC2DC\uC791",
        Map: "\uB9F5",
        Recording: "\uB179\uD654",
        'The winner is': "\uB2F9\uCCA8 \uC21C\uC704",
        'Using skills': "\uC2A4\uD0AC \uD65C\uC131\uD654",
        'Buy me a coffee': "\uAC1C\uBC1C\uC790\uC5D0\uAC8C \uCEE4\uD53C \uC0AC\uC8FC\uAE30",
        First: "\uCCAB\uBC88\uC9F8",
        Last: "\uB9C8\uC9C0\uB9C9",
        'Wheel of fortune': "\uC6B4\uBA85\uC758 \uC218\uB808\uBC14\uD034",
        BubblePop: "\uBC84\uBE14\uD31D",
        'Pot of greed': "\uC695\uB9DD\uC758 \uD56D\uC544\uB9AC",
        'Yoru ni Kakeru': "\uBC24\uC744 \uB2EC\uB9AC\uB2E4 (by item4)",
        'Shake!': "\uD754\uB4E4\uAE30!",
        'Input names separated by commas or line feed here': "\uC774\uB984\uB4E4\uC744 \uC27C\uD45C\uB098 \uC5D4\uD130\uB85C \uAD6C\uBD84\uD574\uC11C \uB123\uC5B4\uC8FC\uC138\uC694",
        'This program is freeware and may be used freely anywhere, including in broadcasts and videos.': "\uC774 \uD504\uB85C\uADF8\uB7A8\uC740 \uD504\uB9AC\uC6E8\uC5B4\uC774\uBA70 \uBC29\uC1A1\uC774\uB098 \uC601\uC0C1 \uB4F1\uC744 \uD3EC\uD568\uD55C \uC5B4\uB5A4 \uC6A9\uB3C4\uB85C\uB4E0 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uD5C8\uC6A9\uB418\uC5B4\uC788\uC2B5\uB2C8\uB2E4.",
        'Close': "\uB2EB\uAE30",
        'The result has been copied': "\uACB0\uACFC\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dWQgg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Roulette", ()=>Roulette);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _marble = require("./marble");
var _constants = require("./data/constants");
var _particleManager = require("./particleManager");
var _maps = require("./data/maps");
var _utils = require("./utils/utils");
var _camera = require("./camera");
var _rouletteRenderer = require("./rouletteRenderer");
var _skillEffect = require("./skillEffect");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _boundDecorator = require("./utils/bound.decorator");
var _rankRenderer = require("./rankRenderer");
var _minimap = require("./minimap");
var _videoRecorder = require("./utils/videoRecorder");
var _physicsBox2D = require("./physics-box2d");
class Roulette extends EventTarget {
    get isReady() {
        return this._isReady;
    }
    constructor(){
        super(), this._marbles = [], this._lastTime = 0, this._elapsed = 0, this._noMoveDuration = 0, this._shakeAvailable = false, this._updateInterval = 10, this._timeScale = 1, this._speed = 1, this._winners = [], this._particleManager = new (0, _particleManager.ParticleManager)(), this._stage = null, this._camera = new (0, _camera.Camera)(), this._renderer = new (0, _rouletteRenderer.RouletteRenderer)(), this._effects = [], this._winnerRank = 0, this._totalMarbleCount = 0, this._goalDist = Infinity, this._isRunning = false, this._winner = null, this._uiObjects = [], this._autoRecording = false, this._isReady = false, this.targetName = null, this.nerfParam = 1.2;
        this._renderer.init().then(()=>{
            this._init().then(()=>{
                this._isReady = true;
                this._update();
            });
        });
    }
    getZoom() {
        return (0, _constants.initialZoom) * this._camera.zoom;
    }
    addUiObject(obj) {
        this._uiObjects.push(obj);
        if (obj.onWheel) this._renderer.canvas.addEventListener('wheel', obj.onWheel);
        if (obj.onMessage) obj.onMessage((msg)=>{
            console.log('onMessage', msg);
            this.dispatchEvent(new CustomEvent('message', {
                detail: msg
            }));
        });
    }
    _update() {
        if (!this._lastTime) this._lastTime = Date.now();
        const currentTime = Date.now();
        this._elapsed += (currentTime - this._lastTime) * this._speed;
        if (this._elapsed > 100) this._elapsed %= 100;
        this._lastTime = currentTime;
        const interval = this._updateInterval / 1000 * this._timeScale;
        while(this._elapsed >= this._updateInterval){
            this.physics.step(interval);
            this._updateMarbles(this._updateInterval);
            this._particleManager.update(this._updateInterval);
            this._updateEffects(this._updateInterval);
            this._elapsed -= this._updateInterval;
            this._uiObjects.forEach((obj)=>obj.update(this._updateInterval));
        }
        if (this._marbles.length > 1) this._marbles.sort((a, b)=>b.y - a.y);
        if (this._winners.length > 1) {
            const l = this._marbles.length;
            const end = l - 5 > 0 ? l - 5 : l - 1;
            for(let i = l - 1; i > end; i--){
                const marble = this._marbles[i];
                if (marble.name !== this.targetName) this.physics.nerfMarble(this._marbles[i].id, this.nerfParam);
            }
            console.log(`Nerf applied`);
        }
        if (this._stage) {
            this._camera.update({
                marbles: this._marbles,
                stage: this._stage,
                needToZoom: this._goalDist < (0, _constants.zoomThreshold),
                targetIndex: this._winners.length > 0 ? this._winnerRank - this._winners.length : 0
            });
            if (this._isRunning && this._marbles.length > 0 && this._noMoveDuration > 3000) this._changeShakeAvailable(true);
            else this._changeShakeAvailable(false);
        }
        this._render();
        window.requestAnimationFrame(this._update);
    }
    _updateMarbles(deltaTime) {
        if (!this._stage) return;
        for(let i = 0; i < this._marbles.length; i++){
            const marble = this._marbles[i];
            marble.update(deltaTime);
            if (marble.skill === (0, _constants.Skills).Impact) {
                this._effects.push(new (0, _skillEffect.SkillEffect)(marble.x, marble.y));
                this.physics.impact(marble.id);
            }
            if (marble.y > this._stage.goalY) {
                this._winners.push(marble);
                if (this._isRunning && this._winners.length === this._winnerRank + 1) {
                    this.dispatchEvent(new CustomEvent('goal', {
                        detail: {
                            winner: marble.name
                        }
                    }));
                    this._winner = marble;
                    this._isRunning = false;
                    this._particleManager.shot(this._renderer.width, this._renderer.height);
                    setTimeout(()=>{
                        this._recorder.stop();
                    }, 1000);
                } else if (this._isRunning && this._winnerRank === this._winners.length && this._winnerRank === this._totalMarbleCount - 1) {
                    this.dispatchEvent(new CustomEvent('goal', {
                        detail: {
                            winner: this._marbles[i + 1].name
                        }
                    }));
                    this._winner = this._marbles[i + 1];
                    this._isRunning = false;
                    this._particleManager.shot(this._renderer.width, this._renderer.height);
                    setTimeout(()=>{
                        this._recorder.stop();
                    }, 1000);
                }
                setTimeout(()=>{
                    this.physics.removeMarble(marble.id);
                }, 500);
            }
        }
        const targetIndex = this._winnerRank - this._winners.length;
        const topY = this._marbles[targetIndex] ? this._marbles[targetIndex].y : 0;
        this._goalDist = Math.abs(this._stage.zoomY - topY);
        this._timeScale = this._calcTimeScale();
        this._marbles = this._marbles.filter((marble)=>marble.y <= this._stage.goalY);
    }
    _calcTimeScale() {
        if (!this._stage) return 1;
        const targetIndex = this._winnerRank - this._winners.length;
        if (this._winners.length < this._winnerRank + 1 && this._goalDist < (0, _constants.zoomThreshold)) {
            if (this._marbles[targetIndex].y > this._stage.zoomY - (0, _constants.zoomThreshold) * 1.2 && (this._marbles[targetIndex - 1] || this._marbles[targetIndex + 1])) return Math.max(0.2, this._goalDist / (0, _constants.zoomThreshold));
        }
        return 1;
    }
    _updateEffects(deltaTime) {
        this._effects.forEach((effect)=>effect.update(deltaTime));
        this._effects = this._effects.filter((effect)=>!effect.isDestroy);
    }
    _render() {
        if (!this._stage) return;
        const renderParams = {
            camera: this._camera,
            stage: this._stage,
            entities: this.physics.getEntities(),
            marbles: this._marbles,
            winners: this._winners,
            particleManager: this._particleManager,
            effects: this._effects,
            winnerRank: this._winnerRank,
            winner: this._winner,
            size: {
                x: this._renderer.width,
                y: this._renderer.height
            }
        };
        this._renderer.render(renderParams, this._uiObjects);
    }
    async _init() {
        this._recorder = new (0, _videoRecorder.VideoRecorder)(this._renderer.canvas);
        this.physics = new (0, _physicsBox2D.Box2dPhysics)();
        await this.physics.init();
        this.addUiObject(new (0, _rankRenderer.RankRenderer)());
        this.attachEvent();
        const minimap = new (0, _minimap.Minimap)();
        minimap.onViewportChange((pos)=>{
            if (pos) {
                this._camera.setPosition(pos, false);
                this._camera.lock(true);
            } else this._camera.lock(false);
        });
        this.addUiObject(minimap);
        this._stage = (0, _maps.stages)[0];
        this._loadMap();
    }
    mouseHandler(eventName, e) {
        const handlerName = `on${eventName}`;
        const sizeFactor = this._renderer.sizeFactor;
        const pos = {
            x: e.offsetX * sizeFactor,
            y: e.offsetY * sizeFactor
        };
        this._uiObjects.forEach((obj)=>{
            if (!obj[handlerName]) return;
            const bounds = obj.getBoundingBox();
            if (!bounds) obj[handlerName]({
                ...pos,
                button: e.button
            });
            else if (bounds && pos.x >= bounds.x && pos.y >= bounds.y && pos.x <= bounds.x + bounds.w && pos.y <= bounds.y + bounds.h) obj[handlerName]({
                x: pos.x - bounds.x,
                y: pos.y - bounds.y,
                button: e.button
            });
            else obj[handlerName](undefined);
        });
    }
    attachEvent() {
        [
            'MouseMove',
            'MouseUp',
            'MouseDown',
            'DblClick'
        ].forEach((ev)=>{
            // @ts-ignore
            this._renderer.canvas.addEventListener(ev.toLowerCase(), this.mouseHandler.bind(this, ev));
        });
    }
    _loadMap() {
        if (!this._stage) throw new Error('No map has been selected');
        this.physics.createStage(this._stage);
    }
    clearMarbles() {
        this.physics.clearMarbles();
        this._winner = null;
        this._winners = [];
        this._marbles = [];
    }
    start() {
        this._isRunning = true;
        this._winnerRank = (0, _optionsDefault.default).winningRank;
        if (this._winnerRank >= this._marbles.length) this._winnerRank = this._marbles.length - 1;
        if (this._autoRecording) this._recorder.start().then(()=>{
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        });
        else {
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        }
    }
    setSpeed(value) {
        if (value <= 0) throw new Error('Speed multiplier must larger than 0');
        this._speed = value;
    }
    getSpeed() {
        return this._speed;
    }
    setWinningRank(rank) {
        this._winnerRank = rank;
    }
    setAutoRecording(value) {
        this._autoRecording = value;
    }
    setMarbles(names, targetName, param, revParam, weightParam, revWeightParam, nerfParam) {
        this.reset();
        const arr = names.slice();
        let maxWeight = -Infinity;
        let minWeight = Infinity;
        const members = arr.map((nameString)=>{
            const result = (0, _utils.parseName)(nameString);
            if (!result) return null;
            const { name, weight, count } = result;
            if (weight > maxWeight) maxWeight = weight;
            if (weight < minWeight) minWeight = weight;
            return {
                name,
                weight,
                count
            };
        }).filter((member)=>!!member);
        const gap = maxWeight - minWeight;
        let totalCount = 0;
        members.forEach((member)=>{
            if (member) {
                member.weight = 0.1 + (gap ? (member.weight - minWeight) / gap : 0);
                totalCount += member.count;
            }
        });
        this.targetName = targetName;
        this.nerfParam = nerfParam;
        const orders = Array(totalCount).fill(0).map((_, i)=>i).sort(()=>Math.random() - 0.5);
        members.forEach((member)=>{
            if (member) for(let j = 0; j < member.count; j++){
                const order = orders.pop() || 0;
                this._marbles.push(new (0, _marble.Marble)(this.physics, order, totalCount, member.name, member.weight * (member.name === this.targetName ? weightParam : revWeightParam), member.name === this.targetName ? param : revParam));
            }
        });
        this._totalMarbleCount = totalCount;
    }
    _clearMap() {
        this.physics.clear();
        this._marbles = [];
    }
    reset() {
        this.clearMarbles();
        this._clearMap();
        this._loadMap();
        this._goalDist = Infinity;
    }
    getCount() {
        return this._marbles.length;
    }
    _changeShakeAvailable(v) {
        if (this._shakeAvailable !== v) {
            this._shakeAvailable = v;
            this.dispatchEvent(new CustomEvent('shakeAvailableChanged', {
                detail: v
            }));
        }
    }
    shake() {
        if (!this._shakeAvailable) return;
    }
    getMaps() {
        return (0, _maps.stages).map((stage, index)=>{
            return {
                index,
                title: stage.title
            };
        });
    }
    setMap(index) {
        if (index < 0 || index > (0, _maps.stages).length - 1) throw new Error('Incorrect map number');
        const names = this._marbles.map((marble)=>marble.name);
        this._stage = (0, _maps.stages)[index];
        this.setMarbles(names);
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "_update", null);
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "mouseHandler", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./marble":"jGScz","./data/constants":"dKlb7","./particleManager":"7yEm2","./data/maps":"cUMXH","./utils/utils":"ljVDB","./camera":"eRxgS","./rouletteRenderer":"kaELn","./skillEffect":"LqJb0","./options":"jebMA","./utils/bound.decorator":"auTxm","./rankRenderer":"ewQVA","./minimap":"5BIBs","./utils/videoRecorder":"j59yE","./physics-box2d":"Agzxl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPTou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"iC1Dx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iC1Dx":[function(require,module,exports,__globalThis) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
parcelHelpers.export(exports, "__rewriteRelativeImportExtension", ()=>__rewriteRelativeImportExtension);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jGScz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Marble", ()=>Marble);
var _constants = require("./data/constants");
var _utils = require("./utils/utils");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _vector = require("./utils/Vector");
class Marble {
    get position() {
        return this.physics.getMarblePosition(this.id) || {
            x: 0,
            y: 0,
            angle: 0
        };
    }
    get x() {
        return this.position.x;
    }
    set x(v) {
        this.position.x = v;
    }
    get y() {
        return this.position.y;
    }
    set y(v) {
        this.position.y = v;
    }
    get angle() {
        return this.position.angle;
    }
    constructor(physics, order, max, name, weight = 1, gScale = 1){
        this.type = 'marble';
        this.name = '';
        this.size = 0.5;
        this.color = 'red';
        this.hue = 0;
        this.impact = 0;
        this.weight = 1;
        this.skill = (0, _constants.Skills).None;
        this.isActive = false;
        this._skillRate = 0.0005;
        this._coolTime = 5000;
        this._maxCoolTime = 5000;
        this._stuckTime = 0;
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.name = name || `M${order}`;
        this.weight = weight;
        this.physics = physics;
        this._maxCoolTime = 1000 + (1 - this.weight) * 4000;
        this._coolTime = this._maxCoolTime * Math.random();
        this._skillRate = 0.2 * this.weight;
        const maxLine = Math.ceil(max / 10);
        const line = Math.floor(order / 10);
        const lineDelta = -Math.max(0, Math.ceil(maxLine - 5));
        this.hue = 360 / max * order;
        this.color = `hsl(${this.hue} 100% 70%)`;
        this.id = order;
        physics.createMarble(order, 10.25 + order % 10 * 0.6, maxLine - line + lineDelta, gScale);
    }
    update(deltaTime) {
        if (this.isActive && (0, _vector.Vector).lenSq((0, _vector.Vector).sub(this.lastPosition, this.position)) < 0.00001) {
            this._stuckTime += deltaTime;
            if (this._stuckTime > (0, _constants.STUCK_DELAY)) {
                this.physics.shakeMarble(this.id);
                this._stuckTime = 0;
            }
        } else this._stuckTime = 0;
        this.lastPosition = {
            x: this.position.x,
            y: this.position.y
        };
        this.skill = (0, _constants.Skills).None;
        if (this.impact) this.impact = Math.max(0, this.impact - deltaTime);
        if (!this.isActive) return;
        if ((0, _optionsDefault.default).useSkills) this._updateSkillInformation(deltaTime);
    }
    _updateSkillInformation(deltaTime) {
        if (this._coolTime > 0) this._coolTime -= deltaTime;
        if (this._coolTime <= 0) {
            this.skill = Math.random() < this._skillRate ? (0, _constants.Skills).Impact : (0, _constants.Skills).None;
            this._coolTime = this._maxCoolTime;
        }
    }
    render(ctx, zoom, outline, isMinimap = false, skin) {
        ctx.save();
        if (isMinimap) this._renderMinimap(ctx);
        else this._renderNormal(ctx, zoom, outline, skin);
        ctx.restore();
    }
    _renderMinimap(ctx) {
        ctx.fillStyle = this.color;
        this._drawMarbleBody(ctx, true);
    }
    _drawMarbleBody(ctx, isMinimap) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, isMinimap ? this.size : this.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    _renderNormal(ctx, zoom, outline, skin) {
        ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this.impact / 500)}%`;
        if (this._stuckTime > 0) ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this._stuckTime / (0, _constants.STUCK_DELAY))}%`;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = zoom / 2;
        if (skin) {
            const hs = this.size / 2;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(skin, -hs, -hs, hs * 2, hs * 2);
            ctx.restore();
        } else this._drawMarbleBody(ctx, false);
        ctx.shadowColor = '';
        ctx.shadowBlur = 0;
        this._drawName(ctx, zoom);
        if (outline) this._drawOutline(ctx, 2 / zoom);
        if ((0, _optionsDefault.default).useSkills) this._renderCooltime(ctx, zoom);
    // this._renderStuck(ctx, zoom); // for debug
    }
    _drawName(ctx, zoom) {
        ctx.save();
        ctx.translate(this.x, this.y + 0.25);
        ctx.scale(1 / zoom, 1 / zoom);
        ctx.font = `12pt sans-serif`;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 0;
        ctx.strokeText(this.name, 0, 0);
        ctx.fillText(this.name, 0, 0);
        ctx.restore();
    }
    _drawOutline(ctx, lineWidth) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = lineWidth;
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
    _renderCooltime(ctx, zoom) {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2 + 2 / zoom, (0, _utils.rad)(270), (0, _utils.rad)(270 + 360 * this._coolTime / this._maxCoolTime));
        ctx.stroke();
    }
    _renderStuck(ctx, zoom) {
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2 + 3 / zoom, (0, _utils.rad)(270), (0, _utils.rad)(270 + 360 * (1 - this._stuckTime / (0, _constants.STUCK_DELAY))));
        ctx.stroke();
    }
}

},{"./data/constants":"dKlb7","./utils/utils":"ljVDB","./options":"jebMA","./utils/Vector":"3pOEC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dKlb7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initialZoom", ()=>initialZoom);
parcelHelpers.export(exports, "canvasWidth", ()=>canvasWidth);
parcelHelpers.export(exports, "canvasHeight", ()=>canvasHeight);
parcelHelpers.export(exports, "zoomThreshold", ()=>zoomThreshold);
parcelHelpers.export(exports, "STUCK_DELAY", ()=>STUCK_DELAY);
parcelHelpers.export(exports, "Skills", ()=>Skills);
parcelHelpers.export(exports, "DefaultEntityColor", ()=>DefaultEntityColor);
parcelHelpers.export(exports, "DefaultBloomColor", ()=>DefaultBloomColor);
const initialZoom = 30;
const canvasWidth = 1600;
const canvasHeight = 900;
const zoomThreshold = 5;
const STUCK_DELAY = 5000;
var Skills = /*#__PURE__*/ function(Skills) {
    Skills[Skills["None"] = 0] = "None";
    Skills[Skills["Impact"] = 1] = "Impact";
    return Skills;
}({});
const DefaultEntityColor = {
    box: 'cyan',
    circle: 'yellow',
    polyline: 'white'
};
const DefaultBloomColor = {
    box: 'cyan',
    circle: 'yellow',
    polyline: 'cyan'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ljVDB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rad", ()=>rad);
parcelHelpers.export(exports, "parseName", ()=>parseName);
parcelHelpers.export(exports, "pad", ()=>pad);
function rad(degree) {
    return Math.PI * degree / 180;
}
function getRegexValue(regex, str) {
    const result = regex.exec(str);
    return result ? result[1] : '';
}
function parseName(nameStr) {
    const weightRegex = /\/(\d+)/;
    const countRegex = /\*(\d+)/;
    const hasWeight = weightRegex.test(nameStr);
    const hasCount = countRegex.test(nameStr);
    const name = getRegexValue(/^\s*([^\/*]+)?/, nameStr);
    if (!name) return null;
    const weight = hasWeight ? parseInt(getRegexValue(weightRegex, nameStr)) : 1;
    const count = hasCount ? parseInt(getRegexValue(countRegex, nameStr)) : 1;
    return {
        name,
        weight,
        count
    };
}
function pad(v) {
    return v.toString().padStart(2, '0');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jebMA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Options {
    constructor(){
        this.useSkills = true;
        this.winningRank = 0;
        this.autoRecording = true;
    }
}
const options = new Options();
exports.default = options;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pOEC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector", ()=>Vector);
class Vector {
    static sub(v1, v2) {
        return {
            x: v2.x - v1.x,
            y: v2.y - v1.y
        };
    }
    static lenSq(v) {
        return v.x * v.x + v.y * v.y;
    }
    static len(v) {
        return Math.sqrt(this.lenSq(v));
    }
    static mul(v, scalar) {
        return {
            x: v.x * scalar,
            y: v.y * scalar
        };
    }
    static add(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7yEm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticleManager", ()=>ParticleManager);
var _particle = require("./particle");
class ParticleManager {
    update(deltaTime) {
        this._particles.forEach((particle)=>{
            particle.update(deltaTime);
        });
        this._particles = this._particles.filter((particle)=>!particle.isDestroy);
    }
    render(ctx) {
        this._particles.forEach((particle)=>particle.render(ctx));
    }
    shot(x, y) {
        for(let i = 0; i < 200; i++)this._particles.push(new (0, _particle.Particle)(x, y));
    }
    constructor(){
        this._particles = [];
    }
}

},{"./particle":"1fdhA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1fdhA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
var _utils = require("./utils/utils");
var _vector = require("./utils/Vector");
const lifetime = 3000;
class Particle {
    constructor(x, y){
        this._elapsed = 0;
        this.position = {
            x: 0,
            y: 0
        };
        this.force = {
            x: 0,
            y: 0
        };
        this.color = '';
        this.isDestroy = false;
        this.position.x = x;
        this.position.y = y;
        const force = Math.random() * 250;
        const ang = (0, _utils.rad)(90 * Math.random() - 180);
        const fx = Math.cos(ang) * force;
        const fy = Math.sin(ang) * force;
        this.color = `hsl(${Math.random() * 360} 50% 50%)`;
        this.force = {
            x: fx,
            y: fy
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        const delta = (0, _vector.Vector).mul(this.force, deltaTime / 100);
        this.position = (0, _vector.Vector).add(this.position, delta);
        this.force.y += 10 * deltaTime / 100;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx) {
        ctx.save();
        ctx.globalAlpha = 1 - Math.pow(this._elapsed / lifetime, 2);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, 20, 20);
        ctx.restore();
    }
}

},{"./utils/utils":"ljVDB","./utils/Vector":"3pOEC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cUMXH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stages", ()=>stages);
const stages = [
    {
        title: 'Wheel of fortune',
        goalY: 111,
        zoomY: 106.75,
        entities: [
            // polyline
            {
                position: {
                    x: 0,
                    y: 0
                },
                shape: {
                    type: 'polyline',
                    points: [
                        [
                            16.5,
                            -300
                        ],
                        [
                            9.25,
                            -300
                        ],
                        [
                            9.25,
                            8.5
                        ],
                        [
                            2,
                            19.25
                        ],
                        [
                            2,
                            26
                        ],
                        [
                            9.75,
                            30
                        ],
                        [
                            9.75,
                            33.5
                        ],
                        [
                            1.25,
                            41
                        ],
                        [
                            1.25,
                            53.75
                        ],
                        [
                            8.25,
                            58.75
                        ],
                        [
                            8.25,
                            63
                        ],
                        [
                            9.25,
                            64
                        ],
                        [
                            8.25,
                            65
                        ],
                        [
                            8.25,
                            99.25
                        ],
                        [
                            15.1,
                            106.75
                        ],
                        [
                            15.1,
                            111.75
                        ]
                    ],
                    rotation: 0
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            16.5,
                            -300
                        ],
                        [
                            16.5,
                            9.25
                        ],
                        [
                            9.5,
                            20
                        ],
                        [
                            9.5,
                            22.5
                        ],
                        [
                            17.5,
                            26
                        ],
                        [
                            17.5,
                            33.5
                        ],
                        [
                            24,
                            38.5
                        ],
                        [
                            19,
                            45.5
                        ],
                        [
                            19,
                            55.5
                        ],
                        [
                            24,
                            59.25
                        ],
                        [
                            24,
                            63
                        ],
                        [
                            23,
                            64
                        ],
                        [
                            24,
                            65
                        ],
                        [
                            24,
                            100.5
                        ],
                        [
                            16,
                            106.75
                        ],
                        [
                            16,
                            111.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            12.75,
                            37.5
                        ],
                        [
                            7,
                            43.5
                        ],
                        [
                            7,
                            49.75
                        ],
                        [
                            12.75,
                            53.75
                        ],
                        [
                            12.75,
                            37.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            14.75,
                            37.5
                        ],
                        [
                            14.75,
                            43
                        ],
                        [
                            17.5,
                            40.25
                        ],
                        [
                            14.75,
                            37.5
                        ]
                    ]
                }
            },
            // boxes
            {
                position: {
                    x: 15.5,
                    y: 30.0
                },
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 32
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 28
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 30
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 32
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 28
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.4,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.3,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.1,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.9,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.699999999999996,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.7,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.4,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.3,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.1,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.9,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.699999999999996,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.7,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.75,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.25,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.25,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.75,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.75,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.25,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            // wheels
            {
                position: {
                    x: 8,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 24,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14,
                    y: 106.75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -1.2,
                    restitution: 0
                }
            }
        ]
    },
    {
        'title': 'BubblePop',
        'goalY': 83,
        'zoomY': 78,
        'entities': [
            {
                'type': 'static',
                'position': {
                    'x': 10.375,
                    'y': -108.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            6.125,
                            -191.5
                        ],
                        [
                            -1.125,
                            -191.5
                        ],
                        [
                            -1.125,
                            108.5
                        ],
                        [
                            -1.125,
                            151.5
                        ],
                        [
                            -6.125,
                            158.5
                        ],
                        [
                            -1.125,
                            161.5
                        ],
                        [
                            -1.125,
                            179.5
                        ],
                        [
                            -0.9128679656440362,
                            179.7498817789222
                        ],
                        [
                            -1.125,
                            179.9997635578444
                        ],
                        [
                            -1.125,
                            183.5
                        ],
                        [
                            1.625,
                            188.5
                        ],
                        [
                            1.625,
                            191.5
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.25,
                    'y': -108.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0.25,
                            -191.5
                        ],
                        [
                            0.25,
                            158.5
                        ],
                        [
                            3.25,
                            162.5
                        ],
                        [
                            2.25,
                            164.5
                        ],
                        [
                            3.25,
                            166.5
                        ],
                        [
                            0.25,
                            169.5
                        ],
                        [
                            0.25,
                            179.5
                        ],
                        [
                            0.03786796564403616,
                            179.75925677892224
                        ],
                        [
                            0.25,
                            179.9997635578444
                        ],
                        [
                            0.25,
                            183.5
                        ],
                        [
                            -3.25,
                            188.5
                        ],
                        [
                            -3.25,
                            191.5
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 55.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0,
                            -3.25
                        ],
                        [
                            1,
                            -1.75
                        ],
                        [
                            0,
                            0.25
                        ],
                        [
                            1,
                            2.25
                        ],
                        [
                            0,
                            3.25
                        ],
                        [
                            -1,
                            0.25
                        ],
                        [
                            0,
                            -3.25
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.375,
                    'y': 48.25
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -1.125,
                            -2.75
                        ],
                        [
                            -4.125,
                            1.25
                        ],
                        [
                            -1.125,
                            2.75
                        ],
                        [
                            4.125,
                            2.25
                        ],
                        [
                            -1.125,
                            -2.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.15625,
                    'y': 26.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -0.90625,
                            -0.75
                        ],
                        [
                            0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.59375,
                    'y': 26.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0.90625,
                            -0.75
                        ],
                        [
                            -0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.875,
                    'y': 29.25
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -1.8125,
                            0.75
                        ],
                        [
                            0,
                            -0.75
                        ],
                        [
                            1.8125,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.15625,
                    'y': 31.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -0.90625,
                            -0.75
                        ],
                        [
                            0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.59375,
                    'y': 31.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0.90625,
                            -0.75
                        ],
                        [
                            -0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.875,
                    'y': 34.25
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -1.8125,
                            0.75
                        ],
                        [
                            0,
                            -0.75
                        ],
                        [
                            1.8125,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.400000000000002,
                    'y': 39
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 3,
                    'height': 3
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 43
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 3,
                    'height': 3
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 10.7,
                    'y': 10
                },
                'props': {
                    'angularVelocity': 10,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 14.7,
                    'y': 10
                },
                'props': {
                    'angularVelocity': -10,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 12.7,
                    'y': 10
                },
                'props': {
                    'angularVelocity': 10,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 10.7,
                    'y': 14
                },
                'props': {
                    'angularVelocity': -3,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 2,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 14.7,
                    'y': 14
                },
                'props': {
                    'angularVelocity': 3,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 2,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 11.2,
                    'y': 44
                },
                'props': {
                    'angularVelocity': -5,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 10.3,
                    'y': 75
                },
                'props': {
                    'angularVelocity': 8,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 1,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 15.462132034355964,
                    'y': 75
                },
                'props': {
                    'angularVelocity': -8,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 1,
                    'height': 0.1
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11,
                    'y': 65
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13,
                    'y': 65
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15,
                    'y': 65
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12,
                    'y': 67.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14,
                    'y': 67.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13,
                    'y': 69.77058813837772
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.8
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.7,
                    'y': 77.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.8
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.7,
                    'y': 77.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.8
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.625,
                    'y': 80
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 1.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.625,
                    'y': 80
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 1.2
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 12.625,
                    'y': 56.00000000000001
                },
                'props': {
                    'angularVelocity': -8,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 1,
                    'height': 0.1
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.947604593262161,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.947604593262161,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.947604593262161,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.828283102570442,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            }
        ]
    },
    {
        title: 'Pot of greed',
        goalY: 111,
        zoomY: 110,
        entities: [
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            17,
                            -300
                        ],
                        [
                            9,
                            -300
                        ],
                        [
                            9,
                            8.5
                        ],
                        [
                            2,
                            15
                        ],
                        [
                            6,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            7,
                            71
                        ],
                        [
                            9,
                            101
                        ],
                        [
                            8,
                            100.5
                        ],
                        [
                            6,
                            100
                        ],
                        [
                            5,
                            90
                        ],
                        [
                            4,
                            70
                        ],
                        [
                            7,
                            71
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            17,
                            -300
                        ],
                        [
                            17,
                            8.5
                        ],
                        [
                            24,
                            15
                        ],
                        [
                            20,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            19,
                            71
                        ],
                        [
                            17,
                            101
                        ],
                        [
                            18,
                            100.5
                        ],
                        [
                            20,
                            100
                        ],
                        [
                            21,
                            90
                        ],
                        [
                            22,
                            70
                        ],
                        [
                            19,
                            71
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            11,
                            88
                        ],
                        [
                            12,
                            90
                        ],
                        [
                            12,
                            112
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            15,
                            88
                        ],
                        [
                            14,
                            90
                        ],
                        [
                            14,
                            112
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            12,
                            102
                        ],
                        [
                            11,
                            103
                        ],
                        [
                            9,
                            104
                        ],
                        [
                            8,
                            104
                        ],
                        [
                            6,
                            103
                        ],
                        [
                            5,
                            102
                        ],
                        [
                            4,
                            100
                        ],
                        [
                            3,
                            90
                        ],
                        [
                            2,
                            70
                        ],
                        [
                            3,
                            65
                        ],
                        [
                            4,
                            63
                        ],
                        [
                            5,
                            62
                        ],
                        [
                            6,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            14,
                            102
                        ],
                        [
                            15,
                            103
                        ],
                        [
                            17,
                            104
                        ],
                        [
                            18,
                            104
                        ],
                        [
                            20,
                            103
                        ],
                        [
                            21,
                            102
                        ],
                        [
                            22,
                            100
                        ],
                        [
                            23,
                            90
                        ],
                        [
                            24,
                            70
                        ],
                        [
                            23,
                            65
                        ],
                        [
                            22,
                            63
                        ],
                        [
                            21,
                            62
                        ],
                        [
                            20,
                            61.5
                        ]
                    ]
                }
            },
            {
                position: {
                    x: 13,
                    y: 20
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 3,
                    height: 3,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13,
                    y: 55
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 3,
                    height: 3,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 8,
                    y: 37
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 2,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18,
                    y: 37
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 2,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11,
                    y: 12
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15,
                    y: 12
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 8,
                    y: 104
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6,
                    y: 103
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4,
                    y: 100
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 95
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3,
                    y: 90
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.75,
                    y: 85
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.5,
                    y: 80
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.25,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2,
                    y: 70
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18,
                    y: 104
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20,
                    y: 103
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22,
                    y: 100
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 95
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23,
                    y: 90
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.25,
                    y: 85
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.5,
                    y: 80
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.75,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 24,
                    y: 70
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            }
        ]
    },
    {
        title: 'Yoru ni Kakeru',
        goalY: 248,
        zoomY: 234.5,
        entities: [
            {
                position: {
                    x: 2,
                    y: 0
                },
                shape: {
                    type: 'box',
                    width: 1,
                    height: 800,
                    rotation: 0,
                    color: '#222',
                    bloomColor: '#777'
                },
                type: 'static',
                props: {
                    density: 500,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                type: 'static',
                position: {
                    x: 21,
                    y: 0
                },
                props: {
                    density: 500,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 1,
                    height: 800,
                    color: '#222',
                    bloomColor: '#777'
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 25.0
                },
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 27.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#9bec00'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 37.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff6868'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 32.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#80b3ff'
                },
                props: {
                    density: 2,
                    angularVelocity: 4.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 27.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff6868'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 37.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#9bec00'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 50.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 6.5,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c5470'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 20.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 20.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 75.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff577f'
                },
                props: {
                    density: 1,
                    angularVelocity: -4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 75.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff577f'
                },
                props: {
                    density: 1,
                    angularVelocity: 4.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.0,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 100.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: -2.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 100.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 104.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 104.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 106.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 106.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 112.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 112.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 114.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 114.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 105.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 105.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 130.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#435585'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.25,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 130.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 140.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 30,
                    color: '#610c9f'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 140.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: -30,
                    color: '#872341'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 150.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 60,
                    color: '#503c3c'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 150.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: -60,
                    color: '#5c5470'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 160.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 90,
                    color: '#1a3636'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 160.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: -90,
                    color: '#522258'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 180.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 6.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ccb1b1'
                },
                props: {
                    density: 1,
                    angularVelocity: 4.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 180.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 7.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#b1ccb1'
                },
                props: {
                    density: 1,
                    angularVelocity: -4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 195.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 8.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#b3ccff'
                },
                props: {
                    density: 1,
                    angularVelocity: 5.5,
                    restitution: 0
                }
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eRxgS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _constants = require("./data/constants");
class Camera {
    get zoom() {
        return this._zoom;
    }
    set zoom(v) {
        this._targetZoom = v;
    }
    get x() {
        return this._position.x;
    }
    set x(v) {
        this._targetPosition.x = v;
    }
    get y() {
        return this._position.y;
    }
    set y(v) {
        this._targetPosition.y = v;
    }
    get position() {
        return this._position;
    }
    setPosition(v, force = false) {
        if (force) return this._position = {
            x: v.x,
            y: v.y
        };
        return this._targetPosition = {
            x: v.x,
            y: v.y
        };
    }
    lock(v) {
        this._locked = v;
    }
    update({ marbles, stage, needToZoom, targetIndex }) {
        // set target position
        if (!this._locked) this._calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex);
        // interpolate position
        this._position.x = this._interpolation(this.x, this._targetPosition.x);
        this._position.y = this._interpolation(this.y, this._targetPosition.y);
        // interpolate zoom
        this._zoom = this._interpolation(this._zoom, this._targetZoom);
    }
    _calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex) {
        if (marbles.length > 0) {
            const targetMarble = marbles[targetIndex] ? marbles[targetIndex] : marbles[0];
            this.setPosition(targetMarble.position);
            if (needToZoom) {
                const goalDist = Math.abs(stage.zoomY - this._position.y);
                this.zoom = Math.max(1, (1 - goalDist / (0, _constants.zoomThreshold)) * 4);
            } else this.zoom = 1;
        } else {
            this.setPosition({
                x: 0,
                y: 0
            });
            this.zoom = 1;
        }
    }
    _interpolation(current, target) {
        const d = target - current;
        if (Math.abs(d) < 1 / (0, _constants.initialZoom)) return target;
        return current + d / 10;
    }
    renderScene(ctx, callback) {
        const zoomFactor = (0, _constants.initialZoom) * 2 * this._zoom;
        ctx.save();
        ctx.translate(-this.x * this._zoom, -this.y * this._zoom);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(ctx.canvas.width / zoomFactor, ctx.canvas.height / zoomFactor);
        callback(ctx);
        ctx.restore();
    }
    constructor(){
        this._position = {
            x: 0,
            y: 0
        };
        this._targetPosition = {
            x: 0,
            y: 0
        };
        this._zoom = 1;
        this._targetZoom = 1;
        this._locked = false;
    }
}

},{"./data/constants":"dKlb7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kaELn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RouletteRenderer", ()=>RouletteRenderer);
var _constants = require("./data/constants");
class RouletteRenderer {
    constructor(){
        this.sizeFactor = 1;
        this._images = {};
    }
    get width() {
        return this._canvas.width;
    }
    get height() {
        return this._canvas.height;
    }
    get canvas() {
        return this._canvas;
    }
    async init() {
        await this._load();
        this._canvas = document.createElement('canvas');
        this._canvas.width = (0, _constants.canvasWidth);
        this._canvas.height = (0, _constants.canvasHeight);
        this.ctx = this._canvas.getContext('2d', {
            alpha: false
        });
        document.body.appendChild(this._canvas);
        const resizing = (entries)=>{
            const realSize = entries ? entries[0].contentRect : this._canvas.getBoundingClientRect();
            const width = Math.max(realSize.width / 2, 640);
            const height = width / realSize.width * realSize.height;
            this._canvas.width = width;
            this._canvas.height = height;
            this.sizeFactor = width / realSize.width;
        };
        const resizeObserver = new ResizeObserver(resizing);
        resizeObserver.observe(this._canvas);
        resizing();
    }
    async _load() {
        return new Promise((rs)=>{
            const imageUrl = new URL(require("5d0773d3ee663846"));
            this._images["\uCC54\uB8E8"] = new Image();
            this._images["\uCC54\uB8E8"].src = imageUrl.toString();
            this._images["\uCC54\uB8E8"].addEventListener('load', ()=>{
                rs();
            });
        });
    }
    render(renderParameters, uiObjects) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.save();
        this.ctx.scale((0, _constants.initialZoom), (0, _constants.initialZoom));
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.font = '0.4pt sans-serif';
        this.ctx.lineWidth = 3 / (renderParameters.camera.zoom + (0, _constants.initialZoom));
        renderParameters.camera.renderScene(this.ctx, ()=>{
            this.renderEntities(renderParameters.entities);
            this.renderEffects(renderParameters);
            this.renderMarbles(renderParameters);
        });
        this.ctx.restore();
        uiObjects.forEach((obj)=>obj.render(this.ctx, renderParameters, this._canvas.width, this._canvas.height));
        renderParameters.particleManager.render(this.ctx);
        this.renderWinner(renderParameters);
    }
    renderEntities(entities) {
        this.ctx.save();
        entities.forEach((entity)=>{
            this.ctx.save();
            this.ctx.translate(entity.x, entity.y);
            this.ctx.rotate(entity.angle);
            this.ctx.fillStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.strokeStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = entity.shape.bloomColor ?? entity.shape.color ?? (0, _constants.DefaultBloomColor)[entity.shape.type];
            const shape = entity.shape;
            switch(shape.type){
                case 'polyline':
                    if (shape.points.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                        for(let i = 1; i < shape.points.length; i++)this.ctx.lineTo(shape.points[i][0], shape.points[i][1]);
                        this.ctx.stroke();
                    }
                    break;
                case 'box':
                    const w = shape.width * 2;
                    const h = shape.height * 2;
                    this.ctx.rotate(shape.rotation);
                    this.ctx.fillRect(-w / 2, -h / 2, w, h);
                    this.ctx.strokeRect(-w / 2, -h / 2, w, h);
                    break;
                case 'circle':
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
                    this.ctx.stroke();
                    break;
            }
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    renderEffects({ effects, camera }) {
        effects.forEach((effect)=>effect.render(this.ctx, camera.zoom * (0, _constants.initialZoom)));
    }
    renderMarbles({ marbles, camera, winnerRank, winners }) {
        const winnerIndex = winnerRank - winners.length;
        marbles.forEach((marble, i)=>{
            marble.render(this.ctx, camera.zoom * (0, _constants.initialZoom), i === winnerIndex, false, this._images[marble.name] || undefined);
        });
    }
    renderWinner({ winner }) {
        if (!winner) return;
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(this._canvas.width / 2, this._canvas.height - 168, this._canvas.width / 2, 168);
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 48px sans-serif';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Winner', this._canvas.width - 10, this._canvas.height - 120);
        this.ctx.font = 'bold 72px sans-serif';
        this.ctx.fillStyle = winner.color;
        this.ctx.fillText(winner.name, this._canvas.width - 10, this._canvas.height - 55);
        this.ctx.restore();
    }
}

},{"./data/constants":"dKlb7","5d0773d3ee663846":"fEghL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fEghL":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("chamru.192d6726.png") + "?" + Date.now();

},{}],"LqJb0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkillEffect", ()=>SkillEffect);
const lifetime = 500;
class SkillEffect {
    constructor(x, y){
        this._size = 0;
        this._elapsed = 0;
        this.isDestroy = false;
        this.position = {
            x,
            y
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        this._size = this._elapsed / lifetime * 10;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx, zoom) {
        ctx.save();
        const rate = this._elapsed / lifetime;
        ctx.globalAlpha = 1 - rate * rate;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this._size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"auTxm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bound", ()=>bound);
function bound(// eslint-disable-next-line
target, propertyKey, descriptor) {
    return {
        configurable: true,
        get () {
            const boundMethod = descriptor.value.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: boundMethod,
                configurable: true,
                writable: true
            });
            return boundMethod;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ewQVA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RankRenderer", ()=>RankRenderer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _boundDecorator = require("./utils/bound.decorator");
class RankRenderer {
    constructor(){
        this._currentY = 0;
        this._targetY = 0;
        this.fontHeight = 16;
        this._userMoved = 0;
        this._currentWinner = -1;
        this.maxY = 0;
        this.winners = [];
        this.marbles = [];
        this.winnerRank = -1;
    }
    onWheel(e) {
        this._targetY += e.deltaY;
        if (this._targetY > this.maxY) this._targetY = this.maxY;
        this._userMoved = 2000;
    }
    onDblClick(e) {
        if (e) {
            if (navigator.clipboard) {
                const tsv = [];
                let rank = 0;
                tsv.push(...[
                    ...this.winners,
                    ...this.marbles
                ].map((m)=>{
                    rank++;
                    return [
                        rank.toString(),
                        m.name,
                        rank === this.winnerRank ? "\u2606" : ''
                    ].join('\t');
                }));
                tsv.unshift([
                    'Rank',
                    'Name',
                    'Winner'
                ].join('\t'));
                navigator.clipboard.writeText(tsv.join('\n')).then(()=>{
                    if (this.messageHandler) this.messageHandler('The result has been copied');
                });
            }
        }
    }
    onMessage(func) {
        this.messageHandler = func;
    }
    render(ctx, { winners, marbles, winnerRank }, width, height) {
        const startX = width - 5;
        const startY = Math.max(-this.fontHeight, this._currentY - height / 2);
        this.maxY = Math.max(0, (marbles.length + winners.length) * this.fontHeight + this.fontHeight);
        this._currentWinner = winners.length;
        this.winners = winners;
        this.marbles = marbles;
        this.winnerRank = winnerRank;
        ctx.save();
        ctx.textAlign = 'right';
        ctx.font = '10pt sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`${winners.length} / ${winners.length + marbles.length}`, width - 5, this.fontHeight);
        ctx.beginPath();
        ctx.rect(0, this.fontHeight + 2, width, this.maxY);
        ctx.clip();
        ctx.translate(0, -startY);
        ctx.font = 'bold 11pt sans-serif';
        winners.forEach((marble, rank)=>{
            const y = rank * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = marble.color;
                ctx.fillText(`${rank === winnerRank ? "\u2606" : '\u2714'} ${marble.name} #${rank + 1}`, startX, 20 + y);
            }
        });
        ctx.font = '10pt sans-serif';
        marbles.forEach((marble, rank)=>{
            const y = (rank + winners.length) * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = marble.color;
                ctx.fillText(`${marble.name} #${rank + 1 + winners.length}`, startX, 20 + y);
            }
        });
        ctx.restore();
    }
    update(deltaTime) {
        if (this._currentWinner === -1) return;
        if (this._userMoved > 0) this._userMoved -= deltaTime;
        else this._targetY = this._currentWinner * this.fontHeight + this.fontHeight;
        if (this._currentY !== this._targetY) this._currentY += (this._targetY - this._currentY) * (deltaTime / 250);
        if (Math.abs(this._currentY - this._targetY) < 1) this._currentY = this._targetY;
    }
    getBoundingBox() {
        return null;
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onWheel", null);
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onDblClick", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./utils/bound.decorator":"auTxm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5BIBs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Minimap", ()=>Minimap);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _constants = require("./data/constants");
var _boundDecorator = require("./utils/bound.decorator");
class Minimap {
    constructor(){
        this.lastParams = null;
        this._onViewportChangeHandler = null;
        this.mousePosition = null;
        this.boundingBox = {
            x: 10,
            y: 10,
            w: 104,
            h: 0
        };
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    onViewportChange(callback) {
        this._onViewportChangeHandler = callback;
    }
    update() {
    // nothing to do
    }
    onMouseMove(e) {
        if (!e) {
            this.mousePosition = null;
            if (this._onViewportChangeHandler) this._onViewportChangeHandler();
            return;
        }
        if (!this.lastParams) return;
        this.mousePosition = {
            x: e.x,
            y: e.y
        };
        if (this._onViewportChangeHandler) this._onViewportChangeHandler({
            x: this.mousePosition.x / 4,
            y: this.mousePosition.y / 4
        });
    }
    render(ctx, params) {
        if (!ctx) return;
        const { stage } = params;
        if (!stage) return;
        this.boundingBox.h = stage.goalY * 4;
        this.lastParams = params;
        this.ctx = ctx;
        ctx.save();
        ctx.fillStyle = '#333';
        ctx.translate(10, 10);
        ctx.scale(4, 4);
        ctx.fillRect(0, 0, 26, stage.goalY);
        this.ctx.lineWidth = 3 / (params.camera.zoom + (0, _constants.initialZoom));
        this.drawEntities(params.entities);
        this.drawMarbles(params);
        this.drawViewport(params);
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 1;
        ctx.strokeRect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.w, this.boundingBox.h);
        ctx.restore();
    }
    drawViewport(params) {
        this.ctx.save();
        const { camera, size } = params;
        const zoom = camera.zoom * (0, _constants.initialZoom);
        const w = size.x / zoom;
        const h = size.y / zoom;
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 1 / zoom;
        this.ctx.strokeRect(camera.x - w / 2, camera.y - h / 2, w, h);
        this.ctx.restore();
    }
    drawEntities(entities) {
        this.ctx.save();
        entities.forEach((entity)=>{
            this.ctx.save();
            this.ctx.fillStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.strokeStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.translate(entity.x, entity.y);
            this.ctx.rotate(entity.angle);
            this.ctx.save();
            const shape = entity.shape;
            switch(shape.type){
                case 'box':
                    const w = shape.width * 2;
                    const h = shape.height * 2;
                    this.ctx.rotate(shape.rotation);
                    this.ctx.fillRect(-w / 2, -h / 2, w, h);
                    break;
                case 'circle':
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
                    this.ctx.stroke();
                    break;
                case 'polyline':
                    if (shape.points.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                        for(let i = 1; i < shape.points.length; i++)this.ctx.lineTo(shape.points[i][0], shape.points[i][1]);
                        this.ctx.stroke();
                    }
                    break;
            }
            this.ctx.restore();
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    drawMarbles(params) {
        const { marbles } = params;
        marbles.forEach((marble)=>{
            marble.render(this.ctx, 1, false, true);
        });
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Minimap.prototype, "onMouseMove", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./data/constants":"dKlb7","./utils/bound.decorator":"auTxm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j59yE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoRecorder", ()=>VideoRecorder);
var _utils = require("./utils");
class VideoRecorder {
    constructor(canvas){
        this.chunks = [];
        this.stopping = false;
        this.targetCanvas = canvas;
        this.videoStream = this.targetCanvas.captureStream();
        this.mediaRecorder = new MediaRecorder(this.videoStream, {
            videoBitsPerSecond: 6000000
        });
    }
    async start() {
        this.stopping = false;
        return new Promise((rs)=>{
            this.chunks = [];
            this.mediaRecorder.ondataavailable = (e)=>{
                this.chunks.push(e.data);
            };
            this.mediaRecorder.onstop = ()=>{
                const blob = new Blob(this.chunks, {
                    type: 'video/webm'
                });
                const videoUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                const d = new Date();
                downloadLink.href = videoUrl;
                downloadLink.download = `marble_roulette_${d.getFullYear()}${(0, _utils.pad)(d.getMonth() + 1)}${(0, _utils.pad)(d.getDate())}${(0, _utils.pad)(d.getHours())}${(0, _utils.pad)(d.getMinutes())}${(0, _utils.pad)(d.getSeconds())}.webm`;
                downloadLink.click();
                downloadLink.remove();
                URL.revokeObjectURL(videoUrl);
            };
            this.mediaRecorder.onstart = ()=>{
                rs();
            };
            this.mediaRecorder.start();
        });
    }
    stop() {
        this.stopping = true;
        if (this.mediaRecorder.state === 'recording') this.mediaRecorder.stop();
    }
}

},{"./utils":"ljVDB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Agzxl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Box2dPhysics", ()=>Box2dPhysics);
var _box2DWasm = require("box2d-wasm");
var _box2DWasmDefault = parcelHelpers.interopDefault(_box2DWasm);
class Box2dPhysics {
    async init() {
        this.Box2D = await (0, _box2DWasmDefault.default)();
        this.gravity = new this.Box2D.b2Vec2(0, 10);
        this.world = new this.Box2D.b2World(this.gravity);
        const listener = new this.Box2D.JSContactListener();
        listener.BeginContact = (contactPtr)=>this._onBeginContact(contactPtr);
        listener.EndContact = (_)=>{}; // no-op
        listener.PreSolve = (_, __)=>{}; // no-op
        listener.PostSolve = (_, __)=>{}; // no-op
        this.world.SetContactListener(listener);
        console.log('box2d ready');
    }
    clear() {
        this.clearEntities();
    }
    clearMarbles() {
        Object.values(this.marbleMap).forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.marbleMap = {};
    }
    createStage(stage) {
        this.createEntities(stage.entities);
    }
    createEntities(entities) {
        if (!entities) return;
        const bodyTypes = {
            static: this.Box2D.b2_staticBody,
            kinematic: this.Box2D.b2_kinematicBody
        };
        entities.forEach((entity)=>{
            const bodyDef = new this.Box2D.b2BodyDef();
            bodyDef.set_type(bodyTypes[entity.type]);
            const body = this.world.CreateBody(bodyDef);
            const fixtureDef = new this.Box2D.b2FixtureDef();
            fixtureDef.set_density(entity.props.density);
            fixtureDef.set_restitution(entity.props.restitution);
            let shape;
            switch(entity.shape.type){
                case 'box':
                    shape = new this.Box2D.b2PolygonShape();
                    shape.SetAsBox(entity.shape.width, entity.shape.height, 0, entity.shape.rotation);
                    fixtureDef.set_shape(shape);
                    body.CreateFixture(fixtureDef);
                    break;
                case 'polyline':
                    shape = new this.Box2D.b2EdgeShape();
                    for(let i = 0; i < entity.shape.points.length - 1; i++){
                        const p1 = entity.shape.points[i];
                        const p2 = entity.shape.points[i + 1];
                        const v1 = new this.Box2D.b2Vec2(p1[0], p1[1]);
                        const v2 = new this.Box2D.b2Vec2(p2[0], p2[1]);
                        const edge = new this.Box2D.b2EdgeShape();
                        edge.SetTwoSided(v1, v2);
                        body.CreateFixture(edge, 1);
                    }
                    break;
                case 'circle':
                    shape = new this.Box2D.b2CircleShape();
                    shape.set_m_radius(entity.shape.radius);
                    fixtureDef.set_shape(shape);
                    body.CreateFixture(fixtureDef);
                    break;
            }
            body.SetAngularVelocity(entity.props.angularVelocity);
            body.SetTransform(new this.Box2D.b2Vec2(entity.position.x, entity.position.y), 0);
            this.entities.push({
                body,
                x: entity.position.x,
                y: entity.position.y,
                angle: 0,
                shape: entity.shape,
                life: entity.props.life ?? -1
            });
        });
    }
    clearEntities() {
        this.entities.forEach((entity)=>{
            this.world.DestroyBody(entity.body);
        });
        this.entities = [];
    }
    createMarble(id, x, y, gScale = 1) {
        const circleShape = new this.Box2D.b2CircleShape();
        circleShape.set_m_radius(0.25);
        const bodyDef = new this.Box2D.b2BodyDef();
        bodyDef.set_type(this.Box2D.b2_dynamicBody);
        bodyDef.set_position(new this.Box2D.b2Vec2(x, y));
        const body = this.world.CreateBody(bodyDef);
        body.CreateFixture(circleShape, 1 + Math.random());
        body.SetAwake(false);
        body.SetEnabled(false);
        const userData = body.GetUserData();
        // @ts-ignore
        userData.type = 'marble';
        // @ts-ignore
        userData.id = id;
        // @ts-ignore
        userData.gScale = gScale;
        // @ts-ignore
        userData.defaultGScale = 1;
        //console.log(userData);
        this.marbleCollisionInfos[id] = false;
        this.marbleMap[id] = body;
    }
    _handleCollision(bodyA, bodyB) {
        [
            bodyA,
            bodyB
        ].forEach((body)=>{
            const data = body.GetUserData();
            // @ts-ignore
            if (data?.type === 'marble' && typeof data.id === 'number') {
                // @ts-ignore
                const id = data.id;
                // @ts-ignore
                const gScale = data.gScale;
                // @ts-ignore
                const defaultGScale = data.defaultGScale;
                if (!this.marbleCollisionInfos[id]) {
                    body.SetGravityScale(gScale);
                    this.marbleCollisionInfos[id] = true;
                } else {
                    body.SetGravityScale(defaultGScale);
                    this.marbleCollisionInfos[id] = false;
                }
            /*console.log(
          `Marble id=${id} ${this.marbleCollisionInfos[id]} → gravityScale set to ${body.GetGravityScale()}`
        );*/ }
        });
    }
    nerfMarble(id, nerfParam = 1.2) {
        const body = this.marbleMap[id];
        const data = body.GetUserData();
        // @ts-ignore
        if (data.defaultGScale == 1) {
            // @ts-ignore
            data.gScale = data.gScale * nerfParam;
            // @ts-ignore
            data.defaultGScale = data.defaultGScale * nerfParam;
            // @ts-ignore
            console.log(`Nerfed marble id=${id}: gScale ${data.gScale} defaultGScale ${data.defaultGScale}`);
        } else console.log(`Did not nerf marble id=${id}: already nerfed`);
    }
    shakeMarble(id) {
        const body = this.marbleMap[id];
        if (body) body.ApplyLinearImpulseToCenter(new this.Box2D.b2Vec2(Math.random() * 10 - 5, Math.random() * 10 - 5), true);
    }
    removeMarble(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            this.world.DestroyBody(marble);
            delete this.marbleMap[id];
        }
    }
    getMarblePosition(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            const pos = marble.GetPosition();
            return {
                x: pos.x,
                y: pos.y,
                angle: marble.GetAngle()
            };
        } else return {
            x: 0,
            y: 0,
            angle: 0
        };
    }
    getEntities() {
        return this.entities.map((entity)=>{
            return {
                ...entity,
                angle: entity.body.GetAngle()
            };
        });
    }
    impact(id) {
        const src = this.marbleMap[id];
        if (!src) return;
        Object.values(this.marbleMap).forEach((body)=>{
            if (body === src) return;
            const distVector = new this.Box2D.b2Vec2(body.GetPosition().x, body.GetPosition().y);
            distVector.op_sub(src.GetPosition());
            const distSq = distVector.LengthSquared();
            if (distSq < 100) {
                distVector.Normalize();
                const power = 1 - distVector.Length() / 10;
                distVector.op_mul(power * power * 5);
                body.ApplyLinearImpulseToCenter(distVector, true);
            }
        });
    }
    start() {
        for(const key in this.marbleMap){
            const marble = this.marbleMap[key];
            marble.SetAwake(true);
            marble.SetEnabled(true);
        }
    }
    step(deltaSeconds) {
        this.deleteCandidates.forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.deleteCandidates = [];
        this.world.Step(deltaSeconds, 6, 2);
        for(let i = this.entities.length - 1; i >= 0; i--){
            const entity = this.entities[i];
            if (entity.life > 0) {
                const edge = entity.body.GetContactList();
                if (edge.contact && edge.contact.IsTouching()) {
                    this.deleteCandidates.push(entity.body);
                    this.entities.splice(i, 1);
                }
            }
        }
    }
    constructor(){
        this.marbleMap = {};
        this.entities = [];
        this.deleteCandidates = [];
        this.marbleCollisionInfos = {};
        this._onBeginContact = (contactPtr)=>{
            const contact = this.Box2D.wrapPointer(contactPtr, this.Box2D.b2Contact);
            const fixtureA = contact.GetFixtureA();
            const fixtureB = contact.GetFixtureB();
            const bodyA = fixtureA.GetBody();
            const bodyB = fixtureB.GetBody();
            this._handleCollision(bodyA, bodyB);
        };
    }
}

},{"box2d-wasm":"21GKF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"21GKF":[function(require,module,exports,__globalThis) {
/**
 * @param {Parameters<import('box2d-wasm')>} args
 * @return {ReturnType<import('box2d-wasm')>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = async (...args)=>{
    /**
   * This validation expression comes from wasm-feature-detect:
   * https://github.com/GoogleChromeLabs/wasm-feature-detect
   * 
   * Copyright 2019 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *     http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const hasSIMD = WebAssembly.validate(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        5,
        1,
        96,
        0,
        1,
        123,
        3,
        2,
        1,
        0,
        10,
        10,
        1,
        8,
        0,
        65,
        0,
        253,
        15,
        253,
        98,
        11
    ]));
    /** @type {{ 'default': import('box2d-wasm') }} */ const Box2DModule = await (hasSIMD ? require("1c9c9cecb712db83") : require("1131b71228caeef3"));
    const { 'default': Box2DFactory } = Box2DModule;
    // awaiting gives us a better stack trace (at the cost of an extra microtask)
    return await Box2DFactory(...args);
};

},{"1c9c9cecb712db83":"P2Zvm","1131b71228caeef3":"4bXPM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"P2Zvm":[function(require,module,exports,__globalThis) {
module.exports = import("./Box2D.simd.7cdb49ce.js").then(()=>module.bundle.root('1SQho'));

},{"1SQho":"1SQho"}],"4bXPM":[function(require,module,exports,__globalThis) {
module.exports = import("./Box2D.a070c79d.js").then(()=>module.bundle.root('66ig1'));

},{"66ig1":"66ig1"}]},["9ZvZc","gH3Lb"], "gH3Lb", "parcelRequire5cc2", {}, "./", "/")

//# sourceMappingURL=roulette.34df32e0.js.map
