import React from 'react';
import choose from '../../../img/choose-videos.webp';
import process from '../../../img/process.jpg';
import textFile from '../../../img/Export_the_TXT_file_752f2f2490.webp';

const TranscribeSteps = () => {
    return (
        <div className='ml-16 mr-4 text-center mt-16 mb-36'>
            <h1 className='font-[Oswald] text-4xl font-semibold'>How to transcribe videos to text?</h1>
            <div className='flex flex-wrap items-center justify-center gap-20 mt-10'>
                <div>
                    <div className='h-72'>
                        <img className='w-96' src={choose} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Choose Video</h3>
                        <p className='w-96 pt-2'>Go to YouTube and choose your video from YouTube whose video you want to transcribe or subtitle Then copy that video link.</p>
                    </div>
                </div>
                <div>
                    <div className='h-72'>
                        <img className='w-96' src={process} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Click Button</h3>
                        <p className='w-96 pt-2'>After copying that link, paste it into the input field. Then click on the process button and wait a few seconds.</p>
                    </div>
                </div>
                <div>
                    <div className='h-72'>
                        <img className='w-96' src={textFile} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Download File</h3>
                        <p className='w-96 pt-2'>You see text or subtitles generated from the video. Now, you click on the download button. And the video-to-text file download is complete.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TranscribeSteps;