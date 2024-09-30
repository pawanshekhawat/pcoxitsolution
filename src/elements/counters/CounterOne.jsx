import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTranslation } from 'react-i18next';

const CounterOne = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };

    const { t } = useTranslation();

    const Data = [
        {
            countNum: 50000,
            countTitle: `${t('promise')}`,
        },
        {
            countNum: 24,
            countTitle: `${t('country')}`,
        },
        {
            countNum: 350,
            countTitle: `${t('teams')}`,
        },
    ];

    useEffect(() => {
        // You may add any additional setup or cleanup logic here.
        // For example, if you need to perform an action when the component mounts, you can place it here.
    }, []);

    return (
        <>
            <div className="row">
                {Data.map((value, index) => (
                    <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                        <h5 className="counter">
                            <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                                <CountUp end={didViewCountUp ? value.countNum : 0} />
                            </VisibilitySensor>
                        </h5>
                        <p className="description">{value.countTitle}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CounterOne;
