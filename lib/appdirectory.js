helpers = require('./helpers')

function AppDirectory(options) {
    if helpers.instanceOf(options, String) {
        options = {appName: options}
    }

    this._options = options // always a useful thing to carry around
    this.appName = options.appName
    this.appAuthor = options.AppAuthor || null
    this.appVersion = options.version || null
    this.useRoaming = options.roaming || false
    this.multipath = options.multipath || false
}

module.exports = AppDirectory
