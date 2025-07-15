window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-5899C1DJM0');

function getNames() {
  const value = document.querySelector('#in_names').value.trim();
  return value.split(/[,\r\n]/g).map(v => v.trim()).filter(v => !!v);
}

function parseName(nameStr) {
  const weightRegex = /(\/\d+)/;
  const countRegex = /(\*\d+)/;
  const hasWeight = weightRegex.test(nameStr);
  const hasCount = countRegex.test(nameStr);
  const name = /^\s*([^\/*]+)?/.exec(nameStr)[1];
  const weight = hasWeight ? parseInt(weightRegex.exec(nameStr)[1].replace('/', '')) : 1;
  const count = hasCount ? parseInt(countRegex.exec(nameStr)[1].replace('*', '')) : 1;
  return {
    name,
    weight,
    count,
  };
}

async function getJujakInfos() {
  const jujakInfo = localStorage.getItem("jujakInfo");
  console.log(jujakInfo);
  if (!jujakInfo) {
    const new_jj = {
      sw: false,
      targetName: "",
      param: 1,
      revParam: 1,
      weightParam: 1,
      revWeightParam: 1,
      nerfParam: 1
    } 
    localStorage.setItem("jujakInfo", JSON.stringify(new_jj));
  } else {
    return JSON.parse(jujakInfo)
  }
  
}

function getReady() {
  getJujakInfos().then((jujakInfos) => {
    const { sw, targetName, param, revParam, weightParam, revWeightParam, nerfParam } = jujakInfos;
    const names = getNames();
    window.roullete.setMarbles(
      names,
      sw ? targetName : "",
      sw ? param: 1,
      sw ? revParam: 1,
      sw ? weightParam: 1,
      sw ? revWeightParam: 1,
      sw ? nerfParam : 1
    );
    ready = names.length > 0;
    localStorage.setItem('mbr_names', names.join(','));
    switch (winnerType) {
      case 'first':
        setWinnerRank(1);
        break;
      case 'last':
        const total = window.roullete.getCount();
        setWinnerRank(total);
        break;
    }
  })
}

function setWinnerRank(rank) {
  document.querySelector('#in_winningRank').value = rank;
  window.options.winningRank = rank - 1;
  window.roullete.setWinningRank(window.options.winningRank);

  if (winnerType === 'first') {
    document.querySelector('.btn-first-winner').classList.toggle('active', true);
    document.querySelector('.btn-last-winner').classList.toggle('active', false);
    document.querySelector('#in_winningRank').classList.toggle('active', false);
  } else if (winnerType === 'last') {
    document.querySelector('.btn-first-winner').classList.toggle('active', false);
    document.querySelector('.btn-last-winner').classList.toggle('active', true);
    document.querySelector('#in_winningRank').classList.toggle('active', false);
  } else if (winnerType === 'custom') {
    document.querySelector('.btn-first-winner').classList.toggle('active', false);
    document.querySelector('.btn-last-winner').classList.toggle('active', false);
    document.querySelector('#in_winningRank').classList.toggle('active', true);
  }
}


let ready = false;
let winnerType = 'first';

document.addEventListener('DOMContentLoaded', () => {
  initialize();
});

function initialize() {
  if (!window.roullete || !window.roullete.isReady) {
    console.log('does not loaded yet');
    setTimeout(initialize, 100);
    return;
  }
  console.log('initializing start');

  const savedNames = localStorage.getItem('mbr_names');
  if (savedNames) {
    document.querySelector('#in_names').value = savedNames;
  }
  document.querySelector('#in_names').addEventListener('input', () => {
    getReady();
  });

  document.querySelector('#in_names').addEventListener('blur', () => {
    const nameSource = getNames();
    const nameSet = new Set();
    const nameCounts = {};
    nameSource.forEach(nameSrc => {
      const name = parseName(nameSrc);
      const key = name.weight > 1 ? `${name.name}/${name.weight}` : name.name;
      if (!nameSet.has(key)) {
        nameSet.add(key);
        nameCounts[key] = 0;
      }
      nameCounts[key] += name.count;
    });
    const result = [];
    Object.keys(nameCounts).forEach(key => {
      if (nameCounts[key] > 1) {
        result.push(`${key}*${nameCounts[key]}`);
      } else {
        result.push(key);
      }
    });

    const oldValue = document.querySelector('#in_names').value;
    const newValue = result.join(',');

    if (oldValue !== newValue) {
      document.querySelector('#in_names').value = newValue;
      getReady();
    }
  });

  document.querySelector('#btnShuffle').addEventListener('click', () => {
    getReady();
  });

  document.querySelector('#btnStart').addEventListener('click', () => {
    if (!ready) return;
    gtag && gtag('event', 'start', {
      'event_category': 'roulette',
      'event_label': 'start',
      'value': window.roullete.getCount(),
    });
    window.roullete.start();
    document.querySelector('#settings').classList.add('hide');
    document.querySelector('#donate').classList.add('hide');
  });

  document.querySelector('#chkAutoRecording').addEventListener('change', (e) => {
    window.options.autoRecording = e.target.matches(':checked');
    window.roullete.setAutoRecording(window.options.autoRecording);
  });

  document.querySelector('#chkSkill').addEventListener('change', (e) => {
    window.options.useSkills = e.target.matches(':checked');
    window.roullete.setWinningRank(window.options.winningRank);
  });

  document.querySelector('#in_winningRank').addEventListener('change', (e) => {
    const v = parseInt(e.target.value, 10);
    winnerType = 'custom';
    setWinnerRank(isNaN(v) ? 0 : v);
  });

  document.querySelector('.btn-last-winner').addEventListener('click', () => {
    const total = window.roullete.getCount();
    winnerType = 'last';
    setWinnerRank(total);
  });
  document.querySelector('.btn-first-winner').addEventListener('click', () => {
    winnerType = 'first';
    setWinnerRank(1);
  });

  document.querySelector('#btnShake').addEventListener('click', () => {
    window.roullete.shake();
    gtag('event', 'shake', {
      'event_category': 'roulette',
      'event_label': 'shake',
      'value': 1,
    });
  });

  window.roullete.addEventListener('goal', () => {
    ready = false;
    setTimeout(() => {
      document.querySelector('#settings').classList.remove('hide');
      document.querySelector('#donate').classList.remove('hide');
    }, 3000);
  });
  window.roullete.addEventListener('shakeAvailableChanged', (e) => {
    document.querySelector('#inGame').classList.toggle('hide', !e.detail);
  });
  window.roullete.addEventListener('message', (e) => {
    simpleToast(e.detail);
  });

  document.querySelector('#btnShuffle').click();

  const maps = window.roullete.getMaps();
  const mapSelector = document.querySelector('#sltMap');
  maps.forEach((map) => {
    const option = document.createElement('option');
    option.value = map.index;
    option.innerHTML = map.title;
    option.setAttribute('data-trans', '');
    window.translateElement(option);
    mapSelector.append(option);
  });
  mapSelector.addEventListener('change', (e) => {
    const index = e.target.value;
    window.roullete.setMap(index);
  });

  const checkDonateButtonLoaded = () => {
    const btn = document.querySelector('span.bmc-btn-text');
    if (!btn) {
      setTimeout(checkDonateButtonLoaded, 100);
    } else {
      console.log('donation button has been loaded');
      btn.setAttribute('data-trans', '');
      window.translateElement(btn);
    }
  };
  setTimeout(checkDonateButtonLoaded, 100);

  const currentNotice = 1;
  const noticeKey = 'lastViewedNotification';

  const closeNotice = () => {
    document.querySelector('#notice').style.display = 'none';
    localStorage.setItem(noticeKey, currentNotice.toString());
  };

  const openNotice = () => {
    console.log('openNotice');
    document.querySelector('#notice').style.display = 'flex';
  };

  document.querySelector('#closeNotice').addEventListener('click', () => {
    closeNotice();
  });

  document.querySelector('#btnNotice').addEventListener('click', () => {
    openNotice();
  });

  function simpleToast(msg) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    if (window.translateElement) {
      console.log('try to translate');
      window.translateElement(toast);
    }

    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 1200);
  }

  const checkNotice = () => {
    const lastViewed = localStorage.getItem(noticeKey);
    console.log('lastViewed', lastViewed);
    if (lastViewed === null || Number(lastViewed) < currentNotice) {
      openNotice();
    }
  };

  checkNotice();


}

