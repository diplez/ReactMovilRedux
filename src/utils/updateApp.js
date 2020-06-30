import { Alert } from 'react-native';
import AppUpdate from 'react-native-appupdate';
import React from 'react';

export const appUpdate = new AppUpdate({
  iosAppId: '123456',
  apkVersionUrl: 'https://github.com/version.json',
  needUpdateApp: (needUpdate) => {
    Alert.alert(
      'Update tip',
      'Finding new version, do you want to update?',
      [
        {text: 'Cancel', onPress: () => {}},
        {text: 'Update', onPress: () => needUpdate(true)}
      ]
    );
  },
  forceUpdateApp: () => {
    console.log("Force update will start")
  },
  notNeedUpdateApp: () => {
    console.log("App is up to date")
  },
  downloadApkStart: () => { console.log("Start") },
  downloadApkProgress: (progress) => { console.log(`Downloading ${progress}%...`) },
  downloadApkEnd: () => { console.log("End") },
  onError: () => { console.log("downloadApkError") }
});
//appUpdate.checkUpdate();
