console.log("Desafio Rankeadas")
let user = "digite seu nome";
console.log(user)
user = "Han Solo"

let userName = getFirstName(user , " ")
console.log("Seja bem vindo " + userName)
function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}

let resultado = soma(115, 55)
function soma(vitorias, derrotas){
    let somatorio = vitorias - derrotas

    if((somatorio >=0) && (somatorio <=10)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível Ferro")
    }
    if((somatorio >=11) && (somatorio <=20)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível bronze")
    }
    if((somatorio >=21) && (somatorio <=50)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível Prata")
    }
    if((somatorio >=51) && (somatorio <=80)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível Ouro")
    }
    if((somatorio >=81) && (somatorio <=90)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível Diamante")
    }
    if((somatorio >=91) && (somatorio <=100)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível Lendário")
    }
    if((somatorio >=101)){
        console.log("O Herói tem saldo de " + somatorio + " Vitorias e está no nível Imortal")
    }        
}


