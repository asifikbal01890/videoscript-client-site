import React from 'react';
import { BsLightningCharge, BsUiChecksGrid } from "react-icons/bs";
import { SlLock } from "react-icons/sl";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { MdComputer, MdLanguage } from "react-icons/md";
import ChooseCard from './ChooseCard';

const WhyChoose = () => {

const chooseInfos = 
[
    {
        id: "01",
        header: "Multiple Formats",
        color:"text-error text-3xl",
        icon: <BsUiChecksGrid/>,
        describe: "Videoscript supports various audio and video formats, including WAV, MP3, M4A, CAF, AIFF, AVI, RMVB, FLV, MP4, MOV, and WMW. Online video transcription is also available for YouTube videos, which does not require uploading a YouTube file."
    },
    {
        id: "02",
        header: "High Accuracy",
        color:"text-info text-[42px]",
        icon: <BiMessageRoundedCheck/>,
        describe: "Videoscript's voice recognition accuracy improves with time, thanks to robust machine learning algorithms. High-quality audio can reach 98.86% transcription accuracy."
    },
    {
        id: "03",
        header: "Privacy and Security",
        color:"text-success text-4xl",
        icon: <SlLock/>,
        describe: "Videoscript complies with several data protection regulations, including SSL, GDPR, APPI, and CCPA. We encrypt your data using AWS's RDP and S3 services."
    },
    {
        id: "04",
        header: "Workflow Consistency",
        color:"text-primary text-4xl",
        icon: <MdComputer/>,
        describe: "With a Videoscript account, you may use Videoscript Web and the Videoscript mobile app simultaneously. Transcription will automatically synchronize between PCs, phones, and tablets."
    },
    {
        id: "05",
        header: "Multiple Languages",
        color:"text-secondary text-4xl",
        icon: <MdLanguage/>,
        describe: "Videoscript supports transcribing over 104 languages, allowing you to quickly generate video subtitles for YouTube in English, Spanish, French, Hindi, and many other languages."
    },
    {
        id: "06",
        header: "Quick and Simple",
        color:"text-warning text-4xl",
        icon: <BsLightningCharge/>,
        describe: "Videoscript can transcribe up to 5-hour-long video to text in less than 5 minutes, saving hours of manual transcription work."
    },
]


    return (
        <div className='ml-16 mr-4 text-center my-16'>
          <div>
          <h1 className='font-[Oswald] text-4xl font-semibold'>Why Choose Videoscript?</h1>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16'>
            {
                chooseInfos.map(info => <ChooseCard
                    key={info.id}
                    info={info}
                ></ChooseCard>)
            }
          </div>
        </div>
    );
};

export default WhyChoose;