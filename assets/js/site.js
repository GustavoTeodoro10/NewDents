/* ==========================================================================
   New Dents Mauá - comportamento
   JS mínimo: menu mobile, cabeçalho, revelar ao rolar, vídeo do Hero,
   botão flutuante e rastreio de cliques (GoatCounter). Nada aqui é necessário
   para o link do WhatsApp funcionar.
   ========================================================================== */
(function () {
  'use strict';

  window.__siteReady = true;   // avisa o script de segurança do <head> que o JS carregou

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Rastreio de CTAs (GoatCounter) -------------------------------------
     Um único listener. Cada CTA tem data-gc-event="cta-..." (ver README).
     Protegido: se o GoatCounter não carregar (adblock), o link segue normal. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-gc-event]');
    if (!el) return;
    var name = el.getAttribute('data-gc-event');
    if (window.goatcounter && window.goatcounter.count) {
      try {
        window.goatcounter.count({ path: name, title: name, event: true });
      } catch (err) { /* o rastreio nunca bloqueia o link */ }
    }
  });

  /* ---- Menu mobile (abre/fecha por classe; o CSS cuida da transição) ------- */
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      menuBtn.querySelector('i').className = open ? 'ph ph-x text-3xl' : 'ph ph-list text-3xl';
    };
    menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('is-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---- Cabeçalho: linha só depois que a página começa a rolar ------------- */
  var header = document.querySelector('.site-header');
  var sentinel = document.getElementById('top-sentinel');
  if (header && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle('is-stuck', !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* ---- Revelar ao rolar --------------------------------------------------- */
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- WhatsApp flutuante: some enquanto um CTA igual está na tela --------- */
  var float = document.querySelector('.wa-float');
  var anchors = [
    document.querySelector('#inicio .btn-primary'),
    document.querySelector('#contato .btn')
  ].filter(Boolean);
  if (float && anchors.length && 'IntersectionObserver' in window) {
    var seen = new Set();
    var sync = function () { float.classList.toggle('is-away', seen.size > 0); };
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { seen.add(en.target); } else { seen.delete(en.target); }
      });
      sync();
    }, { threshold: 0.6 });
    anchors.forEach(function (el) { fio.observe(el); });
  }

  /* ---- Vídeo do Hero: toca uma vez, mudo, e repousa no último quadro ------ */
  var video = document.getElementById('hero-video');
  var toggle = document.getElementById('hero-toggle');
  if (video && toggle) {
    var icon = toggle.querySelector('i');
    var syncVideo = function () {
      var playing = !video.paused && !video.ended;
      toggle.setAttribute('aria-label', playing ? 'Pausar animação' : 'Reproduzir animação');
      icon.className = playing ? 'ph-fill ph-pause' : 'ph-fill ph-play';
    };
    toggle.addEventListener('click', function () {
      if (video.ended) { video.currentTime = 0; }
      if (video.paused || video.ended) { video.play().catch(function () {}); } else { video.pause(); }
    });
    ['play', 'pause', 'ended'].forEach(function (ev) { video.addEventListener(ev, syncVideo); });
    if (reduceMotion) { video.removeAttribute('autoplay'); video.pause(); }
    syncVideo();
  }
})();
