function generateQRCode() {
    const url = document.getElementById("urlInput").value;
    const qrCodeContainer = document.getElementById("qrCode");
    qrCodeContainer.innerHTML = ""; 

    if (url) {
        // Crear el QR code con la imagen
        const qr = new QRious({
            element: document.createElement('canvas'), 
            value: url, 
            size: 190, 
            level: 'H',
            foreground: '#105E85',
            background: '#FFFFFF' 
        });

        // Agregar el logo encima del QR
        const ctx = qr.canvas.getContext('2d');
        const img = new Image();
        img.src = 'test.png'; // Usa la imgagen que desees (local o en línea)
        img.onload = function() {
            const x = (qr.size - 50) / 2;
            const y = (qr.size - 50) / 2;
            ctx.drawImage(img, x, y, 50, 50); 
            qrCodeContainer.appendChild(qr.canvas); 
        };
    } else {
        alert("Por favor, introduce un enlace válido.");
    }
}

