import React, { lazy } from "react";
import CMBredCrmb from "../../../public/assets/images/service/breadcrumbCM.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate")); 
const ContentService = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("content_marketing_head"),
    mainDesc: t("content_marketing_main_desc"),
    processTitle: t("content_marketing_process1_main_title"),
    processSections: [
      {
        titleKey: "content_marketing_process1_1_title",
        descKey: "content_marketing_process1_1_desc",
      },
      {
        titleKey: "content_marketing_process1_2_title",
        descKey: "content_marketing_process1_2_desc",
      },
      {
        titleKey: "content_marketing_process1_3_title",
        descKey: "content_marketing_process1_3_desc",
      },
      {
        titleKey: "content_marketing_process1_4_title",
        descKey: "content_marketing_process1_4_desc",
      },
    ],
    solutionsTitle: t("content_marketing_solution1_title"),
    solutionSections: [
      { key: "content_marketing_solution1_1" },
      { key: "content_marketing_solution1_2" },
      { key: "content_marketing_solution1_3" },
      { key: "content_marketing_solution1_4" },
      { key: "content_marketing_solution1_5" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Content Marketing"
      backgroundImage={CMBredCrmb}
      content={content}
    />
  );
};

export default ContentService;
