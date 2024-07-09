document.addEventListener('DOMContentLoaded', () => {
    const entradaTexto = document.getElementById('entrada_texto');
    const resultadoTexto = document.getElementById('resultado_texto');
    const botonEncriptar = document.getElementById('boton_encriptar');
    const botonDesencriptar = document.getElementById('boton_desencriptar');
    const botonCopiar = document.getElementById('boton_copiar');
    const imagenMensaje = document.getElementById('imagen_mensaje');
    const letraBold = document.querySelector('.letra_bold');
    const letraRegular = document.querySelector('.letra_regular');

    const reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const reglasDesencriptacion = Object.fromEntries(
        Object.entries(reglasEncriptacion).map(([key, value]) => [value, key])
    );

    const encriptar = (text) => {
        return text.replace(/[eioua]/g, (match) => reglasEncriptacion[match]);
    };

    const desencriptar = (text) => {
        return text.replace(/enter|imes|ai|ober|ufat/g, (match) => reglasDesencriptacion[match]);
    };

    const actualizarSeccionResultado = (text) => {
        resultadoTexto.textContent = text;
        imagenMensaje.style.display = 'none';
        letraBold.style.display = 'none';
        letraRegular.style.display = 'none';
        resultadoTexto.style.display = 'block';
        botonCopiar.style.display = 'block';
    };

    botonEncriptar.addEventListener('click', () => {
        const text = entradaTexto.value;
        if (text) {
            actualizarSeccionResultado(encriptar(text));
        }
    });

    botonDesencriptar.addEventListener('click', () => {
        const text = entradaTexto.value;
        if (text) {
            actualizarSeccionResultado(desencriptar(text));
        }
    });

    botonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resultadoTexto.textContent).then(() => {
            alert('Texto copiado al portapapeles');
        });
    });
});
    