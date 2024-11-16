import Image from 'next/image';

export default function About() {

    return (

        <div className="flex flex-col items-start justify-center mx-auto max-w-[648px] mt-4">

            <div className="relative mb-16 mx-6">
            <Image src="/images/hero_image.png" alt="Hero" className="object-cover" layout="fixed" width={800} height={267} />
            <Image src="/images/about_profile.png" alt="Profile" className="absolute bottom-[-48px] left-8 w-28 h-28 rounded-full border-4 border-tony_BG-100" layout="fixed" width={96} height={96} />
            </div>
        
            <section className="mb-8 mx-6">
                <p>
                    🏡 Born and brought up in <a href="https://www.kerala.com/pages/kerala-destination-thodupuzha" target="_blank" className="underline underline-offset-2">Thodupuzha</a>, a relaxed town nestled in the heart of Kerala.
                    <br/>
                    📚 Holds a master&apos;s degree in management, but no longer interested in pursuing a managerial role. 
                    <br/>
                    🧑🏻‍💻 Business Analyst at Infosys → Freelance designer → Product designer at Hypersonix → Product designer at <a href="https://www.postman.com/" target="_blank" className="underline underline-offset-2">Postman</a>
                    <br/>
                    🖼️ Runs an art studio with my partner (<a href="https://www.instagram.com/juny_made_/" target="_blank" className="underline underline-offset-2">Instagram</a>)
                </p>
            </section>

            <section className="mb-8 mx-6">
                <h4 className="mb-2">Things I do for fun</h4>
                <p>
                    🎨 Love to illustrate. Did a 365 day drawing challenge in 2022 (<a href="https://pin.it/3PKGQjN2Y" target="_blank" className="underline underline-offset-2">Pinterest</a>)
                    <br/>
                    🎞️ Gives me great joy telling stories through animation (<a href="https://vimeo.com/tonyzebastian" target="_blank" className="underline underline-offset-2">Vimeo</a>)
                    <br/>
                    🎥 Aspiring cinematographer (<a href="https://www.instagram.com/tonyzebastian/" target="_blank" className="underline underline-offset-2">Instagram</a>)
                    <br/>
                    📸 Takes lot of pictures (<a href="https://www.pexels.com/@tonyzebastian/" target="_blank" className="underline underline-offset-2">Pexels</a>)
                </p>
            </section>

            <section className="mb-8 mx-6">
                <h4 className="mb-2">Personal principles</h4>
                <p>
                    - Consistency & effort outplays talent.
                    <br/>
                    - Side projects give the oxygen to survive on your regular job.
                    <br/>
                    - It&apos;s never too late to start a new hobby.
                    <br/>
                    - Allow events to influence you and your craft.
                </p>
            </section>


            <section className="mb-8 mx-6">
                <h4 className="mb-2">Start a conversation</h4>
                <p>
                    I&apos;d love to talk to you! Here&apos;s a list of ideas to start a conversation between us:
                    <br/>
                    - Send me a photo or video that you took.
                    <br/>
                    - Tell me about your camera setup.
                    <br/>
                    - Ask me about my art journey.
                    <br/>
                    - Just say <a href="mailto:tonyzebastian@gmail.com" target="_blank" className="underline underline-offset-2">“Hi”!</a>
                </p>
            </section>

        </div>
    )
  }