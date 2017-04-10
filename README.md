#Morse-v2

A Morse code practice button, made using React Native. Ever wanted to practice your Morse code for more efficient communication with that Civil War Prototype Submarine recreation you have? Well, now you can.

##But how do I get it running on my computer/phone? 

I am going to assume that you understand the prerequisites, like Node Package Manager, the JDK, Android Studio or Xcode, simulators, etc.  

Clone the repo, 
```
git clone https://github.com/inconceivable/Morse-v2.git
```
use npm to install the modules, 
```
npm install
```
then run it on the platform of your choosing:
```
react-native run-ios
```
or
```
react-native run-android
```
##Troubleshooting

###iOS
For running on ios, you may need to manually add the sound to the Xcode project. 

###Android
May need to run `gradlew clean` in the android directory if you run into build errors.  
For some reason in the Android version every time you let go of the button the beep goes on for a little while. Not sure why yet.






