var db = firebase.firestore();
var db_user = db.collection('users');

// データの書き込み

// documentを指定してコレクションに追加：set
const data = {
  name: 'Los Angeles',
  age: '55',
  sample: "new data"
};
db_user.doc('sample').set(data);


// documentを指定せずにコレクションに追加（document idは自動採番）：add
const data2 = {
  name: "Los Angeles",
  age: '22',
  sample: "new data"
}
// db_user.add(data2);


// データの読み込み
db_user.doc('sample').get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
