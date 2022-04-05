console.clear();
const prompt = require('prompt-sync')();

//Apresentação do jogo.
console.log("Começar o Jogo? Dugite: sim ou nao: ")
let start = prompt("")
verificaResposta(start)
if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);
}else{
    console.log('\n\nCalor e Quintura\n\n')
    console.log(`Uma aventura épica nas terras Nordesticas para salvar o mundo da IRA daquela Que Não deve ser Mencionada!!!\n`);
}

// Status personagem 
console.log("Digite seu nome Nobre Guerreiro: ")
let nome = prompt(``);
let inimigo;
let exp = 0;
let level = 0;
let gold = 0;
let inimigolevel = 0;
let inimigostr = inimigolevel;
let inimigodex = inimigolevel;
let inimigoexp ;
let str = 5 ;
let dex = 5 ;
let realTime = 0;
let timer = 0;
let fantasyTime = 0;
let countDown = 0;


function clock () {

    realTime = (fantasyTime*60)/60
    
    countDown = timer - realTime

    if (countDown > 0) {
        
        console.log(`\n${personagem.nome}, você gastou ${fantasyTime} horas batalhando nessa Masmorra!!!\nVocê perdeu ${realTime} minutos brincando nessa rua.\nVocê tem ${countDown} minutos para finalizar sua Quest!!!`)
    } else {
        console.log(`\nO seu tempo ACABOU!!!\nA Ira daquela que não deve ser mensionada o aguarda!!!\n`)
    }


    
}


function levelup() {

while (exp >= 100) {
    console.log("Sua Experiencia Atingiu o nível necessário!! Você está superando seus limites")
    personagem.level++
    console.log("Você tem 1 ponto de status para ser adicionado. Digite 1 para STR(Força) e 2 para DEX(Esquiva) ")
    let addstatus = +prompt(``);
    while (addstatus != 1 && addstatus != 2) {
        console.log(`\nComando invalido. Digite apenas 1 ou 2.\n`);
        console.log("Digite 1 para STR ou 2 para DEX");
        addstatus = prompt(``);
    }  
    if (addstatus == 1) {
        personagem.str++ 
    } else {
        personagem.dex++
    }
        
    personagem.hp = personagem.str * 20

    exp = exp - 100
    console.log(`Você evoluiu para o Nível ${level}`)
    personagem.showstatus();
        
}

}



const personagem = {
    nome: nome,
    hp: str * 20,
    exp: exp.toFixed(0),
    level: level,
    str: str,
    dex: dex,
    gold: (0 + gold),
    potHP: 0,
    showstatus: function () {
        console.log(`\n Nome: ${this.nome}\n HP: ${this.hp}\n Gold: ${this.gold}\n Exp: ${this.exp}\n Nível: ${this.level}\nAtributos\n Str: ${this.str}\n Dex: ${this.dex}\n Poções: ${this.potHP}\n`);
    }

    }

const oponente = {
    nome: inimigo,
    hp: inimigostr * 10,
    exp: inimigoexp,
    level: inimigolevel,
    str: inimigostr,
    dex: inimigodex,
    }
//jogadas

const inimigos = {
    in1: "Slime",
    in2: "Goblin",
    in3: "Treant",
    in4: "Golem",
    in5: "Kerberos",

}

function usarPot() {
                
        if (personagem.potHP > 0) {

            personagem.hp = personagem.hp + 20;
            personagem.potHP -= 1;
            console.log(`Você gastou uma poção para recuperar seu HP.\nVocê tem agora ${personagem.potHP} poções.\nSeu HP é ${personagem.hp}.\n `)
        
        } else {
            console.log("Você não tem poções(balas).")
        }
        
}
// Função de Validação das respostas
function verificaResposta(start) {
    
    while (start != "sim" && start != "nao") {
        console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
        console.log("Digite sim ou não")
        start = prompt(``).toLowerCase();
    }  
    return start            
}


