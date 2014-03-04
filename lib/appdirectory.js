helpers = require('./helpers')

function AppDirectory(options) {
    if (helpers.instanceOf(options, String)) {
        options = {appName: options}
    }

    this._options = options // always a useful thing to carry around
    this.appName = options.appName
    this.appAuthor = options.appAuthor || null
    this.appVersion = options.appVersion || null
    this.useRoaming = options.useRoaming || false
}

module.exports = AppDirectory
