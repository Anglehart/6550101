import './product.css';
function Product() {
  return (
    <div className="product-wrapper">
      <div className="product grid-container">
        <div className="product__image">
          <a href="#">
            <img src="//tdp.ru/images/p/c2c/a6208-a7ae-11e5-bed3-00259036a192.jpg" alt=""/>
          </a>
        </div>
        <div className="product__code">
          <span>Код: 11367872</span>
        </div>
        <div className="product__status">
          <span>Наличие</span>
        </div>
        <div className="product__about">
          <div className="about__name">
            <a href="#">Ламинат Ламинели Сибирь кедр алтайский 33 кл 8 мм 2.13 кв.м</a>
          </div>
          <div className="about__tags">
            <p><span>Могут понадобиться:</span> подложка, nрулетка, набор для укладки ламината, лобзик, плинтус темный, теплый пол под ламинат и паркет.</p>
          </div>
        </div>
        <div className="product__price">
          <div className="price__club-card">
            <p>По карте<br/> клуба</p>
            <p>375,71 ₽</p>
          </div>
          <div className="price__default">391,09 ₽</div>
          <div className="price__points">Можно купить за 231,75 балла</div>
          <div className="price__select">
            <p className="select__unit active">За м. кв.</p>
            <p className="select__pack">За упаковку</p>
          </div>
          <div className="price__counter-info">
            <p>Продается упаковками</p>
            <p>1 упак. = 2.47 м. кв.</p>
          </div>
          <div className="price__counter-wrapper">
            <div className="price__counter">
              <div className="input_area"><input type="text" value="1"/></div>
              <div className="arrow_up"></div>
              <div className="arrow_down"></div>
            </div>
            <div className="price__button">
               В корзину
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;