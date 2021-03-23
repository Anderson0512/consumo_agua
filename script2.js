function previsao() { //funcao para constriur as variaveis e lógica
    var pcm3 = document.querySelector('div#pm3')
    var txttotal = window.document.querySelector("input#txttot")
    var res = window.document.querySelector('div#res')
    var pag = document.querySelector('div#pag')
    var total = Number(txttotal.value)
    var erro = false //não deverá ter erro
    if (txttotal.value.length == 0) {
        alert('[ERRO] Necessário digitar o valor em m3!!')
        erro = true
    } 
    else
    {
        var checons = document.getElementsByName('radres')
        if (checons[0].checked){
            if(total <= 10){
                var faixa1 = 54.36
                var somaval = faixa1
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            }
            else if(total <= 20){
                var cons1 = 10
                var cons2 = total - 10
                var faixa1 = 54.36
                var faixa2 = 10.58*cons2
                var somaval = faixa1 + faixa2
                console.log(somaval)
                var txreg = somaval*0.01
                console.log(txreg)
                var somatotal = (somaval*2)+txreg
                console.log(somatotal)
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            }
            else if(total <= 30){
                var cons1 = 10
                var cons2 = 10
                var cons3 = total - 20
                var faixa1 = 54.36
                var faixa2 = 10.58*cons2
                var faixa3 = 20.27*cons3
                var somaval = faixa1 + faixa2 + faixa3
                console.log(somaval)
                var txreg = somaval*0.01
                console.log(txreg)
                var somatotal = (somaval*2)+txreg 
                console.log(somatotal)
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            } 
            else if(total <= 50){
                var cons1 = 10
                var cons2 = 10
                var cons3 = 10
                var cons4 = total - 30
                var faixa1 = 54.36
                var faixa2 = 10.58*cons2
                var faixa3 = 20.27*cons3
                var faixa4 = 20.27*cons4
                var somaval = faixa1 + faixa2 + faixa3 + faixa4
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            } 
            else
            {     
                var cons1 = 10
                var cons2 = 10
                var cons3 = 10
                var cons4 = 20
                var cons5 = total - 50
                var faixa1 = 54.36 
                var faixa2 = 10.58*cons2
                var faixa3 = 20.27*cons3
                var faixa4 = 20.27*cons4
                var faixa5 = 21.11*cons5
                var somaval = (faixa1+faixa2+faixa3+faixa4+faixa5)
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            }
        }
        else if(checons[1].checked){
            if(total <= 10){
                var faixa1 = 27.07
                var somaval = faixa1
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            }
            else if(total <= 20){
                var cons1 = 10
                var cons2 = total - 10
                var faixa1 = 27.07
                var faixa2 = 4.24*cons2
                var somaval = faixa1 + faixa2
                console.log(somaval)
                var txreg = somaval*0.01
                console.log(txreg)
                var somatotal = (somaval*2)+txreg
                console.log(somatotal)
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            }
            else if(total <= 30){
                var cons1 = 10
                var cons2 = 10
                var cons3 = total - 20
                var faixa1 = 27.07
                var faixa2 = 4.24*cons2
                var faixa3 = 10.58*cons3
                var somaval = faixa1 + faixa2 + faixa3
                console.log(somaval)
                var txreg = somaval*0.01
                console.log(txreg)
                var somatotal = (somaval*2)+txreg 
                console.log(somatotal)
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            } 
            else if(total <= 50){
                var cons1 = 10
                var cons2 = 10
                var cons3 = 10
                var cons4 = total - 30
                var faixa1 = 27.07
                var faixa2 = 4.24*cons2
                var faixa3 = 10.58*cons3
                var faixa4 = 10.58*cons4
                var somaval = faixa1 + faixa2 + faixa3 + faixa4
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            } 
            else{
                var cons1 = 10
                var cons2 = 10
                var cons3 = 10
                var cons4 = 20
                var cons5 = total - 50
                var faixa1 = 27.07
                var faixa2 = 4.24*cons2
                var faixa3 = 10.58*cons3
                var faixa4 = 10.58*cons4
                var faixa5 = 11.65*cons5
                var somaval = faixa1 + faixa2 + faixa3 + faixa4 + faixa5
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                pag.innerHTML = `<p>O valor a pagar é <strong>${pgmoeda}</strong></p>`
            }
        }    
    }
}
(() => {
    setTimeout(() => { 
    document.getElementsByTagName("clean")[0];backgroundColor = 'lightgreen';
    }, 50)
})();
    function sampleFunction() {
    location.reload();
    }  
