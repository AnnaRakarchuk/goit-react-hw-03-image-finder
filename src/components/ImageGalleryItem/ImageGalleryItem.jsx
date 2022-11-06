import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem=({
    largeImageURL,
    webformatURL,
    openModal, 
}) =>{
    return(
        <li className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={css.ImageGalleryItem_image}
          onClick={() => openModal(largeImageURL)}
        />
      </li>
    );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};