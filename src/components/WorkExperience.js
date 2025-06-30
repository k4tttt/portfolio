import Title from './Title/Title';

const WorkExperience = () => {

  return (
    <div id='work-experience'>
      <div className='section-content'>
        <div>
          <Title title={'work experience'} type={'h2'} />
          <p>blablabl</p>
        </div>

        <img className='topImage' src={process.env.PUBLIC_URL + '/images/computer_and_books.png'} alt='Computer and books' />
      </div>

    </div>
  );
}

export default WorkExperience;