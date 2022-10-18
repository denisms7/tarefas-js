$('form').on('submit', function(e) {
    e.preventDefault();


const inputTarefa=$('#tarefa').val();
const novaTarefa =$(`<li class="texto-tarefa">${inputTarefa}</li>`);


    $(novaTarefa).appendTo('ul');
    $('#tarefa').val('');
    $(novaTarefa).click(function(){
        $(novaTarefa).css("text-decoration", "line-through");
    })


})