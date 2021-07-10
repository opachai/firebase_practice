$(function() {
    let formDate = $('#post_data input[name="postdate"]'),
        formDocument = $('#post_data input[name="id"]'),
        formButton = $('#post_data button')
        formAdditonal = [];


    formDate.val(javascriptDateToFormDate(new Date()));

    formDocument.change(function() {
        const target = documentList.find((obj) => {
            return (obj.id === $(this).val());
        });
        if(target != undefined) {
            let thatDay = target.postdate.toDate();
            formDate.val(javascriptDateToFormDate(thatDay));
            for(let prop of additionalDataAttributes) {
                formAdditonal.push($('[name="' + prop + '"]').val(target[prop]));
            };
        } else {
            $('.data_field').not('[name="id"]').val('');
            formDate.val(javascriptDateToFormDate(new Date()));
        };
    });
    formButton.click(function() {
        let inputData = {
            postdate: formDateToFirebaseDate(formDate),
        };
        for(let prop of additionalDataAttributes) {
            inputData[prop] = $('[name="' + prop + '"]').val();
        };

        if(formDocument.val() != '') {
            console.info('データの更新完了');
            console.info(inputData);
            db_study.doc(formDocument.val()).set(inputData,{marge: true});
        } else {
            console.info('データの新規追加完了');
            console.info(inputData);
            db_study.add(inputData);
        };
        // console.log(new Date(inputData.date));
        // console.log(firebase.firestore.Timestamp.fromDate(new Date(inputData.date))); // firestoreの型
        // console.log(firebase.firestore.Timestamp.fromDate(new Date(inputData.date)).toDate()); //javascriptの型に戻す
    });
});

function javascriptDateToFormDate(day) {
    let yyyy = day.getFullYear();
    let mm = ("0"+(day.getMonth()+1)).slice(-2);
    let dd = ("0"+day.getDate()).slice(-2);
    return yyyy + '-' + mm + '-' + dd;　// 日付の初期値を本日に設定
};

function formDateToFirebaseDate(input) {
    let inputDate = input.val();
    let javascriptDate = new Date(inputDate);
    let firestoreDate = firebase.firestore.Timestamp.fromDate(javascriptDate);
    return firestoreDate;
};