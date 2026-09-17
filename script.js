// Tab Switching Logic
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes(tabId));
    if (targetBtn) targetBtn.classList.add('active');

    const targetContent = document.getElementById('tab-' + tabId);
    if (targetContent) targetContent.classList.add('active');
}

// FAQ Accordion Logic
function toggleFaq(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));

    if (!isActive) {
        item.classList.add('active');
    }
}
