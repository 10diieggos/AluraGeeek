let banner_image = document.querySelector('.banner-image');

// //max-width: 767px

function imageMedia360(media) {
  if (media360.matches) {
    banner_image.src = './assets/img/Hero_360X192.svg'
  }
}

var media360 = window.matchMedia("(max-width: 767px)")
imageMedia360(media360)
media360.addEventListener('change', imageMedia360)

//(min-width: 768px) and (max-width: 991px)

function imageMedia768(media) {
  if (media.matches) {
    banner_image.src = './assets/img/Hero_768X352.svg'
  }
}

var media = window.matchMedia("(min-width: 768px) and (max-width: 991px)")
imageMedia768(media)
media.addEventListener('change', imageMedia768)

// min-width: 992px

function imageMedia992(media) {
  if (media992.matches) {
    banner_image.src = './assets/img/Hero_1440X467.svg'
  }
}

var media992 = window.matchMedia("(min-width: 992px)")
imageMedia992(media992)
media992.addEventListener('change', imageMedia992)