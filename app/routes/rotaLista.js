const axios = require('axios');


const query = '{"query":"{boards(ids:7173434528){name id}}"}'

const query2 = '{"query":"{boards(ids:7173434528){name items_page{items{name  column_values{ column{ title } text } } } } }"}';




module.exports = (app)=>{
    app.get('/lista', (req,res)=>{
        var options = {
        method: 'POST',
        url: 'https://api.monday.com/v2',
        headers: {
            cookie: '__cf_bm=jWX_bqoSYuWje67v2WLFhZx.kAST_njXHzmzpGNsMy4-1725539560-1.0.1.1-5nbcRKU8702rwnt_PBKyoRLsUavrfrHtHCnb54G7o1a0H2STxNFKL1rQ_LPL1md.W8oNu4d_0521zrWDGVAkcY1VjQNFClNq1KPPkxcWT5k',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIzMTk4NDM3NSwiYWFpIjoxMSwidWlkIjozNzQ4ODAzMiwiaWFkIjoiMjAyMy0wMS0zMFQxODo1MDowMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MzMzODIsInJnbiI6InVzZTEifQ.frUZujZlTRS9oe1HxYz3zgrfDcJHR779q0N_w036cvI'
        },
            data: query2
        };        
        axios.request(options).then(function (response) {
            //const dados = response.data.data.boards[0].name
            const dados1 = response.data.data.boards[0].items_page.items 
            const dados2 = response.data.data.boards[0].items_page.items[0].column_values
            const dados3 = JSON.stringify(response.data.data.boards[0].items_page.items[0].column_values[0].column.title) 

            res.render('listaDados/lista', {data : dados1}) 
            //res.render('listaDados/lista', {data : dados2})  
            //res.render('listaDados/lista', {data : dados1.column_values})          
            //console.log(dados + " / " + dados1 + " / " + dados2 + " / " + dados3);
             dados1.forEach(dados=>{
                 //console.log(dados.column.title + " - " + dados.text )
                 //console.log(dados.column_values[1].text)
                 console.log(dados.column_values)
             })
            
        }).catch(function (error) {
        console.error(error);
        });
              
    })
        
}