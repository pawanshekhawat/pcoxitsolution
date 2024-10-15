import React, { lazy } from "react";
import SMBredCrmb from "../../../public/assets/images/service/breadcrumbSM.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const SoftDev = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("sm_dev_1_head"),
    mainDesc: t("sm_main_desc"),
    processTitle: t("sm_process1_main_title"),
    processSections: [
      {
        titleKey: "sm_process1_1_title",
        descKey: "sm_process1_1_desc",
      },
      {
        titleKey: "sm_process1_2_title",
        descKey: "sm_process1_2_desc",
      },
      {
        titleKey: "sm_process1_3_title",
        descKey: "sm_process1_3_desc",
      },
      {
        titleKey: "sm_process1_4_title",
        descKey: "sm_process1_4_desc",
      },
    ],
    solutionsTitle: t("sm_solution1_title"),
    solutionSections: [
      { key: "sm_solution1_1" },
      { key: "sm_solution1_2" },
      { key: "sm_solution1_3" },
      { key: "sm_solution1_4" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Software Maintenance"
      backgroundImage={SMBredCrmb}
      content={content}
    />
  );
};

export default SoftDev;
