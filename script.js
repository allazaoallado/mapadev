let agora = new Date()
let hora = agora.getHours()// para puxar o horário atual
let saudacao = ''
if(hora > 12 && hora < 18){
saudacao ='Boa tarde'
}else if(hora >= 18 || hora < 6){
saudacao ='Boa noite'
}else{
saudacao = 'Bom dia'
}


 var idade = function(dia_aniversario, mes_aniversario,ano_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

var minha_idade = idade(20,07,2003)

