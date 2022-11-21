      const scriptURL = 'https://script.google.com/macros/s/AKfycbylKoxEwwcelw9vghDI-PsNl8YHNVuIPpKWI2UdAbF5k4IhMchlZCg5XdVV0La3DIP6/exec';
      const form = document.forms['my-portfololio-contact'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.alert');
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        // ketika tombol submit di click
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            // tampilkan tombol kirim, dan hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            // reset formnya
            form.reset();
            console.log('Success!', response);
          })
          .catch(error => console.error('Error!', error.message))
      })