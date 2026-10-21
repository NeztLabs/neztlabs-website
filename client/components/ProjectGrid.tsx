"use client";

import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useI18n } from "./I18nProvider";
import type { Project } from "@/lib/i18n/es";

type Delay = 0 | 1 | 2 | 3 | 4;

function KindChip({ label }: { label: string }) {
  return (
    <span className="absolute left-4 top-4 rounded-sm border border-border-strong bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-fg backdrop-blur">
      {label}
    </span>
  );
}

function Cover({
  project,
  className,
  eager = false,
}: {
  project: Project;
  className: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {project.images[0] && (
        <img
          src={project.images[0]}
          alt={`${project.title} — ${project.client}`}
          loading={eager ? undefined : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        />
      )}
    </div>
  );
}

function ProjectCard({
  project,
  variant,
  delay,
}: {
  project: Project;
  variant: "featured" | "default";
  delay: Delay;
}) {
  const { t } = useI18n();
  const kindLabel =
    project.kind === "internal" ? t.workSection.kindInternal : null;
  const href = `/work/${project.slug}`;
  const leadMetric = project.metrics[0];

  if (variant === "featured") {
    return (
      <Reveal as="article" delay={delay}>
        <Link
          href={href}
          className="group grid overflow-hidden rounded-md border border-border bg-bg-elev transition-colors hover:border-accent/45 lg:grid-cols-12"
        >
          <div className="relative lg:col-span-7">
            <Cover
              project={project}
              eager
              className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[26rem]"
            />
            {kindLabel && <KindChip label={kindLabel} />}
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 md:p-8 lg:col-span-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {project.client}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-fg sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
                {project.heroSummary}
              </p>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-5">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono text-base text-fg sm:text-lg">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase leading-tight tracking-wider text-faint">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg transition-colors group-hover:text-accent">
                {t.workSection.viewCase}
                <Icon name="arrow-right" size={14} />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-bg-elev transition-colors hover:border-accent/45"
      >
        <div className="relative">
          <Cover project={project} className="aspect-[16/10]" />
          {kindLabel && <KindChip label={kindLabel} />}
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {project.client}
          </p>
          <h3 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight text-fg md:text-lg">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.heroSummary}
          </p>

          <div className="mt-auto pt-6">
            {leadMetric && (
              <>
                <p className="font-mono text-lg text-fg">{leadMetric.value}</p>
                <p className="mt-1 text-[10px] uppercase leading-tight tracking-wider text-faint">
                  {leadMetric.label}
                </p>
              </>
            )}
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent">
              {t.workSection.viewCase}
              <Icon name="arrow-right" size={14} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ProjectGrid({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const projects = limit ? t.projects.slice(0, limit) : t.projects;

  if (projects.length === 0) return null;

  const featured =
    projects.length > 2
      ? (projects.find((project) => project.featured) ?? projects[0])
      : undefined;
  const rest = featured
    ? projects.filter((project) => project.slug !== featured.slug)
    : projects;

  return (
    <div className="space-y-5">
      {featured && (
        <ProjectCard project={featured} variant="featured" delay={0} />
      )}

      <div
        className={
          featured
            ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            : "grid gap-5 sm:grid-cols-2"
        }
      >
        {rest.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            variant="default"
            delay={Math.min(index + 1, 4) as Delay}
          />
        ))}
      </div>
    </div>
  );
}
