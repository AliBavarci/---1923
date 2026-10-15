// سال جاری در فوتر
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().toLocaleDateString('fa-IR', { year: 'numeric' });

  // فعال‌سازی لینک منو بر اساس صفحه
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // شمارش معکوس ساده تا انتخابات (نمونه، تاریخ قابل تغییر)
  const target = new Date('2026-06-19T08:00:00');
  const el = document.getElementById('countdown');
  if (el) {
    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) { el.textContent = 'روز انتخابات فرا رسید'; return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      el.textContent = `${d} روز و ${h} ساعت و ${m} دقیقه تا انتخابات`;
    };
    tick();
    setInterval(tick, 60000);
  }
});