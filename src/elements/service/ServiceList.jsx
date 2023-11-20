import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

// class ServiceThree extends Component{
//     render(){
//         const {column } = this.props;
//         const ServiceContent = ServiceList.slice(0 , this.props.item);

//         return(
//             <React.Fragment>
//                 <div className="row">
//                     {ServiceContent.map( (val , i) => (
//                         <div className={`${column}`} key={i}>
//                             <a href={t(`${val.path}`)}>
//                                 <div className="service service__style--2">
//                                     <div className="icon">
//                                         {val.icon}
//                                     </div>
//                                     <div className="content">
//                                         <h3 className="title">{val.title}</h3>
//                                         <p>{val.description}</p>
//                                     </div>
//                                 </div>
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
// export default ServiceThree;


const ServiceThree = (props) => {
    const { t } = useTranslation();
    const ServiceList = [
        {
            icon: <FiCast />,
            title: `${t('hr_services')}`,
            description: `${t('hr_services_message')}`,
            path: '/hr-services'
        },
        {
            icon: <FiLayers />,
            title: `${t('hr_consulting')}`,
            description: `${t('hr_consulting_message')}`,
            path: '/hr-consulting'
        },
        {
            icon: <FiUsers />,
            title: `${t('hr_third_party_payroll_services')}`,
            description: `${t('hr_third_party_payroll_services_message')}`,
            path: '/hr-third-party'
        },
        {
            icon: <FiMonitor />,
            title: `${t('business_consulting')}`,
            description: `${t('business_consulting_message')}`,
            path: '/business-consulting'

        },
        {
            icon: <FiUsers />,
            title: `${t('employment_training_and_development')}`,
            description: `${t('employment_training_and_development_message')}`,
            path: '/employee-training'
        },
        {
            icon: <FiMonitor />,
            title: `${t('hr_compilance_and_legal_support')}`,
            description: `${t('hr_compilance_and_legal_support_message')}`,
            path: '/hr-compliance'

        }
    ];
    const { column, item } = props;
    const ServiceContent = ServiceList.slice(0, item);

    return (
        <React.Fragment>
            <div className="row">
                {ServiceContent.map((val, i) => (
                    <div className={`${column}`} key={i}>
                        <a href={val.path}>
                            <div className="service service__style--2">
                                <div className="icon">{val.icon}</div>
                                <div className="content">
                                    <h3 className="title">{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default ServiceThree;

