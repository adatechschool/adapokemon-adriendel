import './style.css'

// je stocke mes pokemons ici pour pouvoir les utiliser partout
let pokemons = []

// je construis toute la page HTML ici
document.querySelector('#app').innerHTML = `
  <header>
    <div class="header-inner">
      <div class="ball"></div>
      <span class="logo">Pokedex JS</span>
    </div>
    <nav class="tabs">
      <button class="tab active" data-tab="etape1">
        Etape 1 <span class="lv">DEBUTANT</span>
      </button>
      <button class="tab" data-tab="etape2">
        Etape 2 <span class="lv">DEBUTANT</span>
      </button>
      <button class="tab" data-tab="etape3">
        Noms seulement <span class="lv">DEBUTANT</span>
      </button>
      <button class="tab" data-tab="etape4">
        Nom + Type <span class="lv">INTERMEDIAIRE</span>
      </button>
      <button class="tab" data-tab="etape5">
        Nom + Type + ATK <span class="lv">INTERMEDIAIRE</span>
      </button>
      <button class="tab" data-tab="etape6">
        Pokemons Feu <span class="lv">AVANCE</span>
      </button>
      <button class="tab" data-tab="etape7">
        Feu par ATK <span class="lv">AVANCE</span>
      </button>
    </nav>
  </header>

  <main>

    <!-- ETAPE 1 -->
    <div class="panel active" id="etape1">
      <div class="step-head">
        <div class="badge">ETAPE 1</div>
        <div>
          <div class="step-title">Afficher tous les Pokemons</div>
          <div class="step-sub">je fetch l'api et j'utilise une boucle <strong>for (let i = 0)</strong> pour afficher toutes les cartes</div>
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-title">ce que j'ai compris</div>
        <p>
          <strong>fetch()</strong> ca permet d'aller chercher des donnees sur internet.
          Comme ca prend du temps, j'utilise <strong>async/await</strong> pour attendre la reponse avant de continuer.
          Ensuite <strong>.json()</strong> transforme la reponse en vrai tableau javascript.
        </p>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js</span>
        </div>
        <pre><span class="cmt">// j'ai mis async pour pouvoir utiliser await dedans</span>
<span class="kw">async function</span> <span class="fn">chargerPokemons</span>() {

  <span class="cmt">// je vais chercher les donnees sur l'api</span>
  <span class="kw">const</span> <span class="var">reponse</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://calmcode.io/static/data/pokemon.json'</span>)

  <span class="cmt">// je transforme la reponse en tableau javascript</span>
  <span class="kw">const</span> <span class="var">pokemons</span> = <span class="kw">await</span> <span class="var">reponse</span>.<span class="met">json</span>()

  <span class="cmt">// je boucle sur tous les pokemons avec un index i</span>
  <span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> &lt; <span class="var">pokemons</span>.<span class="met">length</span>; <span class="var">i</span>++) {
    <span class="kw">const</span> <span class="var">pokemon</span> = <span class="var">pokemons</span>[<span class="var">i</span>]   <span class="cmt">// j'accede au pokemon via l'index</span>
    <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemon</span>)
  }
}

<span class="fn">chargerPokemons</span>()   <span class="cmt">// j'appelle ma fonction pour la lancer</span></pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">Tous les Pokemons</div>
        <div id="result-etape1"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

    <!-- ETAPE 2 -->
    <div class="panel" id="etape2">
      <div class="step-head">
        <div class="badge">ETAPE 2</div>
        <div>
          <div class="step-title">Afficher les noms - je passe a for...of</div>
          <div class="step-sub">j'ai refait ma boucle en passant de <code>for (let i = 0)</code> a <code>for (const pokemon of pokemons)</code></div>
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-title">pourquoi j'ai change ma boucle</div>
        <p>
          Avec <strong>for (let i = 0)</strong> je devais gerer l'index moi meme.
          Avec <strong>for...of</strong> j'ai directement le pokemon a chaque tour, c'est beaucoup plus simple.
        </p>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js - avant / apres</span>
        </div>
        <pre><span class="cmt">// avant - je devais gerer l'index moi meme</span>
<span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> &lt; <span class="var">pokemons</span>.<span class="met">length</span>; <span class="var">i</span>++) {
  <span class="kw">const</span> <span class="var">pokemon</span> = <span class="var">pokemons</span>[<span class="var">i</span>]
  <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemon</span>.<span class="met">name</span>)
}

<span class="cmt">// apres - beaucoup plus lisible</span>
<span class="kw">for</span> (<span class="kw">const</span> <span class="var">pokemon</span> <span class="kw">of</span> <span class="var">pokemons</span>) {
  <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemon</span>.<span class="met">name</span>)
}</pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">Noms de tous les Pokemons</div>
        <div id="result-etape2"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

    <!-- ETAPE 3 -->
    <div class="panel" id="etape3">
      <div class="step-head">
        <div class="badge slow">POUR LES DEBUTANTS</div>
        <div>
          <div class="step-title">Afficher tous les noms</div>
          <div class="step-sub">voici mon code complet du debut a la fin - juste les noms avec for...of</div>
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-title">mon code complet</div>
        <p>
          j'ai tout mis ensemble : <strong>fetch</strong> + <strong>async/await</strong> + <strong>for...of</strong>.
          Copiez ce code dans votre <strong>main.js</strong> et regardez le resultat dans le navigateur.
        </p>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js</span>
        </div>
        <pre><span class="kw">const</span> <span class="var">URL</span> = <span class="str">'https://calmcode.io/static/data/pokemon.json'</span>

<span class="kw">async function</span> <span class="fn">afficherNoms</span>() {
  <span class="kw">const</span> <span class="var">reponse</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="var">URL</span>)
  <span class="kw">const</span> <span class="var">pokemons</span> = <span class="kw">await</span> <span class="var">reponse</span>.<span class="met">json</span>()

  <span class="cmt">// pour chaque pokemon dans mon tableau...</span>
  <span class="kw">for</span> (<span class="kw">const</span> <span class="var">pokemon</span> <span class="kw">of</span> <span class="var">pokemons</span>) {
    <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemon</span>.<span class="met">name</span>)
  }
}

<span class="fn">afficherNoms</span>()</pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">tous les noms</div>
        <div id="result-etape3"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

    <!-- ETAPE 4 -->
    <div class="panel" id="etape4">
      <div class="step-head">
        <div class="badge slow">INTERMEDIAIRE</div>
        <div>
          <div class="step-title">Afficher le nom et le type</div>
          <div class="step-sub">j'accede a deux proprietes de mon objet pokemon : <strong>name</strong> et <strong>type</strong></div>
        </div>
      </div>

      <div class="info-box info-blue">
        <div class="info-box-title">ce que j'ai decouvert sur la structure de l'objet</div>
        <p>
          chaque pokemon c'est un objet avec plein de proprietes : <strong>name</strong>, <strong>type</strong>, <strong>hp</strong>, <strong>attack</strong>...
          j'y accede avec un point : <strong>pokemon.name</strong>, <strong>pokemon.type</strong>.
          et j'ai vu que <strong>type</strong> c'est un tableau, genre <em>["Fire", "flying"]</em>
        </p>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js</span>
        </div>
        <pre><span class="kw">async function</span> <span class="fn">afficherNomType</span>() {
  <span class="kw">const</span> <span class="var">reponse</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://calmcode.io/static/data/pokemon.json'</span>)
  <span class="kw">const</span> <span class="var">pokemons</span> = <span class="kw">await</span> <span class="var">reponse</span>.<span class="met">json</span>()

  <span class="kw">for</span> (<span class="kw">const</span> <span class="var">pokemon</span> <span class="kw">of</span> <span class="var">pokemons</span>) {
    <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemon</span>.<span class="met">name</span>, <span class="var">pokemon</span>.<span class="met">type</span>)
    <span class="cmt">//         ^ le nom      ^ le type (c'est un tableau)</span>
  }
}

<span class="fn">afficherNomType</span>()</pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">Nom + Type</div>
        <div id="result-etape4"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

    <!-- ETAPE 5 -->
    <div class="panel" id="etape5">
      <div class="step-head">
        <div class="badge slow">INTERMEDIAIRE</div>
        <div>
          <div class="step-title">Afficher le nom, le type et l'attaque</div>
          <div class="step-sub">j'ajoute juste <strong>pokemon.attack</strong> en plus</div>
        </div>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js</span>
        </div>
        <pre><span class="kw">async function</span> <span class="fn">afficherStats</span>() {
  <span class="kw">const</span> <span class="var">reponse</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://calmcode.io/static/data/pokemon.json'</span>)
  <span class="kw">const</span> <span class="var">pokemons</span> = <span class="kw">await</span> <span class="var">reponse</span>.<span class="met">json</span>()

  <span class="kw">for</span> (<span class="kw">const</span> <span class="var">pokemon</span> <span class="kw">of</span> <span class="var">pokemons</span>) {
    <span class="fn">console</span>.<span class="met">log</span>(
      <span class="var">pokemon</span>.<span class="met">name</span>,       <span class="cmt">// ex: "Charmander"</span>
      <span class="var">pokemon</span>.<span class="met">type</span>,       <span class="cmt">// ex: ["Fire"]</span>
      <span class="var">pokemon</span>.<span class="met">attack</span>      <span class="cmt">// ex: 52</span>
    )
  }
}

<span class="fn">afficherStats</span>()</pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">Nom + Type + Attaque</div>
        <div id="result-etape5"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

    <!-- ETAPE 6 -->
    <div class="panel" id="etape6">
      <div class="step-head">
        <div class="badge adv">AVANCE</div>
        <div>
          <div class="step-title">Pokemons de type Feu seulement</div>
          <div class="step-sub">j'utilise <strong>.filter()</strong> pour ne garder que les pokemons feu, avec <strong>.includes()</strong> pour tester le tableau de types</div>
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-title">comment j'ai trouve .filter() et .includes()</div>
        <p>
          <strong>.filter()</strong> ca retourne un nouveau tableau avec seulement les elements qui passent ma condition.
          et comme <strong>type</strong> c'est un tableau, j'utilise <strong>.includes()</strong> pour tester si "Fire" est dedans.
          genre <em>["Fire", "Flying"].includes("Fire")</em> ca retourne <em>true</em>.
        </p>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js</span>
        </div>
        <pre><span class="kw">async function</span> <span class="fn">afficherFeu</span>() {
  <span class="kw">const</span> <span class="var">reponse</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://calmcode.io/static/data/pokemon.json'</span>)
  <span class="kw">const</span> <span class="var">pokemons</span> = <span class="kw">await</span> <span class="var">reponse</span>.<span class="met">json</span>()

  <span class="cmt">// .filter() me retourne un nouveau tableau - seulement les feu</span>
  <span class="kw">const</span> <span class="var">pokemonsFeu</span> = <span class="var">pokemons</span>.<span class="met">filter</span>(<span class="var">pokemon</span> => {
    <span class="kw">return</span> <span class="var">pokemon</span>.<span class="met">type</span>.<span class="met">includes</span>(<span class="str">'Fire'</span>)
    <span class="cmt">//      ^ mon tableau de types   ^ est-ce que Fire est dedans ?</span>
  })

  <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemonsFeu</span>)
}

<span class="fn">afficherFeu</span>()</pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">Pokemons de type Feu</div>
        <div id="result-etape6"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

    <!-- ETAPE 7 -->
    <div class="panel" id="etape7">
      <div class="step-head">
        <div class="badge adv">AVANCE</div>
        <div>
          <div class="step-title">Pokemons Feu tries par attaque</div>
          <div class="step-sub">j'enchaine <strong>.filter()</strong> et <strong>.sort()</strong> pour avoir le classement du plus fort au plus faible</div>
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-title">comment fonctionne .sort()</div>
        <p>
          <strong>.sort((a, b) => b.attack - a.attack)</strong> trie par ordre decroissant.
          si le resultat est <strong>positif</strong>, b passe avant a. si <strong>negatif</strong>, a reste en premier.
          le truc cool c'est qu'on peut enchainer directement : <strong>.filter(...).sort(...)</strong>
        </p>
      </div>

      <div class="code-wrap">
        <div class="code-top">
          <div class="dots"><span></span><span></span><span></span></div>
          <span class="code-label">main.js</span>
        </div>
        <pre><span class="kw">async function</span> <span class="fn">feuParAttaque</span>() {
  <span class="kw">const</span> <span class="var">reponse</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://calmcode.io/static/data/pokemon.json'</span>)
  <span class="kw">const</span> <span class="var">pokemons</span> = <span class="kw">await</span> <span class="var">reponse</span>.<span class="met">json</span>()

  <span class="cmt">// j'enchaine filter puis sort</span>
  <span class="kw">const</span> <span class="var">resultat</span> = <span class="var">pokemons</span>
    .<span class="met">filter</span>(<span class="var">pokemon</span> => <span class="var">pokemon</span>.<span class="met">type</span>.<span class="met">includes</span>(<span class="str">'Fire'</span>))   <span class="cmt">// 1. je garde les feu</span>
    .<span class="met">sort</span>((<span class="var">a</span>, <span class="var">b</span>) => <span class="var">b</span>.<span class="met">attack</span> - <span class="var">a</span>.<span class="met">attack</span>)            <span class="cmt">// 2. je trie par attaque decroissante</span>

  <span class="kw">for</span> (<span class="kw">const</span> <span class="var">pokemon</span> <span class="kw">of</span> <span class="var">resultat</span>) {
    <span class="fn">console</span>.<span class="met">log</span>(<span class="var">pokemon</span>.<span class="met">name</span>, <span class="str">'ATK:'</span>, <span class="var">pokemon</span>.<span class="met">attack</span>)
  }
}

<span class="fn">feuParAttaque</span>()</pre>
      </div>

      <div class="divider">resultat</div>
      <div class="results">
        <div class="results-title">classement - pokemons feu par attaque</div>
        <div id="result-etape7"><div class="loading"><div class="spin"></div> Chargement...</div></div>
      </div>
    </div>

  </main>
`

