var db = firebase.firestore();
var db_user = db.collection('users');
var db_study = db.collection('study');
var doc_1 = db_study.doc('nEPlLidIiEWOzuJUzNsV');
var doc_2 = db_user.doc('GXQLQc8ctPd03jajaKuW');
var doc_3 = db_user.doc('N3DtzU4NSUeS8FDA8K75');

var today = new Date();
var week = ['日', '月', '火', '水', '木', '金', '土'];
var year = today.getFullYear();
var month = today.getMonth();
var dayOfMonth = today.getDate();
var dayOfWeek = week[today.getDay()];
var japaneseStyleTime = year + '年' + month + '月' + dayOfMonth + '日（' + dayOfWeek + '）';
today.setDate(today.getDate());
var yyyy = today.getFullYear();
var mm = ("0"+(today.getMonth()+1)).slice(-2);
var dd = ("0"+today.getDate()).slice(-2);