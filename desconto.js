const precoTenis = 12999;
const meuDinheiro = 8000;

const desconto = precoTenis - meuDinheiro;
const cupom = 100 * desconto / precoTenis;

console.log (`O valor do desconto deve ser ${cupom}%.`);