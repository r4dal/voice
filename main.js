/**
 * main.js — Charles Henry, Comédien de doublage
 * Ce fichier lit config.js et construit la page automatiquement.
 * Vous n'avez pas besoin de modifier ce fichier.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Appliquer les couleurs CSS depuis config ── */
  const r = document.documentElement.style;
  const c = CONFIG.couleurs;
  r.setProperty('--creme',      c.creme);
  r.setProperty('--brun-clair', c.brunClair);
  r.setProperty('--or',         c.or);
  r.setProperty('--encre',      c.encre);
  r.setProperty('--gris',       c.gris);

  /* ── Titre de l'onglet ── */
  document.title = `${CONFIG.prenom} ${CONFIG.nom} — ${CONFIG.metier}`;

  /* ── Navigation : logo ── */
  document.getElementById('nav-logo').innerHTML =
    `${CONFIG.prenom} <span>${CONFIG.nom}</span>`;

  /* ── Hero ── */
  document.getElementById('hero-metier').textContent  = CONFIG.metier;
  document.getElementById('hero-prenom').textContent  = CONFIG.prenom;
  document.getElementById('hero-nom').textContent     = CONFIG.nom;
  document.getElementById('hero-slogan').textContent  = CONFIG.slogan;
  document.getElementById('hero-desc').textContent    = CONFIG.description;

  /* ── Photo principale ── */
  const heroImgCol = document.getElementById('hero-image-col');
  if (CONFIG.photos.principale) {
    heroImgCol.innerHTML = `
      <img src="${CONFIG.photos.principale}" alt="${CONFIG.photos.altPrincipale}" />
      <div class="hero-overlay"></div>`;
  } else {
    heroImgCol.innerHTML = `
      <div class="hero-image-placeholder">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        <p>Votre photo ici</p>
      </div>
      <div class="hero-overlay"></div>`;
  }

  /* ── Stats ── */
  const statsEl = document.getElementById('stats-grille');
  statsEl.style.gridTemplateColumns = `repeat(${CONFIG.stats.length}, 1fr)`;
  statsEl.innerHTML = CONFIG.stats.map(s => `
    <div class="stat-item reveal">
      <div class="stat-nombre">${s.nombre}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  /* ── Services ── */
  document.getElementById('services-grille').innerHTML =
    CONFIG.services.map(s => `
      <div class="service-carte reveal">
        <div class="service-icone">${s.icone}</div>
        <h3 class="service-nom">${s.nom}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>`).join('');

  /* ── Démos audio ── */
  const demoListe = document.getElementById('demo-liste');
  if (CONFIG.demos.length === 0) {
    document.getElementById('demos').style.display = 'none';
  } else {
    demoListe.innerHTML = CONFIG.demos.map(d => `
      <div class="demo-item reveal">
        <div class="demo-meta">
          <div class="demo-titre">${d.titre}</div>
          <div class="demo-type">${d.type}</div>
        </div>
        <audio controls preload="none">
          <source src="${d.src}" type="audio/mpeg" />
          Votre navigateur ne supporte pas l'audio.
        </audio>
      </div>`).join('');
  }

  /* ── Vidéos ── */
  const videoSection = document.getElementById('videos');
  const videoListe   = document.getElementById('video-liste');
  if (!CONFIG.videos || CONFIG.videos.length === 0) {
    videoSection.style.display = 'none';
  } else {
    videoListe.innerHTML = CONFIG.videos.map(v => `
      <div class="video-item reveal">
        <video controls preload="none" ${v.poster ? `poster="${v.poster}"` : ''}>
          <source src="${v.src}" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div class="video-meta">
          <div class="video-titre">${v.titre}</div>
          <div class="video-type">${v.type}</div>
        </div>
      </div>`).join('');
  }

  /* ── À propos : texte ── */
  document.getElementById('apropos-bio1').textContent = CONFIG.apropos.bio1;
  document.getElementById('apropos-bio2').textContent = CONFIG.apropos.bio2;
  document.getElementById('apropos-qualites').innerHTML =
    CONFIG.apropos.qualites.map(q => `<div class="qualite">${q}</div>`).join('');

  /* ── À propos : photo ── */
  const aproposImg = document.getElementById('apropos-image');
  if (CONFIG.photos.apropos) {
    aproposImg.innerHTML = `<img src="${CONFIG.photos.apropos}" alt="${CONFIG.photos.altApropos}" />`;
  } else {
    aproposImg.innerHTML = `
      <div class="apropos-image-placeholder">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(197,164,106,0.3)" stroke-width="0.8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 6a2 2 0 100 4 2 2 0 000-4zM12 14c-3 0-5 1.5-5 3v1h10v-1c0-1.5-2-3-5-3z"/>
        </svg>
      </div>`;
  }

  /* ── Contact ── */
  document.getElementById('contact-intro').textContent    = CONFIG.contact.messageIntro;
  document.getElementById('contact-email-lien').href      = `mailto:${CONFIG.contact.email}`;
  document.getElementById('contact-email-lien').textContent = CONFIG.contact.email;
  document.getElementById('contact-infos').innerHTML =
    `${CONFIG.contact.telephone}<br>${CONFIG.contact.localisation}`;

  /* ── Réseaux sociaux ── */
  document.getElementById('reseaux').innerHTML =
    CONFIG.reseaux.map(r => `
      <a href="${r.url}" class="reseau-lien" target="_blank" rel="noopener">${r.label}</a>
    `).join('');

  /* ── Footer ── */
  const annee = new Date().getFullYear();
  document.getElementById('footer-copy').textContent =
    `© ${annee} ${CONFIG.prenom} ${CONFIG.nom} — Tous droits réservés`;

  /* ── Navigation : lien vidéos visible seulement si vidéos présentes ── */
  const navVideos = document.getElementById('nav-videos');
  if (!CONFIG.videos || CONFIG.videos.length === 0) {
    navVideos.style.display = 'none';
  }

  /* ── Animations au défilement ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
