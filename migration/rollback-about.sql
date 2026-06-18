-- ROLLBACK for the About migration (migration/about-tables-full.sql).
-- Drops ONLY the additive about* objects. Touches no existing data.
-- Apply: psql "<neon-url>" -v ON_ERROR_STOP=1 --single-transaction -f migration/rollback-about.sql
BEGIN;
DROP TABLE IF EXISTS
  about_blocks_text_with_image_images,
  about_blocks_text_with_image_buttons,
  about_blocks_text_with_image,
  about_blocks_text_section_buttons,
  about_blocks_text_section,
  about_blocks_teaser_group_teasers_tags,
  about_blocks_teaser_group_teasers_buttons,
  about_blocks_teaser_group_teasers,
  about_blocks_teaser_group,
  about_blocks_philosophy_cards,
  about_blocks_philosophy,
  about_blocks_gallery_images,
  about_blocks_gallery,
  about_blocks_cta_buttons,
  about_blocks_cta,
  about_skills,
  about_timeline,
  about
  CASCADE;
DROP TYPE IF EXISTS
  enum_about_blocks_cta_buttons_type,
  enum_about_blocks_cta_buttons_variant,
  enum_about_blocks_gallery_variant,
  enum_about_blocks_teaser_group_teasers_buttons_type,
  enum_about_blocks_teaser_group_teasers_buttons_variant,
  enum_about_blocks_text_section_buttons_type,
  enum_about_blocks_text_section_buttons_variant,
  enum_about_blocks_text_with_image_buttons_type,
  enum_about_blocks_text_with_image_buttons_variant,
  enum_about_blocks_text_with_image_image_position,
  enum_about_skills_category
  CASCADE;
COMMIT;
