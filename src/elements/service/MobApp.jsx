import React, { lazy } from "react";
import MDBredCrmb from "../../../public/assets/images/service/breadcrumbMD.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate")); 
const MobApp = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("mob_dev_1_head"),
    mainDesc: t("md_main_desc"),
    processTitle: t("md_process1_main_title"),
    processSections: [
      {
        titleKey: "md_process1_1_title",
        descKey: "md_process1_1_desc",
      },
      {
        titleKey: "md_process1_2_title",
        descKey: "md_process1_2_desc",
      },
      {
        titleKey: "md_process1_3_title",
        descKey: "md_process1_3_desc",
      },
      {
        titleKey: "md_process1_4_title",
        descKey: "md_process1_4_desc",
      },
    ],
    solutionsTitle: t("md_solution1_title"),
    solutionSections: [
      { key: "md_solution1_1" },
      { key: "md_solution1_2" },
      { key: "md_solution1_3" },
      { key: "md_solution1_4" },
      { key: "md_solution1_5" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Mobile App Development"
      backgroundImage={MDBredCrmb}
      content={content}
    />
  );
};

export default MobApp;
