import React, { lazy } from "react";
import SDBredCrmb from "../../../public/assets/images/service/breadcrumbSD.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const SoftDev = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("software_dev_1_head"),
    mainDesc: t("sd_main_desc"),
    processTitle: t("sd_process1_main_title"),
    processSections: [
      {
        titleKey: "sd_process1_1_title",
        descKey: "sd_process1_1_desc",
      },
      {
        titleKey: "sd_process1_2_title",
        descKey: "sd_process1_2_desc",
      },
      {
        titleKey: "sd_process1_3_title",
        descKey: "sd_process1_3_desc",
      },
      {
        titleKey: "sd_process1_4_title",
        descKey: "sd_process1_4_desc",
      },
    ],
    solutionsTitle: t("sd_solution1_title"),
    solutionSections: [
      { key: "sd_solution1_1" },
      { key: "sd_solution1_2" },
      { key: "sd_solution1_3" },
      { key: "sd_solution1_4" },
      { key: "sd_solution1_5" },
      { key: "sd_solution1_6" },
      { key: "sd_solution1_7" },
      { key: "sd_solution1_8" },
      { key: "sd_solution1_9" },
      { key: "sd_solution1_10" },
      { key: "sd_solution1_11" },
      { key: "sd_solution1_12" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Software Development"
      backgroundImage={SDBredCrmb}
      content={content}
    />
  );
};

export default SoftDev;
