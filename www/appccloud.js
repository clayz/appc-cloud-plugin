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