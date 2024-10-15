import React, { lazy } from "react";
import PPCBredCrmb from "../../../public/assets/images/service/breadcrumbPPC.webp";
import { useTranslation } from "react-i18next";

const PageTemplate = lazy(() => import("./PageTemplate"));
const PPCService = () => {
  const { t } = useTranslation();

  const content = {
    titleSection: t("ppc_advertising_head"),
    mainDesc: t("ppc_advertising_main_desc"),
    processTitle: t("ppc_advertising_process1_main_title"),
    processSections: [
      {
        titleKey: "ppc_advertising_process1_1_title",
        descKey: "ppc_advertising_process1_1_desc",
      },
      {
        titleKey: "ppc_advertising_process1_2_title",
        descKey: "ppc_advertising_process1_2_desc",
      },
      {
        titleKey: "ppc_advertising_process1_3_title",
        descKey: "ppc_advertising_process1_3_desc",
      },
      {
        titleKey: "ppc_advertising_process1_4_title",
        descKey: "ppc_advertising_process1_4_desc",
      },
    ],
    solutionsTitle: t("ppc_advertising_solution1_title"),
    solutionSections: [
      { key: "ppc_advertising_solution1_1" },
      { key: "ppc_advertising_solution1_2" },
      { key: "ppc_advertising_solution1_3" },
      { key: "ppc_advertising_solution1_4" },
      { key: "ppc_advertising_solution1_5" },
    ],
    contactTitle: t("ppc_contact_title"),
    contactDescription: t("ppc_contact_desc"),
    contactButtonText: t("ppc_contact_btn"),
  };

  return (
    <PageTemplate
      pageTitle="Pay-Per-Click (PPC) Advertising"
      backgroundImage={PPCBredCrmb}
      content={content}
    />
  );
};

export default PPCService;
