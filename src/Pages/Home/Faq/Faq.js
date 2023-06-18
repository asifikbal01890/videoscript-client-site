import React from 'react';
import './Faq.css'

const Faq = () => {

    return (
        <div className='ml-16 mr-4 mt-28 font-[Heebo] z-0'>
            <div>
                <h2 className='font-[Oswald] text-center my-16 text-4xl font-semibold'>Frequently Asked Question</h2>
            </div>
            <div tabIndex={0} className="collapse static collapse-plus border-y border-base-300 bg-base-100 py-2">
                <div className="collapse-title text-2xl">
                    What is a video link to text convert website?
                </div>
                <div className="collapse-content">
                    <p>A video link to text convert website is an online service that transcribes audio from a video link into text format, making it easier to read, edit, and search.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse py-2 collapse-plus  border-base-300 bg-base-100">
                <div className="collapse-title text-2xl">
                    How does video link to text conversion work?
                </div>
                <div className="collapse-content">
                    <p>The process involves converting the audio from a video link into text format using advanced speech recognition technology. The service analyzes the audio and transcribes it into text, which is then displayed on the screen or delivered to the user in a file format of their choosing.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse py-2 collapse-plus border-y border-base-300 bg-base-100">
                <div className="collapse-title text-2xl">
                    What are the benefits of using a video link to text convert website?
                </div>
                <div className="collapse-content">
                    <p>Using a video link to text convert website can save time and effort in transcribing audio manually. It also makes the content more accessible to those who may have difficulty listening to audio, or for those who need to review or analyze the content in detail.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse py-2 collapse-plus  border-base-300 bg-base-100">
                <div className="collapse-title text-2xl">
                    What types of videos can be transcribed using a video link to text convert website?
                </div>
                <div className="collapse-content">
                    <p>Most types of videos can be transcribed using this service, including business meetings, webinars, lectures, interviews, and more.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse py-2 collapse-plus border-y border-base-300 bg-base-100">
                <div className="collapse-title text-2xl">
                    How accurate is the transcription process?
                </div>
                <div className="collapse-content">
                    <p>The accuracy of the transcription process depends on several factors, such as the quality of the audio, the clarity of the speakers, and the complexity of the content. While the technology is constantly improving, it is not always 100% accurate, and it may require manual editing to ensure a high level of accuracy.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;