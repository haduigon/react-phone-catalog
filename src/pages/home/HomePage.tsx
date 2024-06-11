/* eslint-disable */
import { useContext, useEffect } from 'react';
import '../ProductPage/product.scss';
import './homePage.scss';
import { PaginationSlider } from '../../pagination/PaginationSlider';
import { StateContext } from '../../AppContext';
import { Link } from 'react-router-dom';
import { getHotPriceProducts, getBrandNewProducts } from '../../helpers/utils';
import BigSlider from '../../components/BigSlider';

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useContext(StateContext);

  return (
    <div>
      <BigSlider render={location.pathname} />
      <PaginationSlider
        pageName="pageTop"
        headline="Hot prices"
        array={getHotPriceProducts(state.products)}
      />

      <h1 className="home-page-header-text">Shop by category</h1>
      <div className="chunk-container-category chunk-container-big category-box">
        <Link to="/phones" className="link" replace>
          <div className="square left mb-24">
            <img
              className="category-img"
              src="./img/covers/image6.png"
              alt="img"
              style={{ float: 'right' }}
            />
          </div>

          <div>
            <div>
              <div className="big-title">Mobile phones</div>
              <div className="small-title">
                {state.products.filter(product => product.type === 'phone')
                  .length + ' models'}
              </div>
            </div>
          </div>
        </Link>
        <Link to="/tablets" className="link">
          <div className="square left mb-24">
            <img
              className="category-img"
              src="./img/covers/image5.png"
              alt="img"
              style={{ float: 'right' }}
            />
          </div>
          <div>
            <div>
              <div className="big-title">Tablets</div>
              <div className="small-title">
                {state.products.filter(product => product.type === 'tablet')
                  .length + ' models'}
              </div>
            </div>
          </div>
        </Link>

        <Link to="/accessories" className="link">
          <div className="square left mb-24">
            <img
              className="category-img"
              src="./img/covers/image7.png"
              alt="img"
              style={{ float: 'right' }}
            />
          </div>
          <div>
            <div>
              <div className="big-title">Accessories</div>
              <div className="small-title">
                {state.products.filter(product => product.type === 'accessoire')
                  .length + ' models'}
              </div>
            </div>
          </div>
        </Link>
      </div>

      <PaginationSlider
        pageName="pageDown"
        headline="Brand new models"
        array={getBrandNewProducts(state.products)}
      />
    </div>
  );
};
