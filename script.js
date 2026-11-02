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

// Countdown Timer & Dynamic Pricing Logic
(function(){
  var END = new Date('2026-12-31T23:59:59+08:00').getTime(); // Philippine time
  
  function pad(n){ return String(n).padStart(2, '0'); }
  
  function tick(){
    var left = END - Date.now();
    var live = left > 0;
    
    // Toggle prices
    document.querySelectorAll('[data-now]').forEach(function(e) { e.textContent = live ? '₱299' : '₱699'; });
    
    // Toggle strikethrough, promo elements, and top strip visibility
    document.querySelectorAll('[data-strike], [data-promo-only], #promoStrip').forEach(function(e) { 
        e.style.display = live ? '' : 'none'; 
    });
    
    // Update timer text
    if (live) {
      var d = Math.floor(left / 864e5);
      var h = Math.floor((left % 864e5) / 36e5);
      var m = Math.floor((left % 36e5) / 6e4);
      var s = Math.floor((left % 6e4) / 1e3);
      var t = d + 'd ' + pad(h) + 'h ' + pad(m) + 'm ' + pad(s) + 's';
      
      document.querySelectorAll('[data-timer]').forEach(function(e) { e.textContent = t; });
    }
  }
  
  tick(); 
  setInterval(tick, 1000);
})();
