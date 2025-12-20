import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";
import ProductFlowClient from "./ProductFlowClient";

export default async function ProductFlowSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const steps = [
    {
      label: dict.home.sections.product_flow.step_1_label,
      text: dict.home.sections.product_flow.step_1_text,
    },
    {
      label: dict.home.sections.product_flow.step_2_label,
      text: dict.home.sections.product_flow.step_2_text,
    },
    {
      label: dict.home.sections.product_flow.step_3_label,
      text: dict.home.sections.product_flow.step_3_text,
    },
    {
      label: dict.home.sections.product_flow.step_4_label,
      text: dict.home.sections.product_flow.step_4_text,
    },
  ];

  return (
    <ProductFlowClient
      title={dict.home.sections.product_flow.title}
      description={dict.home.sections.product_flow.description}
      steps={steps}
    />
  );
}
