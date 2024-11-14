import { Twitter, Linkedin } from 'react-feather';

export const metadata = {
  title: 'Tony Sebastian',
  description: 'A brief description of Tony Sebastian\'s work and interests.',
  keywords: 'design, art, cinematography, photography, travel',
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-start justify-center mx-auto max-w-[500px] mt-32">
      <img src="../images/logo.svg" alt="Description" className="w-12 h-12 mb-4 mx-8" />
      <h1 className="text-tony_accent-100 mx-8">Tony Sebastian</h1>
      <h3 className="mx-8">Product Designer</h3>
      <p className="mt-4 mx-8">
        I like to build things. I’m into design, art, and cinematography. 
        Believes in consistency, side projects, picking up new hobbies, 
        and letting life shape my craft. Love chatting about photos, 
        memes, camera gear, travel tips, or just drop a "Hi"!
      </p>
      <p className="mt-6 mx-8" >
      Currently crafting experiences at <a href="https://www.postman.com/" target="_blank" class="underline underline-offset-2">Postman</a>.
      </p>

      <div className="flex space-x-4 mt-6 mx-8">
        <a href="https://www.linkedin.com/in/tonyzebastian/" target="_blank" rel="noopener noreferrer" className='opacity-75 transition-transform transform hover:scale-105 hover:opacity-100'>
        <Linkedin size={20} strokeWidth={1} color="#DEE2E6"/> 
        </a>
        <a href="https://x.com/tonyzebastian" target="_blank" rel="noopener noreferrer" className='opacity-75 transition-transform transform hover:scale-105 hover:opacity-100'>
        <Twitter size={20} strokeWidth={1} color="#DEE2E6" />
        </a>
      </div>

    </div>
  );
}