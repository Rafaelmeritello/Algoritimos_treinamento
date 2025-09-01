// FAZER PROJETO NUMERO COMPOSTO

class NumeralComposto {

    constructor(inicial, compositores, max = undefined, min = undefined) {
        this.inicial = inicial
        this.valor = inicial
        this.compositores = compositores
        this.max = max
        this.min = min

        this.composicao_atual = {}

        this.compositores_inicializados = []
        this.composicao_anterior = {}
    }



    _recalcular_valor() {
        this.valor = 0
        Object.keys(this.composicao_atual).forEach((val) => {
            this.valor += this.composicao_atual[val]
        })
    }
   
 // a função de compor só pode ser usada uma vez por compositor
 // nesta função, caso o numero composto tenha um maximo ou mínimo,
 // o valor do composto sempre vai se limitar automaticamente ao valor que tornaria o numero em seu maximo/minimo
 // ex: max = 100, valor_atual = 89, valor_compose = 20, o valor_compose vai ser automaticamente reduzido para 11
 // pois somar 20 superaria os 100

    compor(nome_compositor, valor) {
        if (!this.compositores.includes(nome_compositor)) {
            throw new Error("Compositor desconhecido")
        }
        if (this.compositores_inicializados.includes(nome_compositor)) {
            throw new Error("Compositor já foi utilizado, utilize update para atualizar os valores dos compostos")
        }

        this.compositores_inicializados.push(nome_compositor)




        if (this.max && this.valor + valor > this.max) {
            this.composicao_atual[nome_compositor] = this.max - this.valor

            this.valor = this.max

        }

        else if (this.min != undefined && this.valor + valor < this.min) {

            this.composicao_atual[nome_compositor] = this.min - this.valor

            this.valor = this.min


        } else {

            this.composicao_atual[nome_compositor] = valor
            this.valor += valor
        }


    }


    atualizar_composto(nome_compositor, valor, ignorar_se_chegar_max = false, ignorar_se_chegar_min = false) {
        if (!this.compositores_inicializados.includes(nome_compositor)) {
            throw new Error('Inicialize o compositor com a funcao compor')
        }

        // se for maior que o max
        if (this.valor + valor > this.max) {

            // ignorar por que chegou no max
            if (ignorar_se_chegar_max) { return }
        
            valor = this.max - (this.valor - this.composicao_atual[nome_compositor])

      
        }


        if ((this.valor - this.composicao_atual[nome_compositor]) + valor < this.min) {
            // ignorar por que chegou no max
            if (ignorar_se_chegar_min) { return }
           
             valor = this.min - (this.valor - this.composicao_atual[nome_compositor])

       

        }

    
           this._atualizar_composicao_anterior()
      
            this.composicao_atual[nome_compositor] = valor
           
        this._recalcular_valor()
    }

    voltar_composicao_anteiror(){
      
        if(Object.keys(this.composicao_anterior).length == 0){throw new Error('Não existem atualizações para desfazer')}
  
      
        var composicao_atual_aux = this.composicao_atual
        this.composicao_atual = this.composicao_anterior
        this.composicao_anterior  = composicao_atual_aux
        this._recalcular_valor()
    }


    _atualizar_composicao_anterior(){
        this.composicao_anterior = JSON.parse(JSON.stringify(this.composicao_atual))
    }



    dimensionar(valor){
        
        if(Object.keys(this.composicao_atual).length != this.compositores.length){
            throw new Error("é preciso inicializar todos os compositores antes de realizar operações")
        }
            if(valor <= 0){throw new Error("valor invalido, valores para operacao devem ser maiores do que zero")}

            // se o resultado for maior do que o max e  o ajuste estiver desativado ( !ajustar_max)
          
            this._atualizar_composicao_anterior()
            
            Object.keys(this.composicao_atual).forEach((compositor)=>{
                this.composicao_atual[compositor] *=valor
             })
                       
            this.max *= valor
                    
            
        this._recalcular_valor() 
              
          
    }


    

    soma_escalar(valor,ajustar_max=true){
        
        if(Object.keys(this.composicao_atual).length != this.compositores.length){
            throw new Error("é preciso inicializar todos os compositores antes de realizar operações")
        }
            if(valor <= 0){throw new Error("valor invalido, valores para soma devem ser maiores do que zero")}

            // se o resultado for maior do que o max e  o ajuste estiver desativado ( !ajustar_max)
             if(this.valor + Object.keys(this.composicao_atual).length * valor > this.max && !ajustar_max){
                // vai pegar a destribuição do que falta para chegar no max e somar entre cada composto   
                valor = (this.max - this.valor)/Object.keys(this.composicao_atual).length
                    
                }
            this._atualizar_composicao_anterior()
            
            Object.keys(this.composicao_atual).forEach((compositor)=>{
                this.composicao_atual[compositor] +=valor
             })
                       
          
            
        this.valor += Object.keys(this.composicao_atual).length * valor
        if(this.max && ajustar_max && this.valor > this.max){
                           
            this.max = this.valor
            this.min *= this.valor
                    }
    }







}






// fazer opção de voltar a estado anterior
a = new NumeralComposto(0, ['adicionado', 'adicionado1'],20,-1)
a.compor('adicionado', 2)
a.compor('adicionado1', 10)
a.atualizar_composto('teste',12)

a.dimensionar(0.5)
console.log(a.valor)

console.log(a.composicao_atual)
console.log(a.max)
