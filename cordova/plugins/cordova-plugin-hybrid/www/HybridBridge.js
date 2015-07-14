cordova.define("cordova-plugin-hybrid.hybridbridge", function(require, exports, module) {

    var argscheck = require('cordova/argscheck'),
        channel = require('cordova/channel'),
        utils = require('cordova/utils'),
        exec = require('cordova/exec'),
        cordova = require('cordova');

    function HybridBridge() {

    }
    HybridBridge.prototype.addItem = function(item, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "HybridBridge", "addItem", [item]);
    };

    module.exports = new HybridBridge();

});
