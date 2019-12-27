(() => {
  if (!window.location.hash.startsWith('#gacha')) {
    alert('Please go to the Draw screen');
    return
  }
  const bannersCount = window.Game.view.gacha_model.attributes.legend.lineup.length;

  const crystals = parseInt(window.Game.view.gacha_model.attributes.stone_num, 10);
  const singleTickets = parseInt(window.Game.view.gacha_model.attributes.legend.lineup[bannersCount-1].ticket_num, 10);
  const grandTickets = parseInt(window.Game.view.gacha_model.attributes.legend.lineup[bannersCount-2].ticket_num, 10);

  window.open(`https://eurea.github.io/?crystals=${crystals}&singleTickets=${singleTickets}&grandTickets=${grandTickets}`, '_newtab');
})();
