var should = require('should')

var helpers = require('../lib/helpers')
var AppDirectory = require('../lib/appdirectory')

describe('helpers.js', function() {
    describe('instanceOf', function() {
        it('should correctly work out if an object is a subtype of a prototype', function() {

            helpers.instanceOf('sampleString', String).should.be.true
            helpers.instanceOf(new String(), String).should.be.true

            helpers.instanceOf({}, Object).should.be.true
            helpers.instanceOf(new Object(), Object).should.be.true
            helpers.instanceOf('string', Object).should.be.true // Potentially confusing behaviour

            helpers.instanceOf([], Array).should.be.true
            helpers.instanceOf(new Array(), Array).should.be.true

            helpers.instanceOf('', Array).should.be.false

        })
    })
})

describe('appdirectory.js', function() {
    describe('AppDirectory', function() {
        it('should handle instantiation options object', function() {
            var ad = new AppDirectory({
                appName: "myapp",
                appAuthor: "Johz",
                appVersion: "0.1.1",
                useRoaming: true,
            })

            ad.should.containEql({appName: 'myapp'})
            ad.should.containEql({appAuthor: 'Johz'})
            ad.should.containEql({appVersion: '0.1.1'})
            ad.should.containEql({useRoaming: true})
        })
    })
})