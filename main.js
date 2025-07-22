// === INTERACTIVE HOMEPAGE BACKGROUND ===
document.addEventListener('DOMContentLoaded', function() {
  const vibeTiles = document.querySelectorAll('.vibe-tile');
  const bgSlices = document.querySelectorAll('.bg-slice');
  const bgRoot = document.querySelector('.interactive-bg');

  function clearBgState() {
    bgRoot.classList.remove('active');
    bgSlices.forEach(slice => {
      slice.classList.remove('expanded', 'dimmed');
    });
  }

  // Map .vibe-tile class to data-vibe
  const vibeMap = {
    beach: 'chillbeachvibes',
    city: 'cityhustle',
    mountain: 'mountainzen',
    artsy: 'artsyescape',
    history: 'historicalfeels'
  };

  vibeTiles.forEach(tile => {
    let vibe = null;
    for (const key in vibeMap) {
      if (tile.classList.contains(key)) {
        vibe = vibeMap[key];
        break;
      }
    }
    if (!vibe) return;
    tile.addEventListener('mouseenter', () => {
      bgRoot.classList.add('active');
      bgSlices.forEach(slice => {
        if (slice.dataset.vibe === vibe) {
          slice.classList.add('expanded');
          slice.classList.remove('dimmed');
        } else {
          slice.classList.remove('expanded');
          slice.classList.add('dimmed');
        }
      });
    });
    tile.addEventListener('mouseleave', clearBgState);
    tile.addEventListener('focus', () => {
      bgRoot.classList.add('active');
      bgSlices.forEach(slice => {
        if (slice.dataset.vibe === vibe) {
          slice.classList.add('expanded');
          slice.classList.remove('dimmed');
        } else {
          slice.classList.remove('expanded');
          slice.classList.add('dimmed');
        }
      });
    });
    tile.addEventListener('blur', clearBgState);
  });

  // Also allow mouseleave from the whole hero to clear
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mouseleave', clearBgState);
  }
});

// === HERO ANIMATIONS ===
// Soft fade-in animation on section load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.vibe-header, .destination, .hero-content, .about-hero').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('fade-in-up');
    }, 150 + i * 150);
  });

  // === Typewriter effect for homepage subheading ===
  if (document.body && document.body.classList.contains('home')) {
    const subheading = document.querySelector('.subheading');
    if (subheading) {
      const text = 'Pick a vibe to match your mood.';
      subheading.textContent = '';
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          subheading.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      }
      typeWriter();
    }
  }
});
