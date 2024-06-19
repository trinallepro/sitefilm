document.addEventListener('DOMContentLoaded', () => {
    const backgroundColorPicker = document.getElementById('background-color');
    const textColorPicker = document.getElementById('text-color');

    const savedBackgroundColor = localStorage.getItem('background-color');
    const savedTextColor = localStorage.getItem('text-color');

    if (savedBackgroundColor) {
        document.body.style.setProperty('--background-color', savedBackgroundColor);
        if (backgroundColorPicker) {
            backgroundColorPicker.value = savedBackgroundColor;
        }
    }

    if (savedTextColor) {
        document.body.style.setProperty('--text-color', savedTextColor);
        if (textColorPicker) {
            textColorPicker.value = savedTextColor;
        }
    }

    if (backgroundColorPicker) {
        backgroundColorPicker.addEventListener('input', (event) => {
            const color = event.target.value;
            document.body.style.setProperty('--background-color', color);
            localStorage.setItem('background-color', color);
        });
    }

    if (textColorPicker) {
        textColorPicker.addEventListener('input', (event) => {
            const color = event.target.value;
            document.body.style.setProperty('--text-color', color);
            localStorage.setItem('text-color', color);
        });
    }
});
