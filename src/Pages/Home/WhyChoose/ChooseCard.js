import React from 'react';

const ChooseCard = ({ info }) => {
    const { icon, header, describe, color } = info;
    return (
        <div>
            <div className="h-[100%] bg-slate-100 text-start p-16 font-[Heebo] rounded-md cursor-pointer duration-500 hover:scale-[1.1] hover:shadow-lg z-10">
                    <p className={`${color}`}>{icon}</p>
                    <h2 className="text-2xl font-semibold pt-6">{header}</h2>
                    <p>{describe}</p>
            </div>
        </div>
    );
};

export default ChooseCard;