import './product.css';
import React from 'react';

function Product(props) {
  const [unit, setUnit] = React.useState('alt');
  const [countValue, setCountValue] = React.useState(1);
  
  let sellUnits = '';
  switch(props.product.unitFull) {
    case 'штука':
      sellUnits = 'штуками';
      break; 
    case 'упаковка':
      sellUnits = 'упаковками';
      break; 
    case 'метр погонный':    
      sellUnits = 'метрами погонными';
      break;  
    default: 
      sellUnits = props.product.unitFull;
  }
  
  return (
    <div className="product-wrapper">
      <div className="product grid-container">
        <div className="product__image">
          <a href="#">
            <img src={props.product.primaryImageUrl.slice(0, -4) + '_220x220_1' + props.product.primaryImageUrl.slice(-4)} alt=""/>
          </a>
        </div>
        <div className="product__code">
          <span>Код: {props.product.code}</span>
        </div>
        <div className="product__status">
          <span>Наличие</span>
        </div>
        <div className="product__about">
          <div className="about__name">
            <a href="#">{props.product.title}</a>
          </div>
          <div className="about__tags">
            <p><span>Могут понадобиться:</span> {props.product.assocProducts.slice(0, -1)}.</p>
          </div>
        </div>
        <div className="product__price">
          <div className="price__club-card">
            <p>По карте<br/> клуба</p>
            <p>{(unit === 'alt') ? props.product.priceGold : props.product.priceGoldAlt.toFixed(2)} ₽</p>
          </div>
          <div className="price__default">{(unit === 'alt') ? props.product.priceRetail : props.product.priceRetailAlt.toFixed(2)} ₽</div>
          <div className="price__points">Можно купить за 231,75 балла</div>
          <div className="price__select">
            <p className={(unit === 'full') ? 'select__unit active' : 'select__unit'} onClick={() => setUnit('full')}>За {props.product.unitAlt}</p>
            <p className={(unit === 'alt') ? 'select__unit active' : 'select__unit'} onClick={() => setUnit('alt')}>За {props.product.unit}</p>
          </div>
          <div className="price__counter-info">
            <p>Продается {sellUnits}:</p>
            <p>{countValue} {props.product.unit} = {(props.product.unitRatio / props.product.unitRatioAlt * countValue).toFixed(2)} {props.product.unitAlt}</p>
          </div>
          <div className="price__counter-wrapper">
            <div className="price__counter">
              <div className="input_area"><input type="text" value={countValue} onChange={() => setCountValue(countValue)}/></div>
              <div className="arrow_up" onClick={() => setCountValue(countValue + 1)}></div>
              <div className="arrow_down" onClick={() => (countValue > 1) && setCountValue(countValue - 1)}></div>
            </div>
            <div className="price__button" data-product-id={props.product.productId}>
               В корзину
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;