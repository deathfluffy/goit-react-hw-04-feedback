import PropTypes from 'prop-types';
import css from './SectionMain.module.css';


export const SectionMain = ({ title, children }) =>  {
  return (
    <div className={css.section_container}>
      <h2 className={css.section_title}>{title}</h2>
      {children}
    </div>
  );
};

SectionMain.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};