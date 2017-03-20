
import firebase from 'firebase';

const configDev = {
    apiKey: "AIzaSyCq5f69XJ6gf-qrVyRNIVF_AZJ3hYQJ81k",
    authDomain: "drygondev.firebaseapp.com",
    databaseURL: "https://drygondev.firebaseio.com",
    storageBucket: "drygondev.appspot.com",
    messagingSenderId: "352491886481"
  };

 /* var configTest = {
    apiKey: "AIzaSyAJ34lSy1_34snyTBXNS3POiU0KAuPiOgA",
    authDomain: "drygontest.firebaseapp.com",
    databaseURL: "https://drygontest.firebaseio.com",
    storageBucket: "drygontest.appspot.com",
    messagingSenderId: "441269079239"
  };

  var configProd = {
    apiKey: "AIzaSyCT-hG5_-Dm4mFpY7eFfQF8XAPOIlENpXI",
    authDomain: "drygonprod.firebaseapp.com",
    databaseURL: "https://drygonprod.firebaseio.com",
    storageBucket: "drygonprod.appspot.com",
    messagingSenderId: "829435435228"
  };
  */

 firebase.initializeApp(configDev)
 export const database = firebase.database()
 export const storage = firebase.storage()


export const cloudinaryConfig = {
  cloud_name: "drygonweb",
  api_key: "475975958647686",
  api_secret: "qSS_IgHvYLn-HDuMZCCjG-tHpWU",
  enhance_image_tag: true,
  static_image_support: true,
}