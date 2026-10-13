"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WorkCarousel from "./WorkCarousel";
import { useI18n } from "./I18nProvider";

export default function Work({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const { t } = useI18n();

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-nezt">
        {showHeading && (
          <Reveal>
            <SectionHeading
              label={t.workSection.label}
              title={t.workSection.title}
              intro={t.workSection.intro}
            />
          </Reveal>
        )}

        <div
          className={`relative h-[36rem] overflow-hidden rounded-md border border-border bg-bg-elev md:h-[44rem] ${showHeading ? "mt-12 md:mt-14" : ""}`}
        >
          <WorkCarousel limit={limit} />
        </div>
      </div>
    </section>
  );
}
