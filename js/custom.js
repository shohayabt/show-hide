    let show = document.querySelector('#main-body .input-password .show');
    show.addEventListener('click', function(){
        show.classList.add('displaynone');
        let password = document.getElementById('password');
        password.type = 'text';
        
        let hide = document.querySelector('#main-body .input-password .hide');
        hide.classList.add('displayInlineBlock');
    })

    let hide = document.querySelector('#main-body .input-password .hide');
    hide.addEventListener('click', function(){
        hide.classList.remove('displayInlineBlock');

        let show = document.querySelector('#main-body .input-password .show');

        show.classList.remove('displaynone');
        let password = document.getElementById('password');
        password.type = 'password';
    })