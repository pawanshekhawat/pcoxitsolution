import React, { lazy } from "react";
import SEOBredCrmb from "../../../public/assets/images/service/breadcrumbSEO.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const SeoService = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("seo_dev_1_head"),
    mainDesc: t("seo_main_desc"),
    processTitle: t("seo_process1_main_title"),
    processSections: [
      {
        titleKey: "seo_process1_1_title",
        descKey: "seo_process1_1_desc",
      },
      {
        titleKey: "seo_process1_2_title",
        descKey: "seo_process1_2_desc",
      },
      {
        titleKey: "seo_process1_3_title",
        descKey: "seo_process1_3_desc",
      },
      {
        titleKey: "seo_process1_4_title",
        descKey: "seo_process1_4_desc",
      },
    ],
    solutionsTitle: t("seo_solution1_title"),
    solutionSections: [
      { key: "seo_solution1_1" },
      { key: "seo_solution1_2" },
      { key: "seo_solution1_3" },
      { key: "seo_solution1_4" },
      { key: "seo_solution1_5" },
    ],
    contactTitle: t("contact_us_bottom_title"),
    contactDescription: t("contact_us_bottom_desc"),
    contactButtonText: t("contact_us_bottom_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Search Engine Optimization (SEO)"
      backgroundImage={SEOBredCrmb}
      content={content}
    />
  );
};

export default SeoService;
