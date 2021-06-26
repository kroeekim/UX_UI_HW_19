$('#donateButton').on('click', function() {
    $("#donateModal").addClass('showing');
});

$('.donation').on('click', function() {
    const id = this.id;
    const isActive = $(`#${id}`).hasClass('active');
    if (isActive) {
        $(`#${id}`).removeClass('active');
        $(`#${id}`).addClass('inactive');
    } else {
        $('.active').addClass('inactive');
        $('.active').removeClass('active');
        $(`#${id}`).removeClass('inactive');
        $(`#${id}`).addClass('active');
    }
});


$('#donateModal img').on('click', function() {
    $("#donateModal").removeClass('showing');
});

$('#continueButton').on('click', function() {
    const anyActive = $('.donation').hasClass('active');

    if (anyActive) {
        $("#donateModal").css('display', 'none');
    }
});