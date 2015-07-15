/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        window.plugins.toast.showLongBottom('Use the back button to return to main.');
        document.getElementById("btnAdd").addEventListener("click", app.addItem);
        document.getElementById("btnToast").addEventListener("click", app.showToast);
        document.getElementById("btnDeviceInfo").addEventListener("click", app.showDeviceInfo);
        document.getElementById("btnUrl").addEventListener("click", app.openWeb);
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    addItem: function() {
        console.log("Plugin ADD ITEM CALLED " + HybridBridge);
        var item = document.getElementById("bookmark").value;
        HybridBridge.addItem(item, "org.sample.hybridandroidapp.MyListActivity", function(){console.log("Hybrid Bridge Success")},function(e){console.log("Hybrid Bridge Error" + e)});
    },
    showDeviceInfo: function(){
        var message = 'Cordova version: ' + device.cordova;
        message += '\n\nDevice Model: ' + device.model;
        message += '\n\nDevice Version (Android): ' + device.version;
        alert(message);
    },
    showToast: function(){
        window.plugins.toast.showShortCenter('PHONEGAP IS AWESOME!!!');
    },
    openWeb: function(){
        var url = "http://phonegap.com"
        window.open(url)
    }
};

app.initialize();