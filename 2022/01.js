function wrapping(gifts) {
  
    const giftsEnvueltos = gifts.map(gift => {
        const giftLados = '*' + gift + '*'
        const giftLadosSaltos = '\n' + giftLados + '\n'
        const envoltorioLado = '*'.repeat(giftLados.length)
        const gistEnvuelto = envoltorioLado + giftLadosSaltos + envoltorioLado
        return gistEnvuelto
    })
  
    return giftsEnvueltos
}
  