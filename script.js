const data = new Date(); //data atual
function previsao() { //funcao para constriur as variaveis e lógica
    var prox = document.querySelector('div#prox')
    var datual = document.querySelector('div#dtl')
    var pcm3 = document.querySelector('div#pm3')
    var dat = document.getElementById('pdata') //Data da proxima leitura
    var datual = document.getElementById('adata') //Data da leitura atual
    var dante = document.getElementById('ndata') //Data da leitura Anterior
    const danter = dante.value //data leitura anterior
    const dprox = dat.value //data próxima leitura
    const da = datual.value //data atual
    const umdia = 1000*60*60*24 //transformando milissegundos em dia
    var milsat = Date.parse(da)
    var milsprox = Date.parse(dprox)
    var milsante = Date.parse(danter)
    var d = ((milsprox - milsat)/umdia)
    var txtante = window.document.querySelector("input#txtant")
    var txtatu = window.document.querySelector("input#txtatual")
    var res = window.document.querySelector('div#res')
    var pag = document.querySelector('div#pag')
    var ant = Number(txtante.value)
    var atual = Number(txtatu.value)
    var gastou = (atual-ant)
    var erro = false //não deverá ter erro
    if (dante.value.length == 0) {
        alert('[ERRO] A data da leitura anterior precisa estar preenchida!!')
        erro = true
        }
        if (datual.value.length == 0) {
            alert('[ERRO] A data da leitura atual precisa estar preenchida!!')
            erro = true
        }
        if (dat.value.length == 0){
            alert('[ERRO] A data da próxima leitura precisa estar preenchida!!')
            erro = true
        }
        if (txtante.value.length == 0) {
        alert('[ERRO] A leitura anterior precisa estar preenchida!!')
        erro = true
        }
        if (txtatu.value.length == 0){
            alert('[ERRO] A leitura atual precisa estar preenchida!!')
            erro = true
        }
        if (Number(ant > atual)) {
            alert('[ERRO] A leitura anterior não pode ser maior que a atual!!')
            erro = true
        }
        if (erro) {
            return false
        }
    else{
        var checons = document.getElementsByName('radres')
        if (checons[0].checked){
            if(gastou <= 10){
                var faixa1 = 54.36
                var somaval = faixa1
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                var dcons = (milsat - milsante) / umdia
                var media = gastou / dcons
                var prevm3 = (d*media)+gastou
                var mediadia = Math.ceil(media)//parseFloat(media.toFixed(2))
                var prevm3to = Math.ceil(prevm3)//parseInt(prevm3.toFixed(0))
                //será a parte que fará a previsão ainda não configurada
                var c1 = 10
                var c2 = 10
                var c3 = 10
                var c4 = 20
                var c5 = prevm3 - 50
                var f1 = 54.36
                var f2 = 10.58*c2
                var f3 = 20.27*c3
                var f4 = 20.27*c4
                var f5 = 21.11*c5
                var svt = (f1+f2+f3+f4+f5) //soma valor total
                var tx_reg = svt*0.01 //taxa regulamentacao
                var sttl = (svt*2)+tx_reg //soma total dos valores
                var pgr = parseFloat(sttl.toFixed(2)) //pagará
                var prevm3to = parseFloat(prevm3.toFixed(2))
                var pgbr = pgr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                if (pgbr >= 0){
                    res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                    dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                    pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                    pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                    prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
                }else{
                    res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                    dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                    pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                    pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                }
            }
            else if(gastou <= 20){
                var cons1 = 10
                var cons2 = gastou - 10
                var faixa1 = 54.36
                var faixa2 = 10.58*cons2
                var somaval = faixa1 + faixa2
                var txreg = somaval*0.01
                var somatotal = (somaval*2)+txreg
                var pagar = parseFloat(somatotal.toFixed(2))
                var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                var dcons = (milsat - milsante) / umdia
                var media = gastou / dcons
                var prevm3 = (d*media)+gastou
                var mediadia = Math.ceil(media)//var mediadia = parseFloat(media.toFixed(2))
                var prevm3to = Math.ceil(prevm3)//var prevm3to = parseFloat(prevm3.toFixed(2))
                //será a parte que fará a previsão ainda não configurada
                var c1 = 10
                var c2 = 10
                var c3 = 10
                var c4 = 20
                var c5 = prevm3 - 50
                var f1 = 54.36
                var f2 = 10.58*c2
                var f3 = 20.27*c3
                var f4 = 20.27*c4
                var f5 = 21.11*c5
                var svt = (f1+f2+f3+f4+f5) //soma valor total
                var tx_reg = svt*0.01 //taxa regulamentacao
                var sttl = (svt*2)+tx_reg //soma total dos valores
                var pgr = parseFloat(sttl.toFixed(2)) //pagará
                var prevm3to = parseFloat(prevm3.toFixed(2))
                var pgbr = pgr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                if (pgbr >= 0){

                    res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                    dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                    pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                    pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                    prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
                }else{
                    res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                    dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                    pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                    pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                }
            }
            else{
                var cons1 = 10
                var cons2 = 10
                var cons3 = 10
                var cons4 = 20
                var cons5 = gastou - 50
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
                var dcons = (milsat - milsante) / umdia
                var media = gastou / dcons
                console.log(media)
                var prevm3 = (d*media)+gastou
                console.log(prevm3)
                var mediadia = Math.ceil(media)//mediadia = parseFloat(media.toFixed(2))
                //será a parte que fará a previsão
                var c1 = 10
                var c2 = 10
                var c3 = 10
                var c4 = 20
                var c5 = prevm3 - 50
                var f1 = 54.36
                var f2 = 10.58*c2
                var f3 = 20.27*c3
                var f4 = 20.27*c4
                var f5 = 21.11*c5
                var svt = (f1+f2+f3+f4+f5) //soma valor total
                var tx_reg = svt*0.01 //taxa regulamentacao
                var sttl = (svt*2)+tx_reg //soma total dos valores
                var pgr = parseFloat(sttl.toFixed(2)) //pagará
                var prevm3to = Math.ceil(prevm3)//var prevm3to = parseFloat(prevm3.toFixed(2))
                var pgbr = pgr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de consumo até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
        }
    }
       else if(checons[1].checked){
            if(gastou <= 10){
            var faixa1 = 27.07
            var somaval = faixa1
            var txreg = somaval*0.01
            var somatotal = (somaval*2)+txreg
            var pagar = parseFloat(somatotal.toFixed(2))
            var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            console.log(pgmoeda)
            var dcons = (milsat - milsante) / umdia
            var media = gastou / dcons
            var prevm3 = (d*media)+gastou
            var mediadia = Math.ceil(media)//var mediadia = parseFloat(media.toFixed(2))
            var prevm3to = Math.ceil(prevm3)//var prevm3to = parseFloat(prevm3.toFixed(2))
            //será a parte que fará a previsão ainda não configurada
            if (pgbr >= 0){
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
            }else{
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
            }
        }
        else if(gastou <= 20){
            var cons1 = 10
            var cons2 = gastou - 10
            var faixa1 = 27.07
            var faixa2 = 4.24*cons2
            var somaval = faixa1 + faixa2
            var txreg = somaval*0.01
            var somatotal = (somaval*2)+txreg
            var pagar = parseFloat(somatotal.toFixed(2))
            var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            var dcons = (milsat - milsante) / umdia
            var media = gastou / dcons
            var prevm3 = (d*media)+gastou
            var mediadia = Math.ceil(media)//var mediadia = parseFloat(media.toFixed(2))
            var prevm3to = Math.ceil(prevm3)//var prevm3to = parseFloat(prevm3.toFixed(2))
            //será a parte que fará a previsão ainda não configurada
            if (pgbr >= 0){
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
            }else{
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
            } 
        }else if(gastou <= 30){
            var cons1 = 10
            var cons2 = 10
            var cons3 = gastou - 20
            var faixa1 = 27.07
            var faixa2 = 4.24*cons2
            var faixa3 = 10.58*cons3
            var somaval = faixa1 + faixa2 + faixa3
            var txreg = somaval*0.01
            var somatotal = (somaval*2)+txreg
            var pagar = parseFloat(somatotal.toFixed(2))
            var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            var dcons = (milsat - milsante) / umdia
            var media = gastou / dcons
            var prevm3 = (d*media)+gastou
            var mediadia = Math.ceil(media)//mediadia = parseFloat(media.toFixed(2))
            var prevm3to = Math.ceil(prevm3)//prevm3to = parseFloat(prevm3.toFixed(2))
            //será a parte que fará a previsão ainda não configurada
            if (pgbr >= 0){
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
            }else{
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
            } 
        }
        else if(gastou <= 50){
            var cons1 = 10
            var cons2 = 10
            var cons3 = 10
            var cons4 = gastou - 30
            var faixa1 = 27.07
            var faixa2 = 4.24*cons2
            var faixa3 = 10.58*cons3
            var faixa4 = 10.58*cons4
            var somaval = faixa1 + faixa2 + faixa3 + faixa4
            var txreg = somaval*0.01
            var somatotal = (somaval*2)+txreg
            var pagar = parseFloat(somatotal.toFixed(2))
            var pgmoeda = pagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            var dcons = (milsat - milsante) / umdia
            var media = gastou / dcons
            var prevm3 = (d*media)+gastou
            var mediadia = Math.ceil(media)//mediadia = parseFloat(media.toFixed(2))
            var prevm3to = Math.ceil(prevm3)//prevm3to = parseFloat(prevm3.toFixed(2))
            //será a parte que fará a previsão ainda não configurada
            if (pgbr >= 0){
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
                prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
            }else{
                res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
                dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
                pcm3.innerHTML = `<p>A previsão de gasto até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
                pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
            }
        }else{
            var cons1 = 10
            var cons2 = 10
            var cons3 = 10
            var cons4 = 20
            var cons5 = gastou - 50
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
            var dcons = (milsat - milsante) / umdia
            var media = gastou / dcons
            var prevm3 = (d*media)+gastou
            var mediadia = Math.ceil(media)//mediadia = parseFloat(media.toFixed(2))
            var prevm3to = Math.ceil(prevm3)//prevm3to = parseFloat(prevm3.toFixed(2))
            //cálculo da previsão
            var c1 = 10
            var c2 = 10
            var c3 = 10
            var c4 = 20
            var c5 = prevm3 - 50
            var f1 = 54.36
            var f2 = 10.58*c2
            var f3 = 20.27*c3
            var f4 = 20.27*c4
            var f5 = 21.11*c5
            var svt = (f1+f2+f3+f4+f5) //soma valor total
            var tx_reg = svt*0.01 //taxa regulamentacao
            var sttl = (svt*2)+tx_reg //soma total dos valores
            var pgr = parseFloat(sttl.toFixed(2)) //pagará
            var pgbr = pgr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            res.innerHTML = `<p>Seu consumo no período informado é de <strong>${gastou}</strong> (m³)</p>`
            dtl.innerHTML = `<p> Sua média de consumo por dia é de <strong>${mediadia}</strong> (m³)</p>`
            pcm3.innerHTML = `<p>A previsão de consumo até a data da leitura é <strong>${prevm3to}</strong>(m³)</p>`
            pag.innerHTML = `<p>O valor a pagar até o momento é <strong>${pgmoeda}</strong></p>`
            prox.innerHTML = `<p>A previsão a pagar até a data da leitura é <strong>${pgbr}</strong></p>`
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