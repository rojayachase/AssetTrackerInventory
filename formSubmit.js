const form = document.getElementById('idForm');

form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        fetch('https://reqres.in/api/users', {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        console.log([...formData]);

});