// navigation par onglets
function initTabs() {
  const tabs = document.querySelectorAll('.tab')
  const panels = document.querySelectorAll('.panel')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'))
      panels.forEach(p => p.classList.remove('active'))
      tab.classList.add('active')
      document.getElementById(tab.dataset.tab).classList.add('active')
    })
  })
}

function getSprite(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function typeBadge(t) {
  return `<span class="type type-${t.toLowerCase()}">${t}</span>`
}

// je charge les pokemons une seule fois pour tout le monde
async function chargerPokemons() {
  const reponse = await fetch('https://calmcode.io/static/data/pokemon.json')
  pokemons = await reponse.json()
}

// etape 1 - toutes les cartes avec for (let i = 0)
function afficherEtape1() {
  const container = document.getElementById('result-etape1')
  let html = '<div class="grid">'

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i]
    const types = pokemon.type.map(t => typeBadge(t)).join('')
    html += `
      <div class="poke-card">
        <img src="${getSprite(i + 1)}" alt="${pokemon.name}" loading="lazy">
        <div class="poke-no">#${String(i + 1).padStart(3, '0')}</div>
        <div class="poke-name">${pokemon.name}</div>
        <div class="poke-types">${types}</div>
        <div class="poke-stats">
          <div class="stat"><div class="st-val">${pokemon.hp}</div><div class="st-lbl">HP</div></div>
          <div class="stat"><div class="st-val">${pokemon.attack}</div><div class="st-lbl">ATK</div></div>
          <div class="stat"><div class="st-val">${pokemon.defense}</div><div class="st-lbl">DEF</div></div>
        </div>
      </div>`
  }

  html += '</div>'
  container.innerHTML = html
}

