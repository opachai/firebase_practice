async function getDocument(path) {
    const doc = await path.get();
    console.log('単一ドキュメントの取得');
    console.log('ID: ' + doc.id,' => ',doc.data());
};

async function getDocuments(path) {
    const querySnapshot = await path.get();
    console.log('複数ドキュメントの取得');
    querySnapshot.forEach((doc) => {
        console.log('見出し: ' + doc.data().title, " => ", 'ID: ' + doc.id);
    });
};

async function filterDocuments(path,cond,comp,val) {
    const querySnapshot = await path.where(cond,comp,val).get();
    console.log('複数ドキュメントから絞り込んで取得');
    querySnapshot.forEach((doc) => {
        console.log('ID: ' + doc.id, " => ", doc.data());
    });
};

async function orderDocuments(path,order,logic) {
    const querySnapshot = await path.orderBy(order,logic).get();
    console.log('複数ドキュメントから並び替えて取得');
    querySnapshot.forEach((doc) => {
        console.log('Posted Date: ' + doc.data().postdate.toDate(), " => ", doc.data().title);
    });
};

async function putDocumentsList(path) {
    const querySnapshot = await path.get();
    let documentIndex = 0;
    querySnapshot.forEach((doc) => {
        documentList.push(doc.data());
        documentList[documentIndex].id = doc.id;
        document.getElementById('doc_id').insertAdjacentHTML('beforeend','<option value="' + doc.id + '">');
        documentIndex++;
    });
};

// getDocument(doc_1);
// getDocument(doc_2);
// getDocument(doc_3);
// getDocuments(db_study);
orderDocuments(db_study,'postdate','desc');
// filterDocuments(db_user,"age", "==", "30",);
// putDocumentsList(db_study);