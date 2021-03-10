$ ("#sendMail").on ("click", function(){
    var name=$("#name"). val().trim();
    var phone=$("#phone"). val().trim();


    if(name == "") {
        $("#errorMess").text("Введите имя");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введите телефон");
        return false;
    } 


    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        сache: false,
        data: { 'name': name, 'phone': phone },
        dataType: 'html',
        beforeSend: function () {
            $ ("#sendMail").prop("disabled", true);
        },
        success: function (data) {
            alert(data);
            $ ("#sendMail").prop("disabled", false);
        } 
    });
});

