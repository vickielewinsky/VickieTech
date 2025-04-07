import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm <strong>LEWINSKY VICTORIA</strong>, and this is the home page of my portfolio website.</p>
      
      <div>
        <Image 
          src="/img001.jpg" // Correct path to the image in the public folder
          alt="Lewinsky Victoria"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }} // Ensure the image has rounded edges
        />
      </div>

      <p>
        Welcome to my personal portfolio. Here, you can explore my projects, skills, and contact information. Feel free to reach out to me for any collaboration or inquiries!
      </p>
    </div>
  );
};

export default Home;
