# Internalizer

A simple practicing app for Dr. Reeder's [Commit to Win](http://www.heidireeder.com/commit-to-win) concept.

## Running on the Web

Browse to [internalizer.wenzel.io](http://internalizer.wenzel.io) with your desktop or mobile device.


## Installing on Android

Releases with pre-built .apk packages are on the [github releases page](https://github.com/fwenzel/internalizer/releases).

Browse there from your phone and click on the green button to download and install the .apk.

*Note:* You might have to opt-in to ["Allow Installs from Unknown Sources"](http://developer.android.com/distribute/tools/open-distribution.html) in your Android device settings, or it will reject an app that's not coming from the Google Play Store.

## Building / Contributing

The app is written with Apache Cordova. Building it goes roughly like this:
* Install Cordova (4.0)
* clone the app
* ``cordova platform add firefoxos android browser``
* ``cordova build``

The app has been tested on the Web ("browser" platform), Firefox OS and Android.

Issues/pull requests are welcome.


## License

This app is open source and licensed under an MIT license. Read the file LICENSE for more info.

Concept by Jake Crane, code by Fred Wenzel.
