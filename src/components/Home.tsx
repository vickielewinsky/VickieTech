import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="mainTitle">Welcome to My Portfolio</h1>
      <p className="introText">
        Hi, I'm <strong className="name">Lewinsky Victoria</strong>, and I'm a passionate <span className="highlight">Web Developer</span> with a strong background in <span className="highlight">Full Stack Development</span>. Welcome to my personal portfolio website, where I showcase my skills and projects.
      </p>

      <div className="imageWrapper">
        {/* Update the image source to img001.jpg */}
        <Image 
          src="/img001.jpg" 
          alt="Lewinsky Victoria" 
          width={200} 
          height={200} 
          className="profileImage" 
        />
      </div>

      <p className="description">
        I specialize in building user-friendly websites using modern technologies such as <span className="highlight">React</span>, <span className="highlight">Next.js</span>, and <span className="highlight">Django</span>. Here, you'll find a collection of my <span className="highlight">projects</span>, my technical <span className="highlight">skills</span>, and how to <span className="highlight">contact me</span> for collaboration or inquiries. Feel free to explore and get in touch!
      </p>

      <div className="cta">
        <p className="ctaText">Interested in collaborating? <a href="mailto:lewinskyvictoria45@gmail.com" className="ctaLink">Reach out to me!</a></p>
      </div>
    </div>
  );
};

export default Home;
