function toggle() {
  if (
    window.innerWidth <= 1000 &&
    document.querySelectorAll('.toggle').length < 1
  ) {
    let div = document.createElement('div')
    div.className = 'toggle'

    const promoContainer = document.querySelector('.promo__container')
    promoContainer.append(div)

    div.innerHTML =
      '<div class="promo__langs"><button type="button" class="promo__langs-item active">RU</button><button type="button" class="promo__langs-item">KZ</button></div>'
  }
  if (window.innerWidth > 1000) {
    document.querySelector('.toggle').remove()
  }
}
window.addEventListener('resize', toggle)

document.addEventListener('DOMContentLoaded', toggle)
