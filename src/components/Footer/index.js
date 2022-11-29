export const Footer = () => {
    const footer = document.createElement('footer')
    footer.innerHTML = `
        <div class="container">
            <div class="footer__content">
            Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
            </div>
        </div>
    `
    return footer
}