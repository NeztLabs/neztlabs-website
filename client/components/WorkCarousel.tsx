"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FlexCarousel from "./FlexCarousel";
import { useI18n } from "./I18nProvider";

type CoverItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  slug: string;
};

export default function WorkCarousel({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const router = useRouter();
  const projects = limit ? t.projects.slice(0, limit) : t.projects;
  const [cardHeight, setCardHeight] = useState(0.5);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const apply = () => setCardHeight(query.matches ? 0.42 : 0.5);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const items: CoverItem[] = projects.flatMap((project) =>
    project.images.map((src, i) => ({
      src,
      alt:
        project.images.length > 1
          ? `${project.title} — ${project.client} (${i + 1}/${project.images.length})`
          : `${project.title} — ${project.client}`,
      title: project.title,
      subtitle: project.client,
      slug: project.slug,
    }))
  );

  return (
    <FlexCarousel
      items={items}
      preset="liquid"
      intro="rise"
      cardHeight={cardHeight}
      gap={16}
      radius={6}
      focusOnClick={false}
      captureWheel={false}
      captions
      className="work-carousel"
      onSelect={(_index, item) => {
        if (item?.slug) router.push(`/work/${item.slug}`);
      }}
    />
  );
}
