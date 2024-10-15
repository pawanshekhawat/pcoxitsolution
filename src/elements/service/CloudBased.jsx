import React, { lazy } from "react";
import CCSBredCrmb from "../../../public/assets/images/service/breadcrumbCCS.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));

const CloudBased = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("cb_dev_1_head"),
    mainDesc: t("cb_main_desc"),
    processTitle: t("cb_process1_main_title"),
    processSections: [
      {
        titleKey: "cb_process1_1_title",
        descKey: "cb_process1_1_desc",
      },
      {
        titleKey: "cb_process1_2_title",
        descKey: "cb_process1_2_desc",
      },
      {
        titleKey: "cb_process1_3_title",
        descKey: "cb_process1_3_desc",
      },
      {
        titleKey: "cb_process1_4_title",
        descKey: "cb_process1_4_desc",
      },
    ],
    solutionsTitle: t("cb_solution1_title"),
    solutionSections: [
      { key: "cb_solution1_1" },
      { key: "cb_solution1_2" },
      { key: "cb_solution1_3" },
      { key: "cb_solution1_4" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Cloud-Based Solutions"
      backgroundImage={CCSBredCrmb}
      content={content}
    />
  );
};

export default CloudBased;
