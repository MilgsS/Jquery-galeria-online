$(document).ready(function(){
$('header button').click(function(){
    $('form').slideDown(); // Desce a tela
})

$('#can').click(function(){
    $('form').slideUp(); // Sobe a tela 
})

$('form').on('submit' ,function(e){
        console.log('submit')
        e.preventDefault()

        const endimg = $('#endimg').val(); //funcionando
        const nvimg = $(`<li style='display: none'></li>`)
        $(`<img src="${endimg}" />`).appendTo(nvimg)
        $(`
        <div class='overlay'>
            <a href='${endimg}' target='_blank' title='Ver imagem em tamanho real'>
                Ver imagem em tamanho real            
            </a>
        </div>
        `).appendTo(nvimg)

        $(nvimg).appendTo('ul')
        $(nvimg).fadeIn(800)
    })
})