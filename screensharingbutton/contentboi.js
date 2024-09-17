document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerHTML = '📺'; // TV emoji
    button.style.position = 'fixed';
    button.style.bottom = '0';
    button.style.left = '0';
    button.style.fontSize = '24px';
    button.style.padding = '10px';
    button.style.borderRadius = '50%';
    button.style.border = 'none';
    button.style.backgroundColor = '#f8f8f8';
    document.body.appendChild(button);
    button.addEventListener('click', function() {
        surflyExtension.surflySession.apiRequest({ cmd: "start_screensharing" });
    });
});