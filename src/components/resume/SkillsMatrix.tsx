import { useMemo, useState } from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import { Reveal } from '../Reveal';
import { portfolioData } from '../../data/portfolio';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

/**
 * Interactive skills matrix: live search across every skill plus
 * per-category filtering. Counts and an empty state keep it honest.
 */
export function SkillsMatrix() {
  const categories = portfolioData.skillCategories;
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const debouncedQuery = useDebouncedValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    return categories
      .filter((category) => !activeCategory || category.id === activeCategory)
      .map((category) => ({
        ...category,
        skills: category.skills.filter((skill) =>
          debouncedQuery ? skill.toLowerCase().includes(debouncedQuery) : true,
        ),
      }))
      .filter((category) => category.skills.length > 0);
  }, [categories, activeCategory, debouncedQuery]);

  const totalMatches = filtered.reduce((sum, category) => sum + category.skills.length, 0);

  return (
    <section className="resume-section" id="resume-skills" aria-labelledby="resume-skills-title">
      <Reveal className="resume-section-heading">
        <div>
          <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> 02 / Technical toolkit</p>
          <h2 id="resume-skills-title">Skills &amp; tools</h2>
        </div>
        <p className="resume-skill-count" aria-live="polite">
          {totalMatches} {totalMatches === 1 ? 'skill' : 'skills'}
        </p>
      </Reveal>

      <div className="resume-skill-controls">
        <div className="resume-skill-search">
          <Search size={15} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search skills…"
            aria-label="Search skills"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              <X size={14} aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="resume-skill-filters" role="group" aria-label="Filter skills by category">
          <button
            type="button"
            className={`resume-skill-filter ${activeCategory === null ? 'is-active' : ''}`}
            aria-pressed={activeCategory === null}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`resume-skill-filter ${activeCategory === category.id ? 'is-active' : ''}`}
              aria-pressed={activeCategory === category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="resume-empty">No skills match “{query}”. Try a different search.</p>
      ) : (
        <div className="resume-skill-groups">
          {filtered.map((category) => (
            <Reveal className="resume-skill-group" key={category.id}>
              <h3>{category.title}</h3>
              <ul className="resume-skill-tags">
                {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
