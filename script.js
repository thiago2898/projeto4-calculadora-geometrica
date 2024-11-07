let menu = ``

function triangleArea(value) {
    const base = prompt('Quanto vale a base?')
    const height = prompt('Quanto vale a altura?')
    return alert("A área do seu triângulo é: " + (value = (base * height) / 2))
}

function rectangleArea(area) {
    const base = prompt('Quanto vale a base?')
    const height = prompt('Quanto vale a altura?')
    return alert("A área do seu retângulo é: " + (area = base * height))
}

function squareArea(area) {
    const side = prompt('Quanto vale o lado?')
    return alert("A área do seu quadrado é: " + (area = side * side))
}

function trapeziumArea(area) {
    const largerBase = prompt('Defina a base maior.')
    const smallerBase = prompt('Defina a base menor.')
    const height = prompt('Quanto vale a altura?')
    return alert("A área do seu trapézio é: " + (area = ((largerBase + smallerBase) * height) / 2))
}

function circleArea(area) {
    const radius = prompt('Defina o raio do círculo.')
    return alert("A área do seu círculo é: " + (area = 3.14 * (radius * radius)))
}



do {
    menu = prompt(`Opções de cálculos:
    1- Área do triângulo
    2- Área do retângulo
    3- Área do quadrado
    4- Área do trapézio
    5- Área do círculo
    6- Sair`)

    switch (menu) {
        case '1':
            triangleArea()
            break
        case '2':
            rectangleArea()
            break
        case '3':
            squareArea()
            break
        case '4':
            trapeziumArea()
            break
        case '5':
            circleArea()
            break
        case '6':
            alert('Encerrando programa...')
            break
        default:
            alert('Opção inválida')
    }
} while (menu !== '6')