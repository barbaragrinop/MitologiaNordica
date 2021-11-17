$(document).ready(() => {
    $("#alfheim").click(() => {
        $('#titulo1').text("Álfheim, o Casa Dos Elfos")
        $('#paragrafo').text("Álfheim(Em nórdico arcaico, lar dos elfos), como o nome sugere, é o mundo habitado pelos elfos, uma classe de seres semideuses na mitologia e religião pré-cristã dos nórdicos e de outros povos germânicos.")
        $('#parte-baixo').text("    ")
        $('#parte-baixo2').text("Álfheim nunca é descrito nas fontes que formam a base de nosso conhecimento atual da religião germânica pagã, mas é simplesmente mencionado de passagem em alguns lugares. No entanto, os elfos são descritos como sendo luminosos e “mais bonitos que o sol”, então podemos supor que sua terra natal era um reino gracioso de luz e beleza.")
    })

    $("#asgard").click(() => {
        $('#titulo1').text("Asgard, Casa dos Deuses Aesir")
        $('#paragrafo').text("Era a morada dos deuses Aesir, e era cercada por uma grande, mas incompleta, parede. Criado por Odin e seus irmãos, depois que Midgard, o reino dos mortais, estava completo. Entre esses dois mundos, foi construída uma ponte do arco-íris, nomeada como Bifrost.")
        $('#parte-baixo').text("Por causa de um erro na tradução dos textos, Asgard primeiramente foi conhecida como Godheim.")
        $('#parte-baixo2').text("O reino dos deuses, de acordo com a mitologia nórdica, ficaria localizado no topo de Yggdrasil, a árvore da vida, logo, acima de Midgard, a terra dos homens. Asgard tem um guardião chamado Heimdall, ele mantém a sua guarda na Bifrost, que tem a finalidade de oferecer passagem para todos os Nove Reinos e que só pode ser aberta com a permissão de Heimdall.")
    })  

    $("#jotunheim").click(() => {
        $('#titulo1').text("Jotunheim, Casa dos Gigantes")
        $('#paragrafo').text("Também conhecidos como Jotuns, esse mundo representa a casa dos gigantes, os principais inimigos os Aesir.")
        $('#parte-baixo2').text("Além disso, esse mundo consiste majoritariamente em rochas, terras selvagens e florestas densas. Sendo assim, os gigantes sobrevivem com base nos peixes dos rios e os animais na floresta.")
        $('#parte-baixo').text("Ou seja, não há terra fértil nesse mundo da mitologia nórdica. Basicamente, isso é consequência do fato de que o planeta surgiu a partir do cadáver do primeiro gigante do mundo, chamado Ymir.")
    
    })

    $("#midgard").click(() => {
        $('#titulo1').text("Midgard, Casa dos Homens")
        $('#paragrafo').text("Também chamado de “Terra do meio”, Midgard é um mundo da mitologia nórdica localizado no meio da árvore, logo abaixo de Asgard")
        $('#parte-baixo').text("Sendo assim, estima-se que os dois mundos estão conectados pela Bifrost, ou a Ponte Arco-íris.")
        $('#parte-baixo2').text("Ademais, existe um oceano enorme e intransitável entre eles, de modo que só possa cruzar pela ponte mágica.")
    
    })

    $("#muspheim").click(() => {
        $('#titulo1').text("Muspelheim, Casa dos Gigantes do Fogo")
        $('#paragrafo').text(" esse mundo da mitologia nórdica localiza-se no ponto mais ao sul do Universo.")
        $('#parte-baixo').text("Portanto, trata-se de um lugar repleto de lava, chamas, faíscas e fuligem. ")
        $('#parte-baixo2').text("Além disso, é também o lar dos gigantes e demônios de fogo, sob o domínio do gigante Surtr.")
    })

    $("#nidavellir").click(() => {
        $('#titulo1').text("Nidavellir ou svartalfheim, casa dos anões")
        $('#paragrafo').text("os anões vivem sob as rochas, em cavernas e no subsolo.")
        $('#parte-baixo').text("Desse modo, são mestres do artesanato, responsáveis pela criação de presentes poderosos.")
        $('#parte-baixo2').text("Curiosamente, criaram o martelo de Thor e a lança de Odin.")
    
    })

    $("#niflheim").click(() => {
        $('#titulo1').text("Niflheim, mundo do gelo")
        $('#paragrafo').text(" Nilfheim refere-se a região mais escura e fria do mundo dentro da mitologia nórdica.")
        $('#parte-baixo').text("Sendo assim, seu nome significa Casa da Névoa ou Mundo da Névoa. ")
        $('#parte-baixo2').text(" A princípio, é o primeiro dos noves mundos, dando origem aos rios frios e a outros seres vivos.")
    
    })

    $("#hel").click(() => {
        $('#titulo1').text("Hel, casa da deusa Hel e dos mortos")
        $('#paragrafo').text("Hel corresponde à casa dos mortos desonestos.")
        $('#parte-baixo').text("Também conhecido como Helheim, ou casa de Hel, refere-se ao lugar que os ladrões, assassinos e deuses incapazes de ir para o Valhalla são enviados.")
        $('#parte-baixo2').text("Nesse sentido, esse mundo da mitologia nórdica é governado pelas malvadas Godhas Hel, sendo também um lugar sombrio e frio.")
    
    })

    $("#vanaheim").click(() => {
        $('#titulo1').text("Vanaheimm, Casa dos Deuses Vanir") 
        $('#paragrafo').text(" o nome desse mundo da mitologia nórdica significa lar dos Vanir.")
        $('#parte-baixo').text("eles são um ramo dos deuses mais antigos, sendo conhecidos como mestres da feitiçaria e da magia.")
        $('#parte-baixo2').text("Ademais, apresentam um talento para prever o futuro e estão localizados em uma parcela misteriosa da árvore.")
    })
    
    $("#freya").hover(() => {
        $("#freya").text("Freya é a deusa do amor, cujo nome significa ‘senhora’, ela está associada à beleza, feitiçaria, fertilidade, luxúria, beleza, ouro, guerra e inclusive a morte. Ademais, a deusa Freya possui grande afeição por jóias, usa de sua beleza para consegui-las quando as quer. Freya vive em Asgard com outros deuses guerreiros, mas, inicialmente a deusa pertencia a outro clã de deuses, os Vanir, conhecidos como deuses da fertilidade e feitiçaria.\n(Asgard) e os Vanirs, como símbolo de paz entre os clãs, Vanir envia Freya, seu pai e seu irmão para viverem em Asgard. Da mesma forma, Aesir enviou outros três deuses para Vanir. A deusa Freya também é a líder das Valquírias, mulheres responsáveis por conduzir as almas dos guerreiros mortos em combate.")
    })

    $("#freya").click(() => {
        $("#freya").text("De acordo com a mitologia nórdica, Freya se casou com o deus Odr, no entanto, ele desapareceu e a deusa procurou por ele na terra e no céu, sem encontrá-lo. Então, enquanto procurava, ela chorava e suas lágrimas se transformavam em ouro na terra e em âmbar no mar.")
    })

    $("#thor").hover(() => {
        $("#thor").text("Thor (filho de Odin e Frigga) foi o deus nórdico do trovão (por isto representava a força da natureza), talvez o mais popular deus da mitologia nórdica. Ele tinha um martelo chamado Mjolnir (o destruidor), feito por anões das cavernas subterrâneas, com o qual dominava o trovão. Cada vez que Thor lançava seu martelo, a fim de desferir seu poderoso golpe, este voltava pra sua mão como um bumerangue. Além disso, Thor também tinha um cinturão mágico (Megingiord) que duplicava sua força e que, sabidamente, era muito grande.")
    })

    $("#thor").click(() => {
        $("#thor").text("Thor era corpulento, tinha cabelos e barba ruivos, olhos vermelhos e, embora a inteligência não fosse um de seus maiores dons, estava sempre disposto a ajudar seus amigos desinteressadamente. Sua missão era manter a salvo, e em ordem, o mundo dos deuses e dos humanos, combatendo os gigantes e a grande serpente do caos: Jörmungand.")
    })

});