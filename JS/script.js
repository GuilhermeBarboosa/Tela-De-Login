$(document).ready(function () {
    $(document).on('click', '.form-check-input', function () {
        if ($(this).is(":checked")) {
            $(".form-check-label").css("color", "#00a2ff")
        } else {
            $(".form-check-label").css("color", "black")
        }
    });

    $(document).on('click', '.myButton', function () {
        let user = $("#username").val()
        let password = $("#password").val()
        if (user.length == 0 || password.length == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Opa, há algo de errado!',
                text: 'Tente novamente',
            })
        }else{
            Swal.fire({
                icon: 'info',
                title: 'Só um momento',
                text: 'Estamos verificando os dados',
                showConfirmButton: false,
              })
        }
    });
});