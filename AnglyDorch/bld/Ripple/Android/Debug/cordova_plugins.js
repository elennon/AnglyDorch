cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.msopentech.azure-mobile-services/www/MobileServices.Web.Ext.js",
        "id": "com.msopentech.azure-mobile-services.AzureMobileServices.Ext",
        "runs": true
    },
    {
        "file": "plugins/com.msopentech.azure-mobile-services/www/MobileServices.Web-1.1.3.js",
        "id": "com.msopentech.azure-mobile-services.AzureMobileServices",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.5.2",
    "com.msopentech.azure-mobile-services": "0.1.4"
}
// BOTTOM OF METADATA
});