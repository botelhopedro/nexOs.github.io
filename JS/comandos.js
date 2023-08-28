
input = document.getElementById("terminalIn");
output = document.getElementById("end")

text = []

function  teste(e){

    switch(e){
        case 'Enter':
            prossiga(input.value);
            break;
    }

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

help = [
    '<br> members &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Quem são esses malucos',
    '<br> mission &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp O que eles querem com você',
    '<br> whatnext &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp No que você pode ajudar eles',
    '<br> social &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Aonde encontrar eles'
]

members = [
    "Exploit: Esse cara pipipi popopo",
    "Cipher: Esse Também",
    "Dystopia: Muito massa esse nome não é",
    "BlaKKat: uiuiui baita jordan 4",
    "Qu33n: rainha la ele"
]

whatnext = [

    "Dá uma volta por esse sistema, se aconstuma com o hambiente, vc vai passar um bom tempo aqui"

]

social = [

    "@pedrobotelhosouza"

]