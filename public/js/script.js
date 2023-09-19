$(document).ready(function () {
    $("#siguientePaso1").click(function () {
        //$("#paso1").hide();
        if ($('#curso').val() !== "") {
            $("#paso2").show();
            $("#curso").prop("disabled", true);
            $("#siguientePaso1").hide();
        } else {
            alert("Debes seleccionar un curso.");
        }
    })

    $("#siguientePaso2").click(function () {
        if (!$("input[name='modulos']:checked").length > 0) {
            alert("Debes seleccionar al menos un módulo para continuar.");
        } else {
            $("#paso3").show();
            $("input[name='modulos']").prop("disabled", true);
            $("#siguientePaso2").hide();
            $("#retornarPas1").hide();
        }

    })

    $("#retornarPas1").click(function () {
        //$("#paso1").hide();
        $("#paso2").hide();
        $("#curso").prop("disabled", false);
        $("#siguientePaso1").show();
    })

    $("#siguientePaso3").click(function () {
        //$("#paso1").hide();
        if (!$("input[name='pago']:checked").val()) {
            alert("Debes seleccionar un metodo de pago.");
            event.preventDefault();
        } else {
            $("#siguientePaso3").hide();
            $("input[name='pago']").prop("disabled", true);
            $("#retornarPas2").hide();
            mostrarResultado();
        }
    })

    $("#retornarPas2").click(function () {
        //$("#paso1").hide();
        $("#paso3").hide();
        $("input[name='modulos']").prop("disabled", false);
        $("#siguientePaso2").show();
        $("#retornarPas1").show();
    })

    function mostrarResultado() {
        const cursoSeleccionado = $("#curso").val();
        const modulosSeleccionados = $("input[name='modulos']:checked").map(function () {
            return this.value.toLowerCase();
        }).get();
        const metodoPago = $("input[name='pago']:checked").val().toLowerCase();

        const costoPorModulo = {
            java: { basico: 1200, intermedio: 1320, avanzado: 1452 },
            php: { basico: 800, intermedio: 880, avanzado: 968 },
            dotnet: { basico: 1500, intermedio: 1650, avanzado: 1815 }
        };

        const costoTotal = modulosSeleccionados.reduce((total, modulo) => {
            return total + costoPorModulo[cursoSeleccionado][modulo];
        }, 0);

        const descuentoEfectivo = metodoPago === 'efectivo' ? costoTotal * 0.1 : 0;
        const totalPagar = costoTotal - descuentoEfectivo;

        $("#cursoSeleccionado").text(cursoSeleccionado);
        $("#moduloSeleccionado").text(modulosSeleccionados.join(', '));
        $("#metodoPago").text(metodoPago);
        $("#totalPagar").text('S/ ' + totalPagar);
        $("#resultado").show();

        //-------------------
        $("#cursoSelect").val(cursoSeleccionado)
        $("#modulosSelect").val(modulosSeleccionados)
        $("#pagoSelect").val(metodoPago)
        $("#tPago").val(totalPagar)
    }

    $("#retornarPas3").click(function () {
        //$("#paso1").hide();
        $("#resultado").hide();
        $("#siguientePaso3").show();
        $("input[name='pago']").prop("disabled", false);
        $("#retornarPas2").show();
    })

})


$(document).ready(function() {
    $("#regresar").click(function() {
        window.history.back();
    });
});


