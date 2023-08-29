
input = document.getElementById("terminalIn");
output = document.getElementById("end")

input.focus()

text = []

function  teste(e){

    switch(e){
        case 'Enter':
            if(input.value.includes('echo ')){
                comandoConsole(input.value);
            }else{
                prossiga(input.value);
            }
            break;
    }

}

function comandoConsole(texto){

    texto = texto.replace("echo ", "")
    text += "<br/>" + texto
    input.value = "";
    output.innerHTML = text

}

function prossiga(comando){
    switch(comando){
        case 'help':
            text += "<br>" + help;
            break;
        case 'members':
            let membersStr = members.toString().replace(/,/g, "<br/>");
            text += "<br>" + membersStr;
            break;
        case 'whatnext':
            text += "<br>" + whatnext;
            break;
        case 'social':
        text += "<br>" + social;
        break;
        case 'mission':
            text += "<br/>" + mission;
            break;
        case 'OGC':
            text += "<br/>" + ogc
            break;
        case 'echo':
            text += "o comando echo deve ser acompanhado de mais algo, por exemplo 'echo teste'"
            break;
        case 'clear':
            text = [];
            break;
        default:
            text += '<br> Comando inválido';
            break;
    }

    input.value = "";
    output.innerHTML = text
}

let help = [
    '<br> members &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Quem são esses malucos',
    '<br> mission &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp O que eles querem com você',
    '<br> whatnext &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp No que você pode ajudar eles',
    '<br> social &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Aonde encontrar eles',
    '<br> echo &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp escreva algo no terminal, não serve pra nada, mas é legal'
]

let members = [
    "Exploit: Esse cara pipipi popopo",
    "Cipher: Esse Também",
    "Dystopia: Muito massa esse nome não é",
    "BlaKKat: uiuiui baita jordan 4",
    "Qu33n: rainha la ele"
]

let whatnext = [

    "Dá uma volta por esse sistema, se aconstuma com o hambiente, vc vai passar um bom tempo aqui"

]

let social = [

    "@pedrobotelhosouza"

]

let mission = [

    "Estamos aqui pra te ensinar sobre Segurança, vamos te tornar um verdadeiro hacker, ou só de deixar mais inteligente, sei lá"

]

let ogc = [

    "OGC, Quais segredos essa sigla escoonde?"

]