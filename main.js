
$('form').on('submit', function (e) {
    e.preventDefault()

    const valor = $('#tarefa').val();
    let novaLinha = $('<li class="selecionavel"></li>')

    $(novaLinha).html(valor)
    $(novaLinha).appendTo("ul")

})


$('.selecionavel').click(function () {
    $('.selecionavel').css('text-decoration', 'line-through')
})
