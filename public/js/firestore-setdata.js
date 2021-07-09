$(function() {
    $('input[name="date"]').val(yyyy + '-' + mm + '-' + dd);　// 日付の初期値を本日に設定
    $('.addcollection button').click(function() {
        let inputDate = $('input[name="date"]').val();
        let javascriptDate = new Date(inputDate);
        let firestoreDate = firebase.firestore.Timestamp.fromDate(javascriptDate)
        let inputData = {
            postdate: firestoreDate,
            title: $('input[name="title"]').val(),
            code: $('textarea').val(),
            text: $('input[name="text"]').val(),
        };
        console.log('このデータを追加');
        console.log(inputData);
        db_study.add(inputData);
        // console.log(new Date(inputData.date));
        // console.log(firebase.firestore.Timestamp.fromDate(new Date(inputData.date))); // firestoreの型
        // console.log(firebase.firestore.Timestamp.fromDate(new Date(inputData.date)).toDate()); //javascriptの型に戻す
    });
});


// documentを指定してコレクションに追加：set
const data = {
  name: 'Los Angeles',
  age: '55',
  sample: "new data"
};
// db_user.doc('sample').set(data);


// documentを指定せずにコレクションに追加（document idは自動採番）：add
const data2 = {
  name: "Los Angeles",
  age: '22',
  sample: "new data"
}
// db_user.add(data2);