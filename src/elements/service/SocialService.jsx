import React, { lazy } from "react";
import SMMBredCrmb from "../../../public/assets/images/service/breadcrumbSMM.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const SocialService = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("social_media_marketing_head"),
    mainDesc: t("social_media_marketing_main_desc"),
    processTitle: t("social_media_marketing_process1_main_title"),
    processSections: [
      {
        titleKey: "social_media_marketing_process1_1_title",
        descKey: "social_media_marketing_process1_1_desc",
      },
      {
        titleKey: "social_media_marketing_process1_2_title",
        descKey: "social_media_marketing_process1_2_desc",
      },
      {
        titleKey: "social_media_marketing_process1_3_title",
        descKey: "social_media_marketing_process1_3_desc",
      },
      {
        titleKey: "social_media_marketing_process1_4_title",
        descKey: "social_media_marketing_process1_4_desc",
      },
    ],
    solutionsTitle: t("social_media_marketing_solution1_title"),
    solutionSections: [
      { key: "social_media_marketing_solution1_1" },
      { key: "social_media_marketing_solution1_2" },
      { key: "social_media_marketing_solution1_3" },
      { key: "social_media_marketing_solution1_4" },
      { key: "social_media_marketing_solution1_5" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Social Media Marketing"
      backgroundImage={SMMBredCrmb}
      content={content}
    />
  );
};

export default SocialService;
