let conteudo;

function digitando(from, e) {
    e = e || window.event;
    var w = conteudo;
    var tw = from.value;
    if (!pw){
      w.innerHTML = nl2br(tw);
    }
  }