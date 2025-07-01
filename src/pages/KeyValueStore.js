import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Title from '../components/Title/Title';

const KeyValueStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <main className='projectPage'>
      <HelmetProvider>
        <Helmet>
          <title>Tyra Wodén | Kernel key-value store</title>
        </Helmet>
      </HelmetProvider>

      <div className='projectSummary'>
        <Breadcrumb forPage={'Kernel key-value store'} />

        <div className='projectSummaryContent'>
          <ProjectSummary
            title={'kernel key value store'}
            subtitle={'A Linux kernel module allowing users to store key-value pairs.'}
            tasks={'Kernel programming, thread synchronization, socket programming'}
            duration={'1 month, 50%'}
            tools={'C, Python, Virtual Machine'}
          />
          <div>
            <img src={process.env.PUBLIC_URL + '/images/key_value_store/keys.png'} alt='Keys' />
          </div>
        </div>
      </div>

      <div className='projectContent'>
        <div className='projectDescription'>
          <div className='descriptionImage'>
            <img src={process.env.PUBLIC_URL + '/images/key_value_store/kv_store_diagram.png'} alt='Kernel key-value store diagram' />
            <p className='bold smallText'>Diagram representing the system</p>
          </div>
          <div className='descriptionText'>
            <Title type='h3' title={'description'} />
            {/* <h3 className='BLACKOUT'>description</h3> */}
            <p className=''>
              As part of the <Link className='blue' to='https://www.umu.se/utbildning/kurser/operativsystem/' target="_blank" rel="noopener noreferrer">Operating systems</Link> course, 
              a Linux Kernel Module (LKM) providing key-value storage was developed. A major part of the task was establishing communication 
              between kernel space and user space. The task also included ensuring thread safety, persistant storage of data, and implementing 
              access for remote users via authentication. 
            </p>
            <br />
            <Title type='h3' title={'results'} />
						{/* <h3 className='BLACKOUT'>results</h3> */}
						<p className=''>
							The result of the task is an LKM written in C that can store string key-value pairs. Communication between kernel and user space is 
              handled via Linux's virtual proc file system. Thread safety is achieved using mutex 
              locks, and persistant storage is implemented with a daemon process that retrieves and saves data to disk when the kernel 
              module is mounted and unmounted. A proxy server implemented in Python handles communication with remote clients by establishing 
              TCP connections. 
						</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KeyValueStore;