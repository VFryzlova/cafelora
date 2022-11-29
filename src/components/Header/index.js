export const Header = () => {
    const header = document.createElement('header')
    header.innerHTML = `
    <div class="header__content container">
        <div class="site-logo"></div>

        <div class="navigation">
          <button class="nav-btn"></button>
          <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>

      </div>
    `
    const rolloutNav = header.querySelector('.rollout-nav'),
    navBtn = header.querySelector('.nav-btn'),
    navigation = header.querySelector('.rollout-nav')

    navigation.addEventListener('click', () => {
      rolloutNav.classList.add('nav-closed')
    })

    navBtn.addEventListener('click', () => {
      rolloutNav.classList.toggle('nav-closed')
    })

    return header
}