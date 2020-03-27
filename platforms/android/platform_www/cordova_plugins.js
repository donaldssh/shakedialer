cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.teamnemitoff.phonedialer.phonedialer",
      "file": "plugins/com.teamnemitoff.phonedialer/www/dialer.js",
      "pluginId": "com.teamnemitoff.phonedialer",
      "merges": [
        "phonedialer"
      ]
    },
    {
      "id": "cordova-plugin-device-motion.Acceleration",
      "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
      "pluginId": "cordova-plugin-device-motion",
      "clobbers": [
        "Acceleration"
      ]
    },
    {
      "id": "cordova-plugin-device-motion.accelerometer",
      "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
      "pluginId": "cordova-plugin-device-motion",
      "clobbers": [
        "navigator.accelerometer"
      ]
    },
    {
      "id": "cordova-plugin-shake.Shake",
      "file": "plugins/cordova-plugin-shake/www/shake.js",
      "pluginId": "cordova-plugin-shake",
      "clobbers": [
        "shake"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.mainHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
      "pluginId": "cordova-plugin-nativestorage",
      "clobbers": [
        "NativeStorage"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.LocalStorageHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-nativestorage.NativeStorageError",
      "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
      "pluginId": "cordova-plugin-nativestorage"
    }
  ];
  module.exports.metadata = {
    "com.teamnemitoff.phonedialer": "0.3.1",
    "cordova-plugin-device-motion": "2.0.1",
    "cordova-plugin-shake": "0.6.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-nativestorage": "2.3.2"
  };
});