// etape 2 - noms avec for...of
function afficherEtape2() {
  const container = document.getElementById('result-etape2')
  let html = '<div class="chips">'

  for (const pokemon of pokemons) {
    html += `<span class="chip">${pokemon.name}</span>`
  }

  html += '</div>'
  container.innerHTML = html
}

// etape 3 - pareil, code complet pour les debutants
function afficherEtape3() {
  const container = document.getElementById('result-etape3')
  let html = '<div class="chips">'

  for (const pokemon of pokemons) {
    html += `<span class="chip">${pokemon.name}</span>`
  }

  html += '</div>'
  container.innerHTML = html
}

// etape 4 - nom + type
function afficherEtape4() {
  const container = document.getElementById('result-etape4')
  let html = '<table class="tbl"><thead><tr><th>Nom</th><th>Type(s)</th></tr></thead><tbody>'

  for (const pokemon of pokemons) {
    const types = pokemon.type.map(t => typeBadge(t)).join(' ')
    html += `<tr>
      <td class="name-col">${pokemon.name}</td>
      <td>${types}</td>
    </tr>`
  }

  html += '</tbody></table>'
  container.innerHTML = html
}

// etape 5 - nom + type + attaque
function afficherEtape5() {
  const container = document.getElementById('result-etape5')
  let html = '<table class="tbl"><thead><tr><th>Nom</th><th>Type(s)</th><th>Attaque</th></tr></thead><tbody>'

  for (const pokemon of pokemons) {
    const types = pokemon.type.map(t => typeBadge(t)).join(' ')
    html += `<tr>
      <td class="name-col">${pokemon.name}</td>
      <td>${types}</td>
      <td style="color:var(--yellow);font-weight:800;font-size:15px">${pokemon.attack}</td>
    </tr>`
  }

  html += '</tbody></table>'
  container.innerHTML = html
}

