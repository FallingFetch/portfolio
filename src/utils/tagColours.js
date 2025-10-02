
import { allSkills, skillCategories } from '../data/skills.js';

// Tag Colour Mappings for Skill Categories
const CATEGORY_COLOURS = {
  design: '#FE2665',
  development: '#994EFF',
  creative: '#4674FF',
  tools: '#06B6D4',
  interpersonal: '#10B981',
  business: '#FB923C',
};

// Build TAG_COLOURS: use each skill's first category only, one entry per skill name
export const TAG_COLOURS = allSkills.reduce((acc, skill) => {
  const firstCategory = Array.isArray(skill.categories) && skill.categories.length > 0
    ? skill.categories[0]
    : null;
  const colour = firstCategory && CATEGORY_COLOURS[firstCategory]
    ? CATEGORY_COLOURS[firstCategory]
    : '#4674FF'; // fallback
  // Ensure no duplicate keys (allSkills already has unique names); assign once
  if (!acc[skill.name]) acc[skill.name] = colour;
  return acc;
}, {});

// Get Tag Color Helper
export const getTagColor = (tag) => TAG_COLOURS[tag] || '#4674FF';

// Color to RGBA Converter
export const colorToRgba = (color, alpha) => {
  if (!color) return `rgba(70,116,255,${alpha})`;
  if (color.startsWith('rgb(')) {
    return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
  } else if (color.startsWith('#')) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return color;
};
