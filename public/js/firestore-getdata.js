async function getDocument(path) {
    const doc = await doc_1.get();
    console.log('単一ドキュメントの取得');
    console.log('ID: ' + doc.id,' => ',doc.data());
};

async function getDocuments(path) {
    const querySnapshot = await db_user.get();
    console.log('複数ドキュメントの取得');
    querySnapshot.forEach((doc) => {
        console.log('ID: ' + doc.id, " => ", doc.data());
    });
};

async function filterDocuments(path,cond,comp,val) {
    const querySnapshot = await db_user.where(cond,comp,val).get();
    console.log('複数ドキュメントから絞り込んで取得');
    querySnapshot.forEach((doc) => {
        console.log('ID: ' + doc.id, " => ", doc.data());
    });
};

// getDocument(doc_1);
// getDocument(doc_2);
// getDocument(doc_3);
// getDocuments(db_user);
// filterDocuments(db_user,"age", "==", "30",);