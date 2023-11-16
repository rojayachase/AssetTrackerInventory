const form = document.getElementById('idForm');

form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        console.log([...formData]);

});

