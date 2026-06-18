SET search_path TO public;
CREATE TYPE public.enum_about_blocks_cta_buttons_type AS ENUM ('internal', 'external', 'modal', 'scroll');
CREATE TYPE public.enum_about_blocks_cta_buttons_variant AS ENUM ('primary', 'secondary', 'link');
CREATE TYPE public.enum_about_blocks_gallery_variant AS ENUM ('grid', 'plektrum');
CREATE TYPE public.enum_about_blocks_teaser_group_teasers_buttons_type AS ENUM ('internal', 'external', 'modal', 'scroll');
CREATE TYPE public.enum_about_blocks_teaser_group_teasers_buttons_variant AS ENUM ('primary', 'secondary', 'link');
CREATE TYPE public.enum_about_blocks_text_section_buttons_type AS ENUM ('internal', 'external', 'modal', 'scroll');
CREATE TYPE public.enum_about_blocks_text_section_buttons_variant AS ENUM ('primary', 'secondary', 'link');
CREATE TYPE public.enum_about_blocks_text_with_image_buttons_type AS ENUM ('internal', 'external', 'modal', 'scroll');
CREATE TYPE public.enum_about_blocks_text_with_image_buttons_variant AS ENUM ('primary', 'secondary', 'link');
CREATE TYPE public.enum_about_blocks_text_with_image_image_position AS ENUM ('left', 'right');
CREATE TYPE public.enum_about_skills_category AS ENUM ('design', 'development', 'software');
--
-- PostgreSQL database dump
--

\restrict vIUghoe4rAzBXffslh1XyfoG0xdWgvUiLggJ9zud7645dZOiY9B6lB27SmRlf0b

