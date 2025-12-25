function updateCounter() {
    const inputArea = document.getElementById('inputName');
    const charCount = document.getElementById('charCount');
    const counterArea = document.getElementById('counterArea');
    
    const length = inputArea.value.length;
    charCount.innerText = length;
    
    if (length > 50) {
        counterArea.classList.add('limit-over');
    } else {
        counterArea.classList.remove('limit-over');
    }
}

function convertAndCopy() {
    const inputArea = document.getElementById('inputName');
    const text = inputArea.value;

    if (!text) {
        alert('名前を入力してください');
        return;
    }

    const lsep = '\u2028';
    const converted = text.replace(/\r?\n/g, lsep);

    const previewContainer = document.getElementById('previewContainer');
    const previewText = document.getElementById('previewText');
    previewText.innerText = converted;
    previewContainer.classList.remove('hidden');

    copyToClipboard(converted);
}

function copyToClipboard(str) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(str).then(showToast);
    } else {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showToast();
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}