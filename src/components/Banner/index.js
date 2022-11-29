export const Banner = () => {
    const banner = document.createElement('section')
    banner.classList.add('banner')
    banner.setAttribute('id', 'banner')
    banner.innerHTML = `
        <div class="container">
            <div class="banner__content">
                <h1>Přijď to ochutnat!</h1>
                <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
            </div>
        </div>
    `
    return banner
}