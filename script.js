var write = { verbo: "Write", past: "Wrote", pastParticiple: "Written" };
var take = { verbo: "take", past: "took", pastParticiple: "taken" };
var ride = { verbo: "ride", past: "rode", pastParticiple: "ridden" };
var win = { verbo: "win", past: "won", pastParticiple: "won" };
var put = { verbo: "put", past: "put", pastParticiple: "put" };
var wear = { verbo: "wear", past: "wore", pastParticiple: "worn" };
var wakeUp = { verbo: "wake up", past: "woke up", pastParticiple: "woken up" };
var throw_ = { verbo: "throw", past: "threw", pastParticiple: "thrown" };
var think = { verbo: "think", past: "thought", pastParticiple: "thought" };
var tell = { verbo: "tell", past: "told", pastParticiple: "told" };
var tear = { verbo: "tear", past: "tore", pastParticiple: "torn" };
var teach = { verbo: "teach", past: "taught", pastParticiple: "taught" };
var swim = { verbo: "swim", past: "sawm", pastParticiple: "swum" };
var swear = { verbo: "swear", past: "swore", pastParticiple: "sworn" };
var steal = { verbo: "steal", past: "stole", pastParticiple: "stolen" };
var speak = { verbo: "speak", past: "spoke", pastParticiple: "spoken" };
var sleep = { verbo: "sleep", past: "slept", pastParticiple: "slept" };

var listaBase = [
    write,
    take,
    ride,
    win,
    put,
    wear,
    wakeUp,
    throw_,
    think,
    tell,
    tear,
    teach,
    swim,
    steal,
    speak,
    sleep
];

//                        A BASE ^

function atualizarTabela(lista) {
    var elemento = "";
    for (var i = 0; i < lista.length; i++) {
        elemento += "<tr><td>" + lista[i].verbo + "</td>";
        elemento += "<td>" + lista[i].past + "</td>";
        elemento += "<td>" + lista[i].pastParticiple + "</td>";
        elemento += "</tr>";
    }
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = elemento;
}

function adicionar() {
    var verboNovo = document.getElementById("verboNovo").value;
    var pastNovo = document.getElementById("pastNovo").value;
    var pastParticipleNovo = document.getElementById("pastParticipleNovo").value;
    var objetoNovo = {
        verbo: verboNovo,
        past: pastNovo,
        pastParticiple: pastParticipleNovo
    };
    var lista = JSON.parse(localStorage.info);
    lista.push(objetoNovo);

    var listaSerializada = JSON.stringify(lista);
    localStorage.info = listaSerializada;

    atualizarTabela(lista);
}

function remover() {
    var lista = JSON.parse(localStorage.info);
    lista.pop();

    var listaSerializada = JSON.stringify(lista);
    localStorage.info = listaSerializada;

    atualizarTabela(lista);
}

function exibirTabela() {
    var listaBase = JSON.parse(localStorage.info);
    var elemento = "";
    for (var i = 0; i < listaBase.length; i++) {
        elemento += "<tr><td>" + listaBase[i].verbo + "</td>";
        elemento += "<td>" + listaBase[i].past + "</td>";
        elemento += "<td>" + listaBase[i].pastParticiple + "</td>";
        elemento += "</tr>";
    }
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = elemento;
}

exibirTabela(JSON.parse(localStorage.info));
