import React, { lazy } from "react";
import WDBredCrmb from "../../../public/assets/images/service/breadcrumbWD.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const WebApp = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("web_dev_1_head"),
    mainDesc: t("wd_main_desc"),
    processTitle: t("wd_process1_main_title"),
    processSections: [
      {
        titleKey: "wd_process1_1_title",
        descKey: "wd_process1_1_desc",
      },
      {
        titleKey: "wd_process1_2_title",
        descKey: "wd_process1_2_desc",
      },
      {
        titleKey: "wd_process1_3_title",
        descKey: "wd_process1_3_desc",
      },
      {
        titleKey: "wd_process1_4_title",
        descKey: "wd_process1_4_desc",
      },
    ],
    solutionsTitle: t("wd_solution1_title"),
    solutionSections: [
      { key: "wd_solution1_1" },
      { key: "wd_solution1_2" },
      { key: "wd_solution1_3" },
      { key: "wd_solution1_4" },
      { key: "wd_solution1_5" },
      { key: "wd_solution1_6" },
      { key: "wd_solution1_7" },
      { key: "wd_solution1_8" },
      { key: "wd_solution1_9" },
      { key: "wd_solution1_10" },
      { key: "wd_solution1_11" },
      { key: "wd_solution1_12" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Web Development"
      backgroundImage={WDBredCrmb}
      content={content}
    />
  );
};

export default WebApp;
