sections = ['star_wars-section', 'consoles-section', 'diversos-section']
fetch('./assets/js/banco_dados.json')
  .then(function (response) {
    return response.text();
  })
  .then(function (responseText) {
    let products = JSON.parse(responseText)
    sections.forEach(section => {
      divSection = document.querySelector('.' + section);
      products.forEach(product => {
        if (product.section === section) {
          let a = document.createElement('a');
          a.href = ''
          a.setAttribute('aria-labelledby', `product${product.id}`)
          a.innerHTML = `<figure class="product">
                              <img src="./assets/img/${product.image}" alt="">
                              <figcaption id="product${product.id}">
                                <span class="hideVisually">Produto</span> ${product.descricao} <span class="hideVisually">por ${product.preco}</span>
                              </figcaption>
                              <p class="preco">${product.preco}</p>
                              <a href="">Ver produto</a>
                        </figure>`
          divSection.appendChild(a)
        }
      });
    });
  }).then(function () {
    let productsElements = document.querySelectorAll('.product')

    function media_max_800(media) {
      if (query_max_800.matches) {
        // if screen size is smaller than 801px

        for (let i = 4; i < productsElements.length; i = i + 6) {
          productsElements[i].parentElement.classList.add('displayNone')
          productsElements[i+1].parentElement.classList.add('displayNone')
        }
      }
    }

    var query_max_800 = window.matchMedia("(max-width: 800px)")
    media_max_800(query_max_800)
    query_max_800.addEventListener('change', media_max_800)

    function media_min_801(media) {
      if (query_min_801.matches) {
        // if screen size is larger than 800px
        productsElements.forEach(element => {
          element.parentElement.classList.remove('displayNone')
        })
      }
    }

    var query_min_801 = window.matchMedia("(min-width: 801px)")
    media_min_801(query_min_801)
    query_min_801.addEventListener('change', media_min_801)
  });

