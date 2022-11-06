import css from '../Button/Button.module.css';

export const LoadMore =({onLoadMore}) =>{
    return(
      <div className={css.button_container}>
      <button className = {css.Button} type="button" onClick={onLoadMore}>
        Load more
      </button> 
      </div>
    );
};