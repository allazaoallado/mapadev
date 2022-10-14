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


var idade = function (dia,mes,ano){
    var dia_atual = new Date().getDate()
    var mes_atual = new Date().getMonth()+1
    var ano_atual = new Date().getFullYear()

    if(mes_atual <= mes & dia_atual < dia){
        return ano_atual - ano - 1
    }else{
        return ano_atual-ano
    }
}

minha_idade = idade(20,07,2003)

