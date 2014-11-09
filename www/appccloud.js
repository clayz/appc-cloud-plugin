cordova.define("com.clay.phonegap.plugin.appccloud", function(require, exports, module) {
    var appccloud = {
        listView: function() {
            cordova.exec(
                successCallback,
                failureCallback,
                'AppCCloud',
                'listView',
                []);
        }
    };

    module.exports = appccloud;
});