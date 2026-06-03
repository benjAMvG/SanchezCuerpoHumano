function verificar(){

    let xUsuario =
        Number(
            document.getElementById("xInput").value
        );

    let yUsuario =
        Number(
            document.getElementById("yInput").value
        );

    let xReal = 120;
    let yReal = 80;

    let tolerancia = 20;

    let distancia =
        Math.sqrt(
            (xUsuario-xReal)**2
            +
            (yUsuario-yReal)**2
        );

    if(distancia <= tolerancia){

        document.getElementById("resultado").innerHTML =
        "✔ GANASTE";

    }

    else{

        document.getElementById("resultado").innerHTML =
        "❌ Muy cerca. Era ("+
        xReal+
        ","+
        yReal+
        ")";
    }

}