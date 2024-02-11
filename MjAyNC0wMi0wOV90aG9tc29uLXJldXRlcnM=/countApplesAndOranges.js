/**
 * A casa de Gabriel tem uma macieira e uma laranjeira que produzem uma abundância de frutos.
 * Usando as informações fornecidas abaixo, determine o número de maças e laranjas que caem na casa de Gabriel.
 * No diagrama acima, a região vermelha é a casa, onde “s” é o ponto de partida, e “t” é o ponto final. 
 * A macieira está à esquerda da casa, e a laranjeira está à sua direita. 
 * Suponha que as árvores estão localizadas em um único ponto, onde a macieira está no ponto “a”, e a laranjeira está no ponto “b”.
 * 
 * Um valor negativo significa que o fruto caiu unidades à esquerda da árvore,
 * e um valor positivo significa que cai unidades à direita da árvore. 
 * 
 * Dado o valor “d” para “m” maçãs e “n” laranjas,
 * determine quantas maçãs e laranjas cairão na casa de Gabriel (ou seja, na faixa inclusiva [s,t])?
*/

// s = house start point
// t = house end point
// a = point macieira
// b = point laranjeira

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let aCount = 0
  let oCount = 0
  
  apples.forEach(aPoint => {
    let aPos = a + aPoint
    if (aPos >= s && aPos <= t) {
      aCount++
    }
  })
  
  oranges.forEach(oPoint => {
    let oPos = b + oPoint
    if (oPos >= s && oPos <= t) {
      oCount++
    }
  })
  
  return [aCount, oCount]
}

const [aCount, oCount] = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
// countApplesAndOranges(2, 3, 1, 5, [-2], [-1])
// countApplesAndOranges(2, 3, 1, 5, [-2, -1, 0, 2], [-1])

console.log(`${aCount} apples fell at Gabriel's house`)
console.log(`${oCount} apples fell at Gabriel's house`)



