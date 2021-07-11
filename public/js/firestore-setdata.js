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
            initializeTags();
            console.log();
            if(target.tags != undefined) {
                for(let tag of target.tags) {
                    $('#tags input[name="' + tag + '"]').prop('checked',false);
                    $('#tags input[name="' + tag + '"]').parent().addClass('active');
                };
            };
        } else {
            $('.data_field').not('[name="id"]').val('');
            initializeTags();
            formDate.val(javascriptDateToFormDate(new Date()));
        };
    });

    formButton.click(function() {
        let tagsChecked = [];
        $('#tags label').each(function() {
            if($(this).hasClass('active')) tagsChecked.push($(this).find('input').attr('name'));
        });
        let inputData = {
            postdate: formDateToFirebaseDate(formDate),
            tags: tagsChecked
        };
        for(let prop of additionalDataAttributes) {
            inputData[prop] = $('[name="' + prop + '"]').val();
        };

        // console.log(inputData);

        if(formDocument.val() != '') {
            console.info('データの更新完了');
            console.info(inputData);
            db_study.doc(formDocument.val()).set(inputData,{marge: true});
        } else {
            console.info('データの新規追加完了');
            console.info(inputData);
            db_study.add(inputData);
        };
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

function initializeTags() {
    $('#tags label input').each(function() {
        $(this).prop('checked',false);
        $(this).parent().removeClass('active');
    });
};