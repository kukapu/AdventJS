export default function shouldBuyFidelity(times) {
  let normalPrice = 12 * times
  let fidelityPrice = 250 
  for(let i = 1; i <= times; i++){
      fidelityPrice += 12 * (0.75 ** i);
      console.log(fidelityPrice)
  }

  return normalPrice > fidelityPrice
}

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad