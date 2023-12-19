export default function pangram(letter) {
  const abecedario = new Set(letter.toLowerCase().split('').filter(n=>n.match(/[a-zñ]/gi)))
  return abecedario.size >= 27
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false