// etape 6 - pokemons de type feu avec .filter()
function afficherEtape6() {
  const container = document.getElementById('result-etape6')

  const pokemonsFeu = pokemons.filter(pokemon => {
    return pokemon.type.includes('Fire')
  })

  let html = `<p style="color:var(--muted);font-size:13px;margin-bottom:16px">
    ${pokemonsFeu.length} pokemons de type feu trouves sur ${pokemons.length}
  </p><div class="grid">`

  for (let i = 0; i < pokemonsFeu.length; i++) {
    const pokemon = pokemonsFeu[i]
    const realIndex = pokemons.findIndex(p => p.name === pokemon.name)
    const types = pokemon.type.map(t => typeBadge(t)).join('')
    html += `
      <div class="poke-card">
        <img src="${getSprite(realIndex + 1)}" alt="${pokemon.name}" loading="lazy">
        <div class="poke-name">${pokemon.name}</div>
        <div class="poke-types">${types}</div>
        <div class="poke-stats">
          <div class="stat"><div class="st-val">${pokemon.hp}</div><div class="st-lbl">HP</div></div>
          <div class="stat"><div class="st-val">${pokemon.attack}</div><div class="st-lbl">ATK</div></div>
          <div class="stat"><div class="st-val">${pokemon.defense}</div><div class="st-lbl">DEF</div></div>
        </div>
      </div>`
  }

  html += '</div>'
  container.innerHTML = html
}

