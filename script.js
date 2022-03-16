function cliqueRadio(n){
    const banner = document.getElementsByClassName('ArtSec swip um')[0]
    if(n == 0){
        banner.style.marginLeft = '0px'
    }else if(n == 1){
        banner.style.marginLeft = '-1366px'
    }else if(n == 2){
        banner.style.marginLeft = '-2732px'
    }else if(n == 3){
        banner.style.marginLeft = '-4218px'
    }
}

const arrIndice = [] // Coleta indices das constantes dentro da função CliqueNavLi() //
function cliqueNavLi(n){
    const BlocoFixed = document.getElementsByClassName('BlocoLi') 
    const BlocoUl = document.getElementsByClassName('ulbloco')
    const seta = document.getElementsByClassName('seta')
    const li = document.getElementsByClassName('liCabecalho')

    arrIndice.push(n)
    // divDeExpansao = Div que aparecerá quando o cliente clicar em umas das opções da tag Nav.
    if(BlocoFixed[n].style.zIndex == '' || BlocoFixed[n].style.zIndex == '-1'){ // Se a divDeExpansao da opção escolhida não estiver amostra, ela ficará.
        BlocoFixed[n].style.zIndex = '2' 
        BlocoUl[n].style.opacity = '100%' 
        seta[n].style.transform = 'rotate(-180deg)' 
        li[n].style.filter = 'contrast(.75)'
        if(n !== arrIndice[arrIndice.length-2]){ // se a opção atual for diferente da penúltima escolhida, a divdeexpansao correspondente a penúltima  será resetada.
            BlocoFixed[arrIndice[arrIndice.length-2]].style.zIndex = '-1'
            seta[arrIndice[arrIndice.length-2]].style.transform = 'rotate(0deg)'
            BlocoUl[arrIndice[arrIndice.length-2]].style.opacity = '0%'
            li[arrIndice[arrIndice.length-2]].style.filter = 'contrast(1)'
        }
    }else if(BlocoFixed[n].style.zIndex == '2'){ // Se clicar duas vez seguida na mesma opção, a divDeEspansao dela será resetada.
        BlocoFixed[n].style.zIndex = '-1'
        seta[n].style.transform = 'rotate(0deg)'
        BlocoUl[n].style.opacity = '0%'
        li[n].style.filter = 'contrast(1)'
    }
}