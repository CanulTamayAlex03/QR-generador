function generateQRCode() {
    const url = document.getElementById("urlInput").value;
    const qrCodeContainer = document.getElementById("qrCode");
    const downloadLink = document.getElementById("downloadLink");
    qrCodeContainer.innerHTML = "";
    downloadLink.style.display = "none";

    if (url) {
        const qr = new QRious({
            element: document.createElement('canvas'),
            value: url,
            size: 190,
            level: 'H',
            foreground: '#1E1F6C',
            background: '#FFFFFF'
        });

        qrCodeContainer.appendChild(qr.canvas);

        const ctx = qr.canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = "anonymous"; // Habilitar CORS para recursos externos
        img.src = 'https://images.squarespace-cdn.com/content/v1/62a42c7be2e856044c6d9bde/1658211947435-HE66YCONE25811RCPQJQ/clipboard.png'; // Usa una URL pública

        img.onload = function() {
            const x = (qr.size - 55) / 2;
            const y = (qr.size - 55) / 2;
            ctx.drawImage(img, x, y, 50, 50);

            // Crear el enlace de descarga
            qr.canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.style.display = "inline-block";
            }, "image/png");
        };

        img.onerror = function() {
            console.error("Error al cargar la imagen.");
        };
    } else {
        alert("Por favor, introduce un enlace válido.");
    }
}
