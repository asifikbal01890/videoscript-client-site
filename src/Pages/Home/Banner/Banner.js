import React, { useState } from 'react';
import imgLeftUpLeft from '../../../img/banner-left-up-left.png';
import imgLeftUpRight from '../../../img/banner-left-up-right.png';
import imgLeftDown from '../../../img/banner-left-down.png';
import imgRightUp from '../../../img/banner-right-up.png';
import imgRightMid from '../../../img/banner-right-mid.png';
import imgRightDown from '../../../img/banner-right-down.png';
import { saveAs } from 'file-saver';
import './Banner.css';


const Banner = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState("")
    const [downLink, setDownLink] = useState("")


    const downloadFile = async () => {
        setIsLoading(true)
        const link = downLink.slice(32, downLink.length)
        const query = {
            videoId: link
        };
        const fetchUrl = "https://youtube-browser-api.netlify.app/transcript?" + new URLSearchParams(query).toString()
        const res = await fetch(fetchUrl)
        const data = res.json()

        return data
    }

    let data = " "

    const merge = async (response) => {
        let merged = "";
        for (let i = 0; i < response.videoId.length; i++) {
            merged += response.videoId[i].text;
        }
        setText(merged);
        setIsLoading(false)
        console.log("merged text: ", merged);
        console.log("lenght", response.videoId.length - 1)
    };


    const handleButtonClick = async () => {
        setIsLoading(true)
        try {
            const download = await downloadFile()
            await merge(download)
        } catch (error) {
            setText('Subtitle Not Found')
            setIsLoading(false)
            console.error(error)
        }
    }

    const handleDownload = () => {
        const content = text
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'subtitle.txt');
    }

    return (
        <div className='ml-16 pt-28 mr-4'>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 mt-10 md:flex hidden'>
                    <div>
                        <div className='flex items-end w-full'>
                            <img src={imgLeftUpLeft} alt="" className='w-3/5 animate-img-1' />
                            <img src={imgLeftUpRight} alt="" className='w-1/4 animate-img-2' />
                        </div>
                        <div className='ml-16'>
                            <img src={imgLeftDown} alt="" className='lg:w-3/4 w-full animate-img-3' />
                        </div>
                    </div>
                </div>
                <div className='md:col-span-8 col-span-12 text-center'>
                    <h1 className='font-[Oswald] text-7xl font-bold'>Video to Text Converter</h1>
                    <p className='md:w-[550px] w-full mx-auto mt-6 font-[Heebo]'>This website offers an easy and convenient way to convert your video to text format. Simply drop your video link, click on the process button, and you're done! No more manual transcription or complicated processes.</p>
                    <div>
                        <input type="text" onChange={(e) => setDownLink(e.target.value)} placeholder='Enter a link to download subtitles' className='border-[2px] p-3 rounded-none focus:outline-0 focus:border-primary mt-12 w-[90%]' />
                    </div>
                    <button onClick={() => handleButtonClick()} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-purple-600 rounded-md text-white mt-6 px-7 pt-3 pb-2 text-lg font-[Heebo] uppercase duration-500 hover:scale-[1.06]'>Process</button>
                </div>
                <div className=' col-span-2 mt-6 md:flex hidden'>
                    <div>
                        <img src={imgRightUp} alt="" className='animate-img-1' />
                        <img src={imgRightMid} alt="" className='animate-img-2' />
                        <img src={imgRightDown} alt="" className='animate-img-3' />
                    </div>
                </div>
            </div>
            {
                text ?
                    <>
                        <div className='text-center'>
                            <div className='h-full border p-6 rounded-xl bg-slate-100 '>{text}</div>
                            <button onClick={handleDownload} className={`${text === 'Subtitle Not Found' ? 'hidden' : 'flex'} mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-purple-600 rounded-md text-white mt-6 px-7 pt-3 pb-2 text-lg font-[Heebo] uppercase duration-500 hover:scale-[1.06]`}>Download file</button>
                        </div>
                    </>
                    :
                    <>

                    </>
            }
        </div>
    );
};

export default Banner;