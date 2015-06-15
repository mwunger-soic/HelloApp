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
        app.receivedEvent('deviceready');
        var options = { frequency:5000,
                        maximumAge: 0, // Accept a cached position with age x
                        timeout: 10000, // ms before timing out
                        enableHighAccuracy:true };
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        navigator.accelerometer.getCurrentAcceleration(onSuccessAccl, onErrorAccl);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        devicePropertyDisplay();

        console.log('Received Event: ' + id);
    }
};

//acceleration function
function onSuccessAccl(acceleration) 
{
    var element = document.getElementById('acceleration');
    element.innerHTML ='Acceleration X: ' + acceleration.x + '\n' +
        'Acceleration Y: ' + acceleration.y + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' +
        'Timestamp: ' + acceleration.timestamp + '\n';
}
function onErrorAccl() 
{
    alert('onError!');
}

//geolocation function
function onSuccess(position) 
{
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
    'Longitude: ' + position.coords.longitude + '<br />' +
    'Altitude: ' + position.coords.altitude + '<br />' +
    'Accuracy: ' + position.coords.accuracy + '<br />';
}
function onError(error) 
{
    var element = document.getElementById('geolocation');
    element.innerHTML = 'code: ' + error.code + 'message: ' + error.message;
}

//Device properties functions
function devicePropertyDisplay()
{
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Model: ' + device.model + '<br />' +
    'Device Cordova: ' + device.cordova + '<br />' +
    'Device Platform: ' + device.platform + '<br />' +
    'Device UUID: ' + device.uuid + '<br />' +
    'Device Version: ' + device.version + '<br />';
}

app.initialize();