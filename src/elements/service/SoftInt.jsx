import React, { lazy } from "react";
import SISBredCrmb from "../../../public/assets/images/service/breadcrumbSIS.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const SoftDev = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("sis_dev_1_head"),
    mainDesc: t("sis_main_desc"),
    processTitle: t("sis_process1_main_title"),
    processSections: [
      {
        titleKey: "sis_process1_1_title",
        descKey: "sis_process1_1_desc",
      },
      {
        titleKey: "sis_process1_2_title",
        descKey: "sis_process1_2_desc",
      },
      {
        titleKey: "sis_process1_3_title",
        descKey: "sis_process1_3_desc",
      },
      {
        titleKey: "sis_process1_4_title",
        descKey: "sis_process1_4_desc",
      },
    ],
    solutionsTitle: t("sis_solution1_title"),
    solutionSections: [
      { key: "sis_solution1_1" },
      { key: "sis_solution1_2" },
      { key: "sis_solution1_3" },
      { key: "sis_solution1_4" },
      { key: "sis_solution1_5" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Software Integration Solutions"
      backgroundImage={SISBredCrmb}
      content={content}
    />
  );
};

export default SoftDev;
