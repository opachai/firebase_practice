var db = firebase.firestore();
var db_user = db.collection('users');
var doc = db_user.doc('sample');

/////////////////////////////////
///////// データの読み込み /////////
/////////////////////////////////

// get()がdocumentの取得
function getDocument(path) {
    console.log('単一ドキュメントの取得');
    doc.get().then((doc) => {
        console.log(doc.data());
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
};

function getDocuments(path) {
    console.log('複数ドキュメントの取得');
    db_user.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
};

function filterDocuments(path,cond,comp,val) {
    console.log('複数ドキュメントから絞り込んで取得');
    db_user.where(cond,comp,val).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
};

getDocument(doc);

getDocuments(db_user);

filterDocuments(db_user,"age", "==", "22",);





// データの書き込み

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


