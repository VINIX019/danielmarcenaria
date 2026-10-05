(function () {
  'use strict';

  // Número no formato internacional, sem + ou espaços
  var WHATSAPP = '5511973191875';

  var chips = document.querySelectorAll('.chip');
  var waLinks = document.querySelectorAll('.js-wa');
  var label = document.getElementById('selected-label');

  function buildLink(phrase) {
    var msg = 'Olá! Vi o site da Daniel Marcenaria e gostaria de um orçamento para ' + phrase + '.';
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
  }

  function select(chip) {
    chips.forEach(function (c) {
      c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
    });
    label.textContent = chip.dataset.label;
    var href = buildLink(chip.dataset.phrase);
    waLinks.forEach(function (a) {
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () { select(chip); });
  });

  select(chips[0]);
})();