import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";
import TeamSectionClient from "./TeamSectionClient";
import { team } from "~/data/team";

export default async function TeamSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <TeamSectionClient title={dict.home.sections.team.title} team={team} />
  );
}
