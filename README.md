To build for android release first update versions in `android/app/build.gradle` in `defaultConfig`, and then from `android` folder `./gradlew bundleRelease`. Output `.aab` file should be available in `GameOfP/android/app/build/outputs/bundle/release`.

[ ] IF YOU EVER COME BACK TO HERE - set up pipeline to generate .aab automatically

There is "a list of sjp words for games .zip" - we can use that if something is wrong with the current words
