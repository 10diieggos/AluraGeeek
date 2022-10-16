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
          a.setAttribute('aria-labelledby',`product${product.id}`)
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
  });


/* star_wars-section */

/*<a href="" aria-labelledby="">
    <figure class="product">
    <img src="./assets/img/caneca-capacete.svg" alt="">
    <figcaption id="">Produto XYZ <span class="hideVisually">por R$60,00</span></figcaption>
    <p class="preco">R$ 60,00</p>
    <a href="">Ver produto</a>
  </figure>
  </a>
  
  <a href="" aria-labelledby="">
    <figure class="product">
    <img src="./assets/img/caneca-capacete.svg" alt="">
    <figcaption id="">Produto XYZ <span class="hideVisually">por R$60,00</span></figcaption>
    <p class="preco">R$ 60,00</p>
    <a href="">Ver produto</a>
  </figure>
  </a>
  <a href="" aria-labelledby="">
    <figure class="product">
    <img src="./assets/img/caneca-capacete.svg" alt="">
    <figcaption id="">Produto XYZ <span class="hideVisually">por R$60,00</span></figcaption>
    <p class="preco">R$ 60,00</p>
    <a href="">Ver produto</a>
  </figure>
  </a>
  <a href="" aria-labelledby="">
    <figure class="product">
    <img src="./assets/img/caneca-capacete.svg" alt="">
    <figcaption id="">Produto XYZ <span class="hideVisually">por R$60,00</span></figcaption>
    <p class="preco">R$ 60,00</p>
    <a href="">Ver produto</a>
  </figure>
  </a> */