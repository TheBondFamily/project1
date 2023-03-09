const listen = event => {
    const p = document.createElement('p');
    p.innerText = "You find yourself just inside a massive archway formed of ivy. In front of you stands an enormous wall of thorns and greenery, blocking your path forward. To your left is a straight path leading toward the setting sun. To your right there is a winding road that disappears into a thick fog."
    const x = document.getElementById("firstChoice")
    firstChoice.removeAttribute("hidden")
    document.querySelector('#begin').appendChild(p)
}