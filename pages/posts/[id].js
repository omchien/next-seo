import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { NextSeo } from 'next-seo';
import React from 'react';

export default function Post({ postData }) {
  return (
    <Layout>
      <NextSeo
        title="Title next seo"
        description="Desc next seo"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com/page',
          title: 'Title next seo',
          description: 'Desc next seo',
          images: [
            {
              url: '/images/sample.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
