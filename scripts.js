$('#subscribeForm button[type="submit"]').click(function(event) {
    event.preventDefault();

    // form, gform
    const $form = $('#subscribeForm');
    const formToUrl =
        'https://script.google.com/macros/s/AKfycby_e6s1A5uLmYMEZxhI80xydS0wNqzBhY6NNF5WyILtK07szbmQ/exec';

    // field validation
    $nameField = $('#hogyan_szolithatunk');
    $questionField = $('#ide_ird_a_kerdesed');
    if (!$nameField.val() || !$questionField.val()) {
        return;
    }

    // alerts
    const $successAlert = $('#subscribeWrapper .alert-success');
    const $failAlert = $('#subscribeWrapper .alert-danger');
    $successAlert.hide();
    $failAlert.hide();

    // request
    $.ajax({
        url: formToUrl,
        method: 'GET',
        dataType: 'json',
        data: $form.serializeArray()
    })
        .done(function() {
            $successAlert.show();
            $nameField.val('');
            $questionField.val('');
        })
        .fail(function() {
            $failAlert.show();
        });
});
