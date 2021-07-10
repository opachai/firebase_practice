$(function() {
    let formDate = $('#post_data input[name="date"]'),
        formDocument = $('#post_data input[name="doc_id"]'),
        formTitle = $('#post_data input[name=title]'),
        formCode = $('#post_data textarea'),
        formText = $('#post_data input[name=text]'),
        formButton = $('#post_data button');

    formDate.val(yyyy + '-' + mm + '-' + dd);　// 日付の初期値を本日に設定
    formDocument.change(function() {
        const target = documentList.find((obj) => {
            return (obj.id === $(this).val());
        });
        // date変換が面倒なので日付の代入は後で
        if(target != undefined) {
            // formDate.val(target.date);
            formTitle.val(target.title);
            formCode.val(target.code);
            formText.val(target.text);
        } else {
            // formDate.val();
            formTitle.val();
            formCode.val();
            formText.val();
        };
    });
    formButton.click(function() {
        let inputDate = formDate.val();
        let javascriptDate = new Date(inputDate);
        let firestoreDate = firebase.firestore.Timestamp.fromDate(javascriptDate)
        let inputData = {
            postdate: firestoreDate,
            title: formTitle.val(),
            code: formCode.val(),
            text: formText.val(),
        };
        if(formDocument.val() != '') {
            console.log('データの更新完了');
            console.log(inputData);
            inputData.id = formDocument.val();
            db_study.doc(formDocument.val()).set(inputData,{marge: true});
        } else {
            console.log('データの新規追加完了');
            console.log(inputData);
            db_study.add(inputData);
        };
        // console.log(new Date(inputData.date));
        // console.log(firebase.firestore.Timestamp.fromDate(new Date(inputData.date))); // firestoreの型
        // console.log(firebase.firestore.Timestamp.fromDate(new Date(inputData.date)).toDate()); //javascriptの型に戻す
    });
});


