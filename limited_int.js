//classe que cria um numero inteiro limitado
// para adicionar ou reduzir numeros utilize a função add
// limites e valores iniciais devem ser maiores do que zero
// exemplo de funcionamento
// caso crie uma instancia com limite de 60 e valor inicial 0
// ao realizar a função add(61) o valor passara a ser '1'
// pois 61 supera o limite de 60 e ainda sobra 1
//caso utilize a função add(-1)
// o valor sera 59, pois o valor inicial era 0, ao subtrair de 0 ele retorna ao limite
// e ainda teria de reduzir 1 do limite então retornaria o (60-1)
// o atributo 'valor' retorna o valor atual do numero
// a função add retorna em quantas vezes o valor foi superado, seja pra cima ou pra baixo
// exemplo: caso seja feito add(120) a função add retornara '2' pois foi superado duas vezes para cima
// exemplo_2: caso seja feito add(-120) a função add retornara '-2' pois tera superado duas vezes para baixo
// caso nem o limite nem o piso do limite (0) seja superado, a função add retornara '0'
// exemplo: caso faça add(30) a função retornara 0, pois em nenhum momento o limite (60) foi superado e nem o piso(0)


// crie uma classe utilizando 'new limited_int(valor_inicial, limite)


class limited_int{
    constructor(valor_inicial = 0, limite=100){
        this.limite = limite;
        this.valor = valor_inicial;
        if(limite < 0){
            throw new Error("o limite não pode ser menor ou igual a 0")
        }
        if(valor_inicial < 0){

            throw new Error('O valor inicial não pode ser menor do que 0')
        }

        if(valor_inicial > limite){
            throw new Error('O valor inicial não pode ser maior do que o limite')
            }

    }
valor(){
    return this.valor;
}
 add(outro){
    var soma = this.valor + outro;


    if(outro >=0){
    


    this.valor =  (soma) - ( (Math.floor(soma/this.limite)) * this.limite );
    
    if(soma > this.limite  || this.valor == 0){
        return Math.floor(soma/this.limite);// caso supere o limite retorna em quantas vezes superou
    }
    
    }
	
      if(soma < 0){

            var sobrante = soma * -1;
            if(sobrante < this.limite){
                this.valor =  this.limite-sobrante;
                
            }else{
              this.add(sobrante);
              
            }

         return Math.floor(soma/this.limite) ; // caso a soma for menor do que 0 (ou seja, subtraiu de 0)

    }

    return 0; // padrão

} //funcao


} // classe



teste = new limited_int(0,60);

console.log(teste.add(120))