// etape 7 - pokemons feu tries par attaque avec .filter() + .sort()
function afficherEtape7() {
  const container = document.getElementById('result-etape7')

  const resultat = pokemons
    .filter(pokemon => pokemon.type.includes('Fire'))
    .sort((a, b) => b.attack - a.attack)

  const maxAtk = resultat[0]?.attack || 1

  let html = '<div class="rank-list">'

  for (let i = 0; i < resultat.length; i++) {
    const pokemon = resultat[i]
    const realIndex = pokemons.findIndex(p => p.name === pokemon.name)
    const types = pokemon.type.map(t => typeBadge(t)).join(' ')
    const pct = Math.round((pokemon.attack / maxAtk) * 100)

    let rankClass = ''
    let rankLabel = i + 1
    if (i === 0) { rankClass = 'g'; rankLabel = '1' }
    if (i === 1) { rankClass = 's'; rankLabel = '2' }
    if (i === 2) { rankClass = 'b'; rankLabel = '3' }

    html += `
      <div class="rank-row">
        <div class="rank-n ${rankClass}">${rankLabel}</div>
        <img src="${getSprite(realIndex + 1)}" alt="${pokemon.name}" loading="lazy">
        <div class="rank-info">
          <div class="rank-name">${pokemon.name}</div>
          <div class="rank-types">${types}</div>
          <div class="bar-wrap"><div class="bar" style="width:${pct}%"></div></div>
        </div>
        <div class="rank-atk">
          <div class="rank-atk-val">${pokemon.attack}</div>
          <div class="rank-atk-lbl">attaque</div>
        </div>
      </div>`
  }

  html += '</div>'
  container.innerHTML = html
}

// initialisation
async function init() {
  initTabs()

  try {
    await chargerPokemons()
    afficherEtape1()
    afficherEtape2()
    afficherEtape3()
    afficherEtape4()
    afficherEtape5()
    afficherEtape6()
    afficherEtape7()
  } catch (erreur) {
    console.error('erreur lors du chargement :', erreur)
    document.getElementById('result-etape1').innerHTML =
      `<div style="color:#ef5350;background:rgba(239,83,80,0.1);border:1px solid rgba(239,83,80,0.3);border-radius:8px;padding:14px">
        impossible de charger l'api : ${erreur.message}
      </div>`
  }
}

init()
