let forms = document.getElementById('forms');

forms.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = forms.email.value;
    const password = forms.password.value;
    if(password === '' && email === ''){
        alert('Prencha todos os campos!!');
        return;
    }

    alert("Logado com sucesso!!");

    forms.email.value = '';
    forms.password.value = '';
})
