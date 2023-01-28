limited_int
Uma classe simples que cria um número inteiro limitado e possibilita adição ou subtração de valores. Utilize a função add para adicionar ou reduzir valores. Limites e valores iniciais devem ser maiores do que zero.

Exemplo de funcionamento
Caso crie uma instância com limite de 60 e valor inicial 0, ao realizar a função add(61) o valor passará a ser '1', pois 61 supera o limite de 60 e ainda sobra 1. Caso utilize a função add(-1), o valor será 59, pois o valor inicial era 0, ao subtrair de 0 ele retorna ao limite e ainda teria de reduzir 1 do limite então retornaria o (60-1). O atributo valor retorna o valor atual do número. A função add retorna em quantas vezes o valor foi superado, seja para cima ou para baixo.

Exemplo: caso seja feito add(120) a função add retornará '2' pois foi superado duas vezes para cima.
Exemplo 2: caso seja feito add(-120) a função add retornará '-2' pois terá superado duas vezes para baixo.

Caso nem o limite nem o piso do limite (0) seja superado, a função add retornará '0'.
Exemplo: caso faça add(30) a função retornará 0, pois em nenhum momento o limite (60) foi superado e nem o piso(0).

Utilização
Crie uma instância utilizando new limited_int(valor_inicial, limite).

Exemplo

teste = new limited_int(0,60);
console.log(teste.add(120))


Notas
Caso o limite seja menor ou igual a 0, será lançado um erro
Caso o valor inicial seja menor do que 0, será lançado um erro
Caso o valor inicial seja maior do que o limite, será lançado um erro