// Função de escolha de inimigo 
let escolhaInimigo = function () {
                           
    let inimigoRandom = (Math.random()*100);

    if (inimigoRandom >= 5 && inimigoRandom<=30) {
    console.log(`Você encontrou um ${inimigos.in1}!!!\n Um ótimo inimigo para aventureiros iniciantes.\n`)
    inimigoRandom = inimigos.in1

    } else if (inimigoRandom > 30 && inimigoRandom<=60) {
    console.log(`Você encontrou um ${inimigos.in2}!!!\n Um bom páreo para aventureiros iniciantes.\n`)
    inimigoRandom = inimigos.in2

    } else if (inimigoRandom > 60 && inimigoRandom<=80) {
    console.log(`Você encontrou um ${inimigos.in3}!!!\n Um bom desafio para  um aventureiro iniciante.\n`)
    inimigoRandom = inimigos.in3

    } else if (inimigoRandom > 80 && inimigoRandom <= 95) {
    console.log(`Você encontrou um ${inimigos.in4}!!!\n Um grande desafio para um aventureiro iniciante.\n`)
    inimigoRandom = inimigos.in4

    } else {
    console.log(`Você está sem sorte!! Você encontrou com o ${inimigos.in5} O Chefe desta Zona!!!\n Um desafio Hercúleo para um aventureiro iniciante.\n`)
    inimigoRandom = inimigos.in5
    }

    return(inimigoRandom)

}
// Função Batalha

let batalha = function () {
    let rodadas = (Math.floor(Math.random() * (11 - 1)) + 1).toFixed(0); 
    let ruas = {
        r5: "Masmorra de Kerberos(Rua de Casa)",
        r2: "Masmorra dos Goblins (Rua do Campinho)",
        r1: "Masmorra dos Slimes(Rua de Baixo)",
        r3: "Masmorra dos Treants(Rua de Cima)",
        r4: "Masmorra dos Golens(Rua do lado)"
    }
    if (rodadas <= 2) {
                
    console.log(`Você Entrou na ${ruas.r1}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
    } else if (rodadas > 2 && rodadas <= 4) {
                
    console.log(`Você Entrou na ${ruas.r2}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
    } else if (rodadas > 4 && rodadas <= 6) {
                
    console.log(`Você Entrou na ${ruas.r3}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
    } else if (rodadas > 6 && rodadas <= 8) {
                
    console.log(`Você Entrou na ${ruas.r4}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
    } else {
        console.log(`Você Entrou na ${ruas.r5}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
    }
    
    let vitoria = 0
    for (let i = 0; i < rodadas; i++) {
        //Escolha do Inimigo
        inimigo = escolhaInimigo();
        oponente.nome = inimigo
        console.log();
        console.log("Gostaria de enfrentá-lo? Digite sim ou não");
        start = prompt(``).toLowerCase();
        
        // Validação da resposta
        verificaResposta(start);

        if (start == "sim") {
            
            if (inimigo == "Slime") {
                luta(1)
                fantasyTime+=1
            } else if (inimigo == "Goblin") {
                luta(2)
                fantasyTime+=3
            } else if (inimigo == "Treant") {
                luta(3)
                fantasyTime+=6
            } else if (inimigo == "Golem") {
                luta(4)
                fantasyTime+=8
            } else {
                luta(5)
                fantasyTime+=10
            }
        } else {
            console.log("Você Fugiu o mais rápido possivel!!!")
        }

        if (personagem.hp <= 0) {
            console.log(`Você foi Derrotado!!!`)
            break
            
        }
        
        
        levelup()
        console.log(`${personagem.nome}, você gastou ${fantasyTime} horas batalhando nessa Masmorra!!!\n`)
        console.log(`Você continua explorando a Masmorra...`)

           
       
          
        //textos
                
   };
   if (personagem.hp > 0) {
    console.log(`Você foi Derrotado!!!`)
    vitoria++
    
    }
   
   clock()
   console.log(`${personagem.nome}, você conseguiu Explorar a Masmorra e Sair Vivo!!!`)
   return vitoria


};
   
function luta (p1) {

    if (p1 == 1) {
        oponente.level = 1
        inimigoexp = 10;
        oponente.hp = oponente.level * 10
           
    } else if (p1 == 2) {
        oponente.level = 2
        inimigoexp = 20;
        oponente.hp = oponente.level * 10
          
    } else if (p1 == 3) {
        oponente.level = 3
        inimigoexp = 30;
        oponente.hp = oponente.level * 10
             
    } else if (p1 == 4) {
        oponente.level = 4
        inimigoexp = 40;
        oponente.hp = oponente.level * 10
        
    } else if (p1 == 5) {
        oponente.level = 5
        inimigoexp = 50;
        oponente.hp = oponente.level * 10
        
    }
    
    while (oponente.hp > 0) {
     let rollatkjogador = (Math.floor(Math.random() * (6)) + 1);
     let rollatkcomputador = (Math.floor(Math.random() * (6)) + 1); 
     let rolldefjogador = (Math.floor(Math.random() * (6)) + 1);
     let rolldefcomputador = (Math.floor(Math.random() * (6)) + 1); 
     let danojog = (rollatkjogador + personagem.str)
     let danoop = (rollatkcomputador + oponente.str)
     let defjog = (rolldefjogador + personagem.dex)/2
     let defop = (rolldefcomputador + oponente.dex)
                                        
     if (danojog > defop) {
             
             oponente.hp = oponente.hp - danojog
             console.log(`Você causou ${danojog} de dano!`)
             

             
     }else {

             console.log(`Você Errou seu ataque!!`)
             
     }
        
     if (danoop > defjog) {
             personagem.hp = personagem.hp - danoop
             console.log(`Você recebeu ${danoop} de dano!!`)

             
     }else {

             console.log(`Você Bloqueou o Ataque do ${inimigo}!!`)
                                  
     }

     if (personagem.hp <= 0) {
         console.log(`Você foi Derrotado!!!`)
         break
         
     }
     console.log(`Seu HP restante é ${personagem.hp}`)
     console.log(`Hp Restante do Inimigo ${oponente.hp}\n`)

    }
    console.log(" Vitória!!\n")
    console.log(`Você Eliminou o ${inimigo}\n`)
    exp = exp + inimigoexp
    console.log(`Você Ganhou ${inimigoexp} pontos de Experiência\n`)
    console.log("Gostaria de usar uma poção para recuperar seu HP? Digite sim ou nao")
    pocao = prompt(``)
    while (pocao != "sim" && pocao != "nao") {
        console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
        console.log("Digite sim ou não")
        pocao = prompt(``).toLowerCase();
    }  
    
    if (pocao == "sim") {
    usarPot()
    }
}

personagem.showstatus();
let continua

console.log(`\n Sombras de Nuvens escuras rastejam como cobras migrando na direção do vento, o sol escaldante brilhando em meio as nuvens. Ao longe, em meio aos arbustos pode-se ver uma casa simples, construída não tão firmemente de madeira e barro. Ao se aproximar é possível perceber uma penumbra habitanto o interior daquele covíl! Aos fundos, swish...swish...swish... Mechendo Incansávelmente o caldeirão, está uma figura feminina IMPONENTE e AMEDRONTADORA. Aquela que não deve ser mensionada... O ser que despensa apresentações e impõe respeito com apenas um olhar... Aquela que com apenas um balançar de um galho de goiabeira faz multidões sumirem... Por Alguns chamada de Senhora, outrora chamada de Rainha por um Rei, porém apenas uma pessoa a chama de: \n`);
console.log();
console.log("MAINHA!!");
console.log();
console.log(" Mainha: O que danado esse peste desse menino ta correndo pra lá e pra cá nesse Sol quente!?");
console.log(` Mainha: Ô ${personagem.nome} venha cá!!!`);
console.log(`Ao ser pego na armadilha de parecer não estar fazendo nada ${personagem.nome} recebe uma QUEST da Impiedosa MAINHA!`);

//Primeira pergunta

console.log(`\nVocê aceita o SUMMON daquela que não deve ser mencionada?\n`)
console.log(`\nPs.: todos aqueles que não aceitaram não podem mais contar suas histórias. \n`)
console.log("Digite sim ou não");
pergunta1 = prompt();

while (pergunta1 != "sim" && pergunta1 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta1 = prompt(``);
   
}   
if (pergunta1 == "sim" ){
    
    console.clear();
    console.log(`\nCorajosamente ${personagem.nome} vai de encontro a MAINHA para receber sua quest!\n`);

    console.log(`\n Ô menino véi demorado, Venha LIGEIRO!! Eu trabalho nessa casa o dia todo e você não consegue atender quando eu te chamo! Esbravejou MAINHA com sua IRA chegando a níveis jamais vistos.\n`);

    console.log(`\n Vá ali na Budega de Zé comprar uma lata de KITUT preu botar no almoço, que faltou aqui! Acunhe logo e num arengue no caminho não! Vou cuspir no chão e se quando voltar tiver secado você vai ver! \n`);

    console.log(`\nMAINHA lhe designou uma Quest\n`);
    console.log(`Quest: ${personagem.nome}, Viaje até a famosa Venda do Mercador Zé para adquirir o itém Único "Carne de Unicórnio Conservada".\nVocê deve completar sua missão o mais rápido possível, pois, muitos perecerão de fome caso não chegue a tempo.\nMAINHA precisa do ítem até o sol atingir seu ponto mais alto para completar sua poção de Cura para FOME!`);

    console.log(`\n Rapidamente ${personagem.nome} pega algumas moedas de ouro, e algumas poções que estavão na mesa, suficientes para comprar o Ítem Único e se prepara para seguir viajem. Quando de relance de olho observa MAINHA cuspindo no chão! Adquirindo forças jamais vistas, ${personagem.nome} sai em uma velocidade amedrontadora para cumprir sua missão!!! \n`);
    timer += 120
    console.log(`Você tem ${timer} minutos para completar sua QUEST!!`)
    personagem.gold += 10
    personagem.potHP = (Math.floor(Math.random() * (5 - 1)) + 1).toFixed(0);
    personagem.showstatus()
    
    console.log(`\nOlhando ao seu redor você se depara com Excalibur(galho de goiabeira), a Lendária espada que um dia pertenceu ao Rei e hoje faz parte do arsenal de MAINHA, jogada embaixo da Árvore Sagrada Iggdrasil(goiabeira do quintal)\nGostaria de equipar Excalibur?\nDigite sim ou nao:\n`)

}else if ( pergunta1 == "nao") {
    
    console.clear();
    console.log(`\n${personagem.nome}, Aterrorizado, sem saber o que possa ter feito para atrair a IRA de MAINHA!! Decide correr na direção contrária com todas suas forças. Porém, uma das Habilidades mais poderosas de Mainha foi invocada! HAVAIANA BUMERANG!! ${personagem.nome} recebe Dano Crítico e vai ao encontro de MAINHA com suor heróico escorrendo de seus olhos. \n`);

    console.log(`\n Ô menino véi demorado, Venha LIGEIRO!! Eu trabalho nessa casa o dia todo e você não consegue atender quando eu te chamo! Esbravejou MAINHA com sua IRA chegando a níveis jamais vistos.\n`);

    console.log(`\n Vá ali na Budega de Zé comprar uma lata de KITUT preu botar no almoço, que faltou aqui! Acunhe logo e num arengue no caminho não! Vou cuspir no chão e se quando voltar tiver secado você vai ver! \n`);

    console.log(`\nMAINHA lhe designou uma Quest\n`);
    console.log(`Quest: ${personagem.nome}, Viaje até a famosa Venda do Mercador Zé para adquirir o itém Único "Carne de Unicórnio Conservada".\nVocê deve completar sua missão o mais rápido possível, pois, muitos perecerão de fome caso não chegue a tempo.\nMAINHA precisa do ítem até o sol atingir seu ponto mais alto para completar sua poção de Cura para FOME!`);

    console.log(`\n Rapidamente ${personagem.nome} pega algumas moedas de ouro, suficientes para comprar o Ítem Único e algumas poções(balas jogadas na mesa) para se prepara para seguir viajem. \nQuando de relance de olho observa MAINHA cuspindo no chão! Adquirindo forças jamais vistas, ${personagem.nome} sai em uma velocidade amedrontadora para cumprir sua missão!!! \n`);
    personagem.gold += 10
    personagem.po = (Math.floor(Math.random() * (11 - 1)) + 1).toFixed(0);
    personagem.showstatus()
        
    console.log(`\n\nOlhando ao seu redor você se depara com Excalibur(galho de goiabeira), a Lendária espada que um dia pertenceu ao Rei e hoje faz parte do arsenal de MAINHA, jogada embaixo da Árvore Sagrada Iggdrasil(goiabeira do quintal)\nGostaria de equipar Excalibur?\nDigite sim ou nao:\n`);

}


//Segunda pergunta

continua = 0
pergunta2 = prompt(``);

while (pergunta2 != "sim" && pergunta2 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta2 = prompt();
   
}   
if (pergunta2 == "sim" ){
    
    console.clear();
    console.log(`Você acaba pisando numa armadilha de teletransporte e cai na Masmorra que foi construida para proteger Excalibur de Ladrões!!`);
    continua = (batalha()) 
    if (continua == 1) {
    console.log(`\nVocê equipou Excalibur e agora está preparado para enfrentar qualquer desafio que encontrar pelo caminho.\n`);
    personagem.str +=2
    personagem.showstatus()
    console.log(`\n Ao sair dos arredores do castelo, observando ao longe, ${personagem.nome} se depara com uma besta extremamente feroz! Por alguns conhecida como o Cão de Três Caabeças Guardião dos portões do Inferno Kerberos!!! Por outros conhecido como o Pincher mais Snaguinário do Sertão XIMBICA!!!!! \n`);
    console.log(`Você precisa decidir se irá enfrentar XIMBICA!`);
    console.log(`\n Digite sim ou não: \n`);
    }  else {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);

    }

}else if ( pergunta2 == "nao") {
    
    console.clear();
    console.log(`\nVocê é um pacifista e prefere enfrentar seus inimigos com amor e carinho, PORÉM, ao desviar de Excallibur.\n`);
    console.log(`Você acaba pisando numa armadilha de teletransporte e cai na Masmorra que foi construida para proteger Excalibur de Ladrões!!`);
    continua = (batalha()) 
    if (continua == 1) {
         
    console.log(`\n Ao sair dos arredores do castelo, observando ao longe, ${personagem.nome} se depara com uma besta extremamente feroz! Por alguns conhecida como o Cão de Três Caabeças Guardião dos portões do Inferno Kerberos!!! Por outros conhecido como o Pincher mais Snaguinário do Sertão XIMBICA!!!!! \n`);
    console.log(`Você precisa decidir se irá enfrentar XIMBICA!`);

    console.log(`\n Digite sim ou não: \n`);
    } else {
        console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);

    }
       
}

//Terceira pergunta

continua = 0
pergunta3 = prompt();

while (pergunta3 != "sim" && pergunta3 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta3 = prompt();
   
}   
if (pergunta3 == "sim" ){
    continua = (batalha()) 
    if (continua == 1) {
    console.clear();
    console.log(`\n ${personagem.nome} como um bravo cavaleiro (com as pernas tremendo mais que vara verde) Você não teme mal algum e avança para enfrentar XIMBICA!!! Você corre em direção ao perigo sem fraquejar! Ao vê-lo avançando em sua direção XIMBICA se intimida e decide por sua segurança e corre para os pés de sua dona que estava varrendo a calçada.\n\n Triunfante em sua batalha você avança em sua QUEST!! \n`);
    console.log(`\nVocê conseguiu passar pelo seu primeiro desafio e segue em direção à Venda(Budega), porém, ao chegar lá você se depara com uma infinidade de poções de todos os efeitos(doces).\n${personagem.nome}, Consegue resistir a tentação de comprar algumas Poções(doces)?\n\nDigite sim ou nao:\n`)
    }else {
        console.log()
        console.log("Fim do Jogo!");
        console.log()
        process.exit(1);
    
        }
}else if ( pergunta3 == "nao") {
    
    console.clear();
    console.log(`\n ${personagem.nome}, você se amedrontou e decidiu tentar passar despercebido por XIMBICA. Porém, você subestimou o faro infernal do guardião dos portões do inferno! XIMBICA SENTE O CHEIRO DO MEDO EM VOCÊ!\n\nAI AI AI AI!!!\nLadrou XIMBICA ao iniciar seu ataque.\nXIMBICA o ataca ferozmente!!\nVocê perdeu um bom tempo correndo de XIMBICA até conseguir despistá-lo.\n`);
    continua = (batalha()) 
    if (continua == 1) {
    console.log(`\nVocê conseguiu passar pelo seu primeiro desafio e segue em direção à Venda(Budega), porém, ao chegar lá você se depara com uma infinidade de poções de todos os efeitos(doces).\n${personagem.nome}, Consegue resistir a tentação de comprar algumas Poções(doces)?\n\nDigite sim ou nao:\n`)
    }else {
        console.log()
        console.log("Fim do Jogo!");
        console.log()
        process.exit(1);
    
        }   
}


//Quarta Pergunta

continua = 0
pergunta4 = prompt();

while (pergunta4 != "sim" && pergunta4 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta4 = prompt();
   
}   
if (pergunta4 == "sim" ){
    
    console.clear();
    console.log(`\n${personagem.nome}, Você foi fiel ao seu objetivo e conseguiu resistir a tentação do mercador!\n\nAgora você pode comprar o Ítem de Quest.\n\nItem de Quest Adquirido!\n`);
    console.log(`\nEstando com o itém Único "Carne de Unicórnio Conservada"(lata de KITUT) em sua posse, ${personagem.nome} começa sua jornada de volta para entregá-lo a MAINHA\n`)
    personagem.gold -= 5
    personagem.showstatus()
    console.log(`\nPorém, ao observar a rua depois da Venda(Budega), ${personagem.nome} se depara com uma batalha de dimensões nunca vistas acontecendo.\nUm grupo de Herois(Amigos da rua) estava enfrentando(jogando bola) o Exército dos Goblins(Turma da outra rua)\nO que você fará!?\n Vai ignorar os Herois?\n\nDigite sim ou nao: \n`)
    
}else if ( pergunta4 == "nao") {
    
    console.clear();
    console.log("Quantas Poções deseja comprar? Lembre-se que cada poção custa 1 moeda de Gold")
    let compra = +prompt(``);
    personagem.gold -= compra
    if (personagem.gold >= 5) {
        console.log ("Você conseguiu guardar dinheiro suficiente.")
        console.log(`\nEstando com o itém Único "Carne de Unicórnio Conservada"(lata de KITUT) em sua posse, ${personagem.nome} começa sua jornada de volta para entregá-lo a MAINHA\n`)
        personagem.gold -= 5
        personagem.showstatus()
        console.log(`\nPorém, ao observar a rua depois da Venda(Budega), ${personagem.nome} se depara com uma batalha de dimensões nunca vistas acontecendo.\nUm grupo de Herois(Amigos da rua) estava enfrentando(jogando bola) o Exército dos Goblins(Turma da outra rua)\nO que você fará!?\n Vai ignorar os Herois?\n\nDigite sim ou nao: \n`)    
    } else {
        personagem.gold = 0
        console.log(`\n${personagem.nome}, Você não foi fiel ao seu objetivo e não conseguiu resistir a tentação do mercador!\n\nAgora você não tem mais dinheiro suficiente para comprar o Ítem de Quest.\n\nVendo o seu desespero o Mercador Zé decide abrir uma exeção e permitir que leve o Item de Quest com uma Nota Promissória(Fiado).\nPorém o que lhe espera lhe aguarda quando MAINHA descobrir!!!\n\nÍtem de Quest Adquirido!\n`);
        console.log(`\nEstando com o itém Único "Carne de Unicórnio Conservada"(lata de KITUT) em sua posse, ${personagem.nome} começa sua jornada de volta para entregá-lo a MAINHA\n`)
        personagem.showstatus()
        console.log(`\nPorém, ao observar a rua depois da Venda(Budega), ${personagem.nome} se depara com uma batalha de dimensões nunca vistas acontecendo.\nUm grupo de Herois(Amigos da rua) estava enfrentando(jogando bola) o Exército dos Goblins(Turma da outra rua)\nO que você fará!?\n Vai ignorar os Heróis?\n\nDigite sim ou nao: \n`)  
    }
}



//Quinta pergunta

continua = 0
pergunta5 = prompt();

while (pergunta5 != "sim" && pergunta5 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta5 = prompt("");
   
}   
if (pergunta5 == "sim" ){
    
    console.clear();
    console.log(`\nDepois de uma grande luta interna, ${personagem.nome} decide que completar sua Quest é a melhor Opção para a segurança de todos`);
    console.log(`\nVocê volta para o castelo e Entrega o ítem a MAINHA\n`)
    
}else if ( pergunta5 == "nao") {
    
    console.clear();
    console.log(`\n${personagem.nome} decide por Ajudar os Hérois na sua Batalha(jogo).\n`);
    continua = (batalha()) 
    if (continua == 1) {
    console.log(`\nApesar de sair vitorioso na Batalha travada, ${personagem.nome} sabe que se não chegar a tempo para finalizar a QUEST, a GUERRA será perdita e tudo que o aguardará será EXCALIBUR(galho de goiabeira) \n`)
    console.log(`\nVocê volta para o castelo e Entrega o ítem a MAINHA\n`)
    }else {
        console.log()
        console.log("Fim do Jogo!");
        console.log()
        process.exit(1);
    
        }   
}

if (timer >= 0) {
    console.clear()
    console.log(`QUEST FINALIZADA!!`)
    console.log(`\n${personagem.nome}, Você conseguiu concluir sua quest a tempo, Impedindo a fome de muitos e a IRA daquela que não deve ser mencionada.\n`)
    
} else {
    console.log(`VOCÊ FALHO NA QUEST!!!`)
    console.log(`MUITOS SERÃO ASSOLADOS PELA FOME!!`)
    console.log(`VOCÊ TERÁ QUE ENFRENTAR A IRA DE MAINHA!!!`)
    console.log()
        console.log("Fim do Jogo!");
        console.log()
        process.exit(1);
}

// BONUS GAME

console.log(`BONUS GAME!!`)
console.log(`Como premiação por finalizar sua QUEST a tempo MAINHA permite que saia após o almoço para Explorar Masmorras(Brincar nas ruas ao lado).`)
console.log(`Você tem até o sol se por para voltar!!!`)
timer = 600
console.log("Começar o Bonus Game? Dugite: sim ou nao: ")
start = prompt(``)
verificaResposta(start)
if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);
}
while (start == "sim") {
    
        let rodadas = (Math.floor(Math.random() * (6 - 1)) + 1).toFixed(0); 
        let ruas = {
            r5: "Masmorra de Kerberos(Rua de Casa)",
            r2: "Masmorra dos Goblins (Rua do Campinho)",
            r1: "Masmorra dos Slimes(Rua de Baixo)",
            r3: "Masmorra dos Treants(Rua de Cima)",
            r4: "Masmorra dos Golens(Rua do lado)"
        }
        if (rodadas == 1) {
                    
        console.log(`Você Entrou na ${ruas.r1}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
        } else if (rodadas == 2) {
                    
        console.log(`Você Entrou na ${ruas.r2}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
        } else if (rodadas == 3) {
                    
        console.log(`Você Entrou na ${ruas.r3}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
        } else if (rodadas == 4) {
                    
        console.log(`Você Entrou na ${ruas.r4}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
        } else {
            console.log(`Você Entrou na ${ruas.r5}!!!\n Esta Dungeom tem ${rodadas} salas e cada sala terá um inimigo diferente!!\n Siga com Cautela...\n`)
        }

        
        for (let i = 0; i < rodadas; i++) {
            //Escolha do Inimigo
            inimigo = escolhaInimigo();
            oponente.nome = inimigo
            console.log();
            console.log("Gostaria de enfrentá-lo? Digite sim ou não");
            start = prompt(``).toLowerCase();
            
            // Validação da resposta
            verificaResposta(start);
    
            if (start == "sim") {
                
                if (inimigo == "Slime") {
                    luta(1)
                    fantasyTime+=1
                } else if (inimigo == "Goblin") {
                    luta(2)
                    fantasyTime+=3
                } else if (inimigo == "Treant") {
                    luta(3)
                    fantasyTime+=6
                } else if (inimigo == "Golem") {
                    luta(4)
                    fantasyTime+=8
                } else {
                    luta(5)
                    fantasyTime+=10
                }
            } else {
                console.log("Você Fugiu o mais rápido possivel!!!")
            }
    
            if (personagem.hp <= 0) {
                console.log(`Você foi Derrotado!!!`)
                break
                
            }
            
            
            levelup()
            console.log(`${personagem.nome}, você gastou ${fantasyTime} horas batalhando nessa Masmorra!!!\n`)
            console.log(`Você continua explorando a Masmorra...`)
                
                             
       };
       if (personagem.hp > 0) {
        console.log(`Você foi Derrotado!!!`)
        
        
        }
       
    clock()
    console.log(`${personagem.nome}, você conseguiu Explorar a Masmorra e Sair Vivo!!!`)
      
    console.log("Continuar Explorando? Dugite: sim ou nao: ")
    resposta = prompt(``)
    if (resposta == "nao") {
        console.log()
        console.log("Fim do Jogo!");
        console.log()
        start = "nao"
        process.exit(1);
        
    }
       
    
}

