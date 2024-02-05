import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import config from '@/config';
import { cache } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseUrl(url: string) {
  return url
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/ /g, '-')
    .replace(/'/g, '')
    .replace(/,/g, '');
}

export async function fetchArticles() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/articles?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchArticleBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchVideos() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/videos?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchVideoBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/videos?filters[slug][$eq]=${slug}`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchCategories() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/categories?populate[0]=sub_categories&populate[1]=sub_categories.thumbnail`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

// fetch subcategories

export async function fetchArticleBySubCategory(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?populate=*&filters[sub_category][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchVideosBySubcategory(subCategory: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/videos?filters[sub_category][name][$eq]=${subCategory}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchSubCategory() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store',
      cache: 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/sub-categories?populate[0]=articles&populate[1]=category`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchArticlesBySubcategory(subCategory: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?filters[sub_category][name][$eq]=${subCategory}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchBooks() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/books?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchClasses() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/classes?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchClassBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/classes?filters[slug][$eq]=${slug}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchCourses() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/courses?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchCourseBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/courses?filters[slug][$eq]=${slug}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchGallery() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/galleries?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}