-- Dumped from database version 15.14 (Homebrew)
-- Dumped by pg_dump version 15.14 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: about; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about (
    id integer NOT NULL,
    name character varying DEFAULT 'Daniel Lauding'::character varying,
    email character varying,
    description character varying,
    logo_id integer,
    logo_mov_id integer,
    hero_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


--
-- Name: about_blocks_cta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_cta (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    anchor_name character varying,
    title character varying,
    text character varying,
    block_name character varying
);


--
-- Name: about_blocks_cta_buttons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_cta_buttons (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    text character varying NOT NULL,
    variant public.enum_about_blocks_cta_buttons_variant DEFAULT 'primary'::public.enum_about_blocks_cta_buttons_variant,
    type public.enum_about_blocks_cta_buttons_type DEFAULT 'internal'::public.enum_about_blocks_cta_buttons_type,
    href character varying
);


--
-- Name: about_blocks_gallery; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_gallery (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    variant public.enum_about_blocks_gallery_variant DEFAULT 'grid'::public.enum_about_blocks_gallery_variant,
    block_name character varying
);


--
-- Name: about_blocks_gallery_images; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_gallery_images (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    image_id integer
);


--
-- Name: about_blocks_philosophy; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_philosophy (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    anchor_name character varying,
    block_name character varying
);


--
-- Name: about_blocks_philosophy_cards; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_philosophy_cards (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    icon_name character varying,
    title character varying,
    text character varying
);


--
-- Name: about_blocks_teaser_group; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_teaser_group (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    anchor_name character varying,
    block_name character varying
);


--
-- Name: about_blocks_teaser_group_teasers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_teaser_group_teasers (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    title character varying,
    subtitle character varying,
    date character varying,
    description character varying,
    image_id integer
);


--
-- Name: about_blocks_teaser_group_teasers_buttons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_teaser_group_teasers_buttons (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    text character varying NOT NULL,
    variant public.enum_about_blocks_teaser_group_teasers_buttons_variant DEFAULT 'primary'::public.enum_about_blocks_teaser_group_teasers_buttons_variant,
    type public.enum_about_blocks_teaser_group_teasers_buttons_type DEFAULT 'internal'::public.enum_about_blocks_teaser_group_teasers_buttons_type,
    href character varying
);


--
-- Name: about_blocks_teaser_group_teasers_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_teaser_group_teasers_tags (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    tag character varying
);


--
-- Name: about_blocks_text_section; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_text_section (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    anchor_name character varying,
    title character varying,
    text character varying,
    block_name character varying
);


--
-- Name: about_blocks_text_section_buttons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_text_section_buttons (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    text character varying NOT NULL,
    variant public.enum_about_blocks_text_section_buttons_variant DEFAULT 'primary'::public.enum_about_blocks_text_section_buttons_variant,
    type public.enum_about_blocks_text_section_buttons_type DEFAULT 'internal'::public.enum_about_blocks_text_section_buttons_type,
    href character varying
);


--
-- Name: about_blocks_text_with_image; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_text_with_image (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    _path text NOT NULL,
    id character varying NOT NULL,
    anchor_name character varying,
    title character varying,
    text character varying,
    image_position public.enum_about_blocks_text_with_image_image_position DEFAULT 'left'::public.enum_about_blocks_text_with_image_image_position,
    block_name character varying
);


--
-- Name: about_blocks_text_with_image_buttons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_text_with_image_buttons (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    text character varying NOT NULL,
    variant public.enum_about_blocks_text_with_image_buttons_variant DEFAULT 'primary'::public.enum_about_blocks_text_with_image_buttons_variant,
    type public.enum_about_blocks_text_with_image_buttons_type DEFAULT 'internal'::public.enum_about_blocks_text_with_image_buttons_type,
    href character varying
);


--
-- Name: about_blocks_text_with_image_images; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_blocks_text_with_image_images (
    _order integer NOT NULL,
    _parent_id character varying NOT NULL,
    id character varying NOT NULL,
    image_id integer
);


--
-- Name: about_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.about_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: about_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.about_id_seq OWNED BY public.about.id;


--
-- Name: about_skills; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_skills (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    category public.enum_about_skills_category,
    name character varying,
    rank numeric
);


--
-- Name: about_timeline; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_timeline (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    date character varying,
    title character varying,
    text character varying
);


--
-- Name: about id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about ALTER COLUMN id SET DEFAULT nextval('public.about_id_seq'::regclass);


--
-- Name: about_blocks_cta_buttons about_blocks_cta_buttons_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_cta_buttons
    ADD CONSTRAINT about_blocks_cta_buttons_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_cta about_blocks_cta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_cta
    ADD CONSTRAINT about_blocks_cta_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_gallery_images about_blocks_gallery_images_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_gallery_images
    ADD CONSTRAINT about_blocks_gallery_images_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_gallery about_blocks_gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_gallery
    ADD CONSTRAINT about_blocks_gallery_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_philosophy_cards about_blocks_philosophy_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_philosophy_cards
    ADD CONSTRAINT about_blocks_philosophy_cards_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_philosophy about_blocks_philosophy_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_philosophy
    ADD CONSTRAINT about_blocks_philosophy_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_teaser_group about_blocks_teaser_group_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group
    ADD CONSTRAINT about_blocks_teaser_group_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_teaser_group_teasers_buttons about_blocks_teaser_group_teasers_buttons_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers_buttons
    ADD CONSTRAINT about_blocks_teaser_group_teasers_buttons_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_teaser_group_teasers about_blocks_teaser_group_teasers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers
    ADD CONSTRAINT about_blocks_teaser_group_teasers_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_teaser_group_teasers_tags about_blocks_teaser_group_teasers_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers_tags
    ADD CONSTRAINT about_blocks_teaser_group_teasers_tags_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_text_section_buttons about_blocks_text_section_buttons_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_section_buttons
    ADD CONSTRAINT about_blocks_text_section_buttons_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_text_section about_blocks_text_section_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_section
    ADD CONSTRAINT about_blocks_text_section_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_text_with_image_buttons about_blocks_text_with_image_buttons_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image_buttons
    ADD CONSTRAINT about_blocks_text_with_image_buttons_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_text_with_image_images about_blocks_text_with_image_images_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image_images
    ADD CONSTRAINT about_blocks_text_with_image_images_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_text_with_image about_blocks_text_with_image_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image
    ADD CONSTRAINT about_blocks_text_with_image_pkey PRIMARY KEY (id);


--
-- Name: about about_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_pkey PRIMARY KEY (id);


--
-- Name: about_skills about_skills_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_skills
    ADD CONSTRAINT about_skills_pkey PRIMARY KEY (id);


--
-- Name: about_timeline about_timeline_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_timeline
    ADD CONSTRAINT about_timeline_pkey PRIMARY KEY (id);


--
-- Name: about_blocks_cta_buttons_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_cta_buttons_order_idx ON public.about_blocks_cta_buttons USING btree (_order);


--
-- Name: about_blocks_cta_buttons_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_cta_buttons_parent_id_idx ON public.about_blocks_cta_buttons USING btree (_parent_id);


--
-- Name: about_blocks_cta_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_cta_order_idx ON public.about_blocks_cta USING btree (_order);


--
-- Name: about_blocks_cta_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_cta_parent_id_idx ON public.about_blocks_cta USING btree (_parent_id);


--
-- Name: about_blocks_cta_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_cta_path_idx ON public.about_blocks_cta USING btree (_path);


--
-- Name: about_blocks_gallery_images_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_gallery_images_image_idx ON public.about_blocks_gallery_images USING btree (image_id);


--
-- Name: about_blocks_gallery_images_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_gallery_images_order_idx ON public.about_blocks_gallery_images USING btree (_order);


--
-- Name: about_blocks_gallery_images_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_gallery_images_parent_id_idx ON public.about_blocks_gallery_images USING btree (_parent_id);


--
-- Name: about_blocks_gallery_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_gallery_order_idx ON public.about_blocks_gallery USING btree (_order);


--
-- Name: about_blocks_gallery_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_gallery_parent_id_idx ON public.about_blocks_gallery USING btree (_parent_id);


--
-- Name: about_blocks_gallery_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_gallery_path_idx ON public.about_blocks_gallery USING btree (_path);


--
-- Name: about_blocks_philosophy_cards_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_philosophy_cards_order_idx ON public.about_blocks_philosophy_cards USING btree (_order);


--
-- Name: about_blocks_philosophy_cards_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_philosophy_cards_parent_id_idx ON public.about_blocks_philosophy_cards USING btree (_parent_id);


--
-- Name: about_blocks_philosophy_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_philosophy_order_idx ON public.about_blocks_philosophy USING btree (_order);


--
-- Name: about_blocks_philosophy_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_philosophy_parent_id_idx ON public.about_blocks_philosophy USING btree (_parent_id);


--
-- Name: about_blocks_philosophy_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_philosophy_path_idx ON public.about_blocks_philosophy USING btree (_path);


--
-- Name: about_blocks_teaser_group_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_order_idx ON public.about_blocks_teaser_group USING btree (_order);


--
-- Name: about_blocks_teaser_group_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_parent_id_idx ON public.about_blocks_teaser_group USING btree (_parent_id);


--
-- Name: about_blocks_teaser_group_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_path_idx ON public.about_blocks_teaser_group USING btree (_path);


--
-- Name: about_blocks_teaser_group_teasers_buttons_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_buttons_order_idx ON public.about_blocks_teaser_group_teasers_buttons USING btree (_order);


--
-- Name: about_blocks_teaser_group_teasers_buttons_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_buttons_parent_id_idx ON public.about_blocks_teaser_group_teasers_buttons USING btree (_parent_id);


--
-- Name: about_blocks_teaser_group_teasers_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_image_idx ON public.about_blocks_teaser_group_teasers USING btree (image_id);


--
-- Name: about_blocks_teaser_group_teasers_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_order_idx ON public.about_blocks_teaser_group_teasers USING btree (_order);


--
-- Name: about_blocks_teaser_group_teasers_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_parent_id_idx ON public.about_blocks_teaser_group_teasers USING btree (_parent_id);


--
-- Name: about_blocks_teaser_group_teasers_tags_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_tags_order_idx ON public.about_blocks_teaser_group_teasers_tags USING btree (_order);


--
-- Name: about_blocks_teaser_group_teasers_tags_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_teaser_group_teasers_tags_parent_id_idx ON public.about_blocks_teaser_group_teasers_tags USING btree (_parent_id);


--
-- Name: about_blocks_text_section_buttons_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_section_buttons_order_idx ON public.about_blocks_text_section_buttons USING btree (_order);


--
-- Name: about_blocks_text_section_buttons_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_section_buttons_parent_id_idx ON public.about_blocks_text_section_buttons USING btree (_parent_id);


--
-- Name: about_blocks_text_section_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_section_order_idx ON public.about_blocks_text_section USING btree (_order);


--
-- Name: about_blocks_text_section_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_section_parent_id_idx ON public.about_blocks_text_section USING btree (_parent_id);


--
-- Name: about_blocks_text_section_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_section_path_idx ON public.about_blocks_text_section USING btree (_path);


--
-- Name: about_blocks_text_with_image_buttons_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_buttons_order_idx ON public.about_blocks_text_with_image_buttons USING btree (_order);


--
-- Name: about_blocks_text_with_image_buttons_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_buttons_parent_id_idx ON public.about_blocks_text_with_image_buttons USING btree (_parent_id);


--
-- Name: about_blocks_text_with_image_images_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_images_image_idx ON public.about_blocks_text_with_image_images USING btree (image_id);


--
-- Name: about_blocks_text_with_image_images_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_images_order_idx ON public.about_blocks_text_with_image_images USING btree (_order);


--
-- Name: about_blocks_text_with_image_images_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_images_parent_id_idx ON public.about_blocks_text_with_image_images USING btree (_parent_id);


--
-- Name: about_blocks_text_with_image_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_order_idx ON public.about_blocks_text_with_image USING btree (_order);


--
-- Name: about_blocks_text_with_image_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_parent_id_idx ON public.about_blocks_text_with_image USING btree (_parent_id);


--
-- Name: about_blocks_text_with_image_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_blocks_text_with_image_path_idx ON public.about_blocks_text_with_image USING btree (_path);


--
-- Name: about_hero_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_hero_idx ON public.about USING btree (hero_id);


--
-- Name: about_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_logo_idx ON public.about USING btree (logo_id);


--
-- Name: about_logo_mov_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_logo_mov_idx ON public.about USING btree (logo_mov_id);


--
-- Name: about_skills_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_skills_order_idx ON public.about_skills USING btree (_order);


--
-- Name: about_skills_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_skills_parent_id_idx ON public.about_skills USING btree (_parent_id);


--
-- Name: about_timeline_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_timeline_order_idx ON public.about_timeline USING btree (_order);


--
-- Name: about_timeline_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX about_timeline_parent_id_idx ON public.about_timeline USING btree (_parent_id);


--
-- Name: about_blocks_cta_buttons about_blocks_cta_buttons_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_cta_buttons
    ADD CONSTRAINT about_blocks_cta_buttons_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_cta(id) ON DELETE CASCADE;


--
-- Name: about_blocks_cta about_blocks_cta_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_cta
    ADD CONSTRAINT about_blocks_cta_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about_blocks_gallery_images about_blocks_gallery_images_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_gallery_images
    ADD CONSTRAINT about_blocks_gallery_images_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: about_blocks_gallery_images about_blocks_gallery_images_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_gallery_images
    ADD CONSTRAINT about_blocks_gallery_images_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_gallery(id) ON DELETE CASCADE;


--
-- Name: about_blocks_gallery about_blocks_gallery_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_gallery
    ADD CONSTRAINT about_blocks_gallery_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about_blocks_philosophy_cards about_blocks_philosophy_cards_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_philosophy_cards
    ADD CONSTRAINT about_blocks_philosophy_cards_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_philosophy(id) ON DELETE CASCADE;


--
-- Name: about_blocks_philosophy about_blocks_philosophy_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_philosophy
    ADD CONSTRAINT about_blocks_philosophy_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about_blocks_teaser_group about_blocks_teaser_group_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group
    ADD CONSTRAINT about_blocks_teaser_group_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about_blocks_teaser_group_teasers_buttons about_blocks_teaser_group_teasers_buttons_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers_buttons
    ADD CONSTRAINT about_blocks_teaser_group_teasers_buttons_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_teaser_group_teasers(id) ON DELETE CASCADE;


--
-- Name: about_blocks_teaser_group_teasers about_blocks_teaser_group_teasers_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers
    ADD CONSTRAINT about_blocks_teaser_group_teasers_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: about_blocks_teaser_group_teasers about_blocks_teaser_group_teasers_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers
    ADD CONSTRAINT about_blocks_teaser_group_teasers_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_teaser_group(id) ON DELETE CASCADE;


--
-- Name: about_blocks_teaser_group_teasers_tags about_blocks_teaser_group_teasers_tags_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_teaser_group_teasers_tags
    ADD CONSTRAINT about_blocks_teaser_group_teasers_tags_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_teaser_group_teasers(id) ON DELETE CASCADE;


--
-- Name: about_blocks_text_section_buttons about_blocks_text_section_buttons_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_section_buttons
    ADD CONSTRAINT about_blocks_text_section_buttons_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_text_section(id) ON DELETE CASCADE;


--
-- Name: about_blocks_text_section about_blocks_text_section_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_section
    ADD CONSTRAINT about_blocks_text_section_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about_blocks_text_with_image_buttons about_blocks_text_with_image_buttons_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image_buttons
    ADD CONSTRAINT about_blocks_text_with_image_buttons_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_text_with_image(id) ON DELETE CASCADE;


--
-- Name: about_blocks_text_with_image_images about_blocks_text_with_image_images_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image_images
    ADD CONSTRAINT about_blocks_text_with_image_images_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: about_blocks_text_with_image_images about_blocks_text_with_image_images_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image_images
    ADD CONSTRAINT about_blocks_text_with_image_images_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about_blocks_text_with_image(id) ON DELETE CASCADE;


--
-- Name: about_blocks_text_with_image about_blocks_text_with_image_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_blocks_text_with_image
    ADD CONSTRAINT about_blocks_text_with_image_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about about_hero_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_hero_id_media_id_fk FOREIGN KEY (hero_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: about about_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_logo_id_media_id_fk FOREIGN KEY (logo_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: about about_logo_mov_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_logo_mov_id_media_id_fk FOREIGN KEY (logo_mov_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: about_skills about_skills_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_skills
    ADD CONSTRAINT about_skills_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- Name: about_timeline about_timeline_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_timeline
    ADD CONSTRAINT about_timeline_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.about(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict vIUghoe4rAzBXffslh1XyfoG0xdWgvUiLggJ9zud7645dZOiY9B6lB27SmRlf0b