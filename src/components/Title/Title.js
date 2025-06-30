import styles from './Title.module.css'

const Title = ({ type, title, clarification, under = false }) => {
  const HeadingTag = type || 'h3';
  const typeClass = styles[type] || '';

  return (
    <div className={`${styles['title-container']} ${under ? styles['under'] : ''} ${typeClass}`}>
      <HeadingTag className={`BLACKOUT ${styles.title}`}>{title}</HeadingTag>
      <p className={`${styles.clarification}`}>[ {clarification ? clarification : title} ]</p>
    </div>
  );
}

export default Title;