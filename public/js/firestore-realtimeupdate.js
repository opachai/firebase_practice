// db_study.doc('sample').onSnapshot((doc) => {
//     console.log("Current data: ", doc.data());
// });

// db_study.doc('sample').onSnapshot((doc) => {
//     var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
//     console.log(source, " data: ", doc.data());
// });

db_study.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            // console.log("追加を検知: ", change.doc.data());
            document.getElementById('doc_id').insertAdjacentHTML('beforeend','<option value="' + change.doc.id + '">');
        }
        if (change.type === "modified") {
            // console.log("更新を検知: ", change.doc.data());
        }
        if (change.type === "removed") {
            // console.log("削除: ", change.doc.data());
        }
    });
});