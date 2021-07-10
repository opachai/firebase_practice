const db = firebase.firestore();
const db_user = db.collection('users');
const db_study = db.collection('study');
const doc_1 = db_study.doc('nEPlLidIiEWOzuJUzNsV');
const doc_2 = db_user.doc('GXQLQc8ctPd03jajaKuW');
const doc_3 = db_user.doc('N3DtzU4NSUeS8FDA8K75');

var documentList = [];

const requiredDataAttributes = [
    'id',
    'postdate',
];

const additionalDataAttributes = [
    'title',
    'code',
    'text',
    'timetaken